'use client';
import { useState, useEffect } from 'react';
import { Button } from '@/_components/@ui/button';
import { Input } from '@/_components/@ui/input';
import { Label } from '@/_components/@ui/label';
import { Textarea } from '@/_components/@ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/_components/@ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/_components/@ui/card';
import { Loader2, Globe, Target, Tag, FileText, AlertTriangle, Save, Plus } from 'lucide-react';
import { Alert, AlertDescription } from '@/_components/@ui/alert';
import { blocksManage } from '../../_store';
import { useBlockActions } from '../../_hooks/useBlockActions';
import { Popover, PopoverContent, PopoverTrigger } from '@/_components/@ui/popover';

const BlockCrawler = () => {
    const { updateBlockData } = useBlockActions();
    const [crawlConfig, setCrawlConfig] = useState({
        url: 'https://keenthemes.com/metronic/',
        selector: '/html/body/div[1]/div/div[3]/div[2]/div[1]/div/div/div[5]',
        componentType: 'hero',
        componentName: 'Hero',
        description: ''
    });

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [componentTypes, setComponentTypes] = useState<{ value: string, label: string }[]>([]);
    const [isTypesLoading, setIsTypesLoading] = useState(false);
    const [newComponentType, setNewComponentType] = useState('');
    const [isAddingType, setIsAddingType] = useState(false);

    // 从API获取组件类型列表
    useEffect(() => {
        const fetchComponentTypes = async () => {
            setIsTypesLoading(true);
            try {
                const response = await fetch('/api/aigcode-blocks/type');
                if (!response.ok) {
                    throw new Error('Failed to fetch component types');
                }
                const result = await response.json();
                if (result.status === 'success' && Array.isArray(result.data)) {
                    // 将获取的类型转换为下拉列表所需的格式
                    const formattedTypes = result.data.map((type: string) => ({
                        value: type.toLowerCase(),
                        label: `${type.charAt(0).toUpperCase() + type.slice(1)}`
                    }));
                    setComponentTypes(formattedTypes);
                }
            } catch (err) {
                console.error('Error fetching component types:', err);
                // 设置默认类型，以防API失败
                setComponentTypes([
                    { value: 'hero', label: '英雄区 (Hero)' },
                    { value: 'feature', label: '特性展示 (Feature)' },
                    { value: 'testimonial', label: '推荐 (Testimonial)' }
                ]);
            } finally {
                setIsTypesLoading(false);
            }
        };

        fetchComponentTypes();
    }, []);

    const handleInputChange = (field: any, value: any) => {
        setCrawlConfig(prev => ({
            ...prev,
            [field]: value
        }));
        // 清除错误和成功消息
        if (error) setError('');
        if (success) setSuccess('');
    };

    const validateForm = () => {
        if (!crawlConfig.url.trim()) {
            setError('请输入有效的URL地址');
            return false;
        }

        if (!crawlConfig.selector.trim()) {
            setError('请输入XPath选择器');
            return false;
        }

        if (!crawlConfig.componentType) {
            setError('请选择组件类型');
            return false;
        }

        if (!crawlConfig.componentName.trim()) {
            setError('请输入组件名称');
            return false;
        }

        // 验证URL格式
        try {
            new URL(crawlConfig.url);
        } catch {
            setError('请输入有效的URL格式');
            return false;
        }

        return true;
    };

    const handleAddCustomType = () => {
        if (!newComponentType.trim()) {
            return;
        }

        const lowerCaseType = newComponentType.trim().toLowerCase();

        // 检查是否已存在
        const exists = componentTypes.some(type => type.value === lowerCaseType);
        if (exists) {
            setError('此组件类型已存在');
            return;
        }

        // 添加新类型
        const newType = {
            value: lowerCaseType,
            label: newComponentType.trim()
        };

        setComponentTypes(prev => [...prev, newType]);
        setCrawlConfig(prev => ({ ...prev, componentType: lowerCaseType }));
        setNewComponentType('');
        setIsAddingType(false);
    };

    const handleCrawl = async () => {
        if (!validateForm()) return;

        setIsLoading(true);
        setError('');
        setSuccess('');

        try {
            // 这里调用爬取API
            const response = await fetch('/api/crawler', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(crawlConfig),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || '爬取失败');
            }

            setSuccess('组件爬取成功！已添加到组件库中。');

            if (result.componentCode) {
                blocksManage.setCode(result.componentCode, true);
            }

        } catch (err: any) {
            setError(err.message || '爬取过程中发生错误');
        } finally {
            setIsLoading(false);
        }
    };

    const handleSaveToLibrary = async () => {
        const currentCode = blocksManage.code;
        if (!currentCode) {
            setError('没有可用的组件代码，请先爬取组件');
            return;
        }

        setIsLoading(true);
        try {
            // 调用入库方法
            await updateBlockData({
                id: crypto.randomUUID(), // 生成唯一ID
                name: crawlConfig.componentName,
                code: currentCode,
                type: crawlConfig.componentType,
                props: {}, // 可以添加默认props
                description: crawlConfig.description
            });

            setSuccess('组件已成功保存到组件库！');
        } catch (err: any) {
            setError(err.message || '保存组件失败');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Target className="w-5 h-5" />
                        爬取组件配置
                    </CardTitle>
                    <CardDescription>
                        输入目标网站信息，自动提取组件代码
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {/* URL 输入 */}
                    <div className="space-y-2">
                        <Label htmlFor="url" className="flex items-center gap-2">
                            <Globe className="w-4 h-4" />
                            目标URL
                        </Label>
                        <Input
                            id="url"
                            type="url"
                            placeholder="https://example.com"
                            value={crawlConfig.url}
                            onChange={(e) => handleInputChange('url', e.target.value)}
                            className="w-full"
                        />
                    </div>

                    {/* XPath 选择器 */}
                    <div className="space-y-2">
                        <Label htmlFor="selector" className="flex items-center gap-2">
                            <Target className="w-4 h-4" />
                            XPath选择器
                        </Label>
                        <Input
                            id="selector"
                            placeholder="/html/body/div/section"
                            value={crawlConfig.selector}
                            onChange={(e) => handleInputChange('selector', e.target.value)}
                            className="w-full"
                        />
                        <p className="text-xs text-gray-500">
                            使用XPath选择器定位目标组件，如: /html/body/div/section, //div[@class='header']
                        </p>
                    </div>

                    {/* 组件类型选择 - 带自定义添加功能 */}
                    <div className="space-y-2">
                        <Label className="flex items-center gap-2">
                            <Tag className="w-4 h-4" />
                            组件类型
                        </Label>
                        <div className="flex gap-2">
                            <Select
                                value={crawlConfig.componentType}
                                onValueChange={(value) => handleInputChange('componentType', value)}
                                disabled={isTypesLoading}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder={isTypesLoading ? "加载中..." : "选择组件类型"} />
                                </SelectTrigger>
                                <SelectContent>
                                    {componentTypes.map((type) => (
                                        <SelectItem key={type.value} value={type.value}>
                                            {type.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            <Popover open={isAddingType} onOpenChange={setIsAddingType}>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        title="添加自定义类型"
                                    >
                                        <Plus className="h-4 w-4" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-80">
                                    <div className="space-y-4">
                                        <h4 className="font-medium">添加自定义组件类型</h4>
                                        <div className="flex gap-2">
                                            <Input
                                                placeholder="输入新类型名称"
                                                value={newComponentType}
                                                onChange={(e) => setNewComponentType(e.target.value)}
                                            />
                                            <Button onClick={handleAddCustomType}>添加</Button>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>

                    {/* 组件名称 */}
                    <div className="space-y-2">
                        <Label htmlFor="componentName" className="flex items-center gap-2">
                            <FileText className="w-4 h-4" />
                            组件名称
                        </Label>
                        <Input
                            id="componentName"
                            placeholder="输入组件名称"
                            value={crawlConfig.componentName}
                            onChange={(e) => handleInputChange('componentName', e.target.value)}
                            className="w-full"
                        />
                    </div>

                    {/* 组件描述 */}
                    <div className="space-y-2">
                        <Label htmlFor="description">
                            组件描述 (可选)
                        </Label>
                        <Textarea
                            id="description"
                            placeholder="描述组件的功能和用途..."
                            value={crawlConfig.description}
                            onChange={(e) => handleInputChange('description', e.target.value)}
                            className="w-full min-h-[80px]"
                        />
                    </div>

                    {/* 错误提示 */}
                    {error && (
                        <Alert variant="destructive">
                            <AlertTriangle className="h-4 w-4" />
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>
                    )}

                    {/* 成功提示 */}
                    {success && (
                        <Alert className="border-green-200 bg-green-50">
                            <div className="h-4 w-4 text-green-600">✓</div>
                            <AlertDescription className="text-green-700">
                                {success}
                            </AlertDescription>
                        </Alert>
                    )}

                    {/* 操作按钮 */}
                    <div className="flex gap-3 pt-4">
                        <Button
                            onClick={handleCrawl}
                            disabled={isLoading}
                            className="flex-1"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                    爬取中...
                                </>
                            ) : (
                                '开始爬取'
                            )}
                        </Button>

                        <Button
                            onClick={handleSaveToLibrary}
                            variant="secondary"
                            disabled={isLoading || !blocksManage.code}
                            className="flex-1"
                        >
                            <Save className="w-4 h-4 mr-2" />
                            入库保存
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default BlockCrawler;
