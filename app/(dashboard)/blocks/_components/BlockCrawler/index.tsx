'use client';
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/_components/@ui/button';
import { Input } from '@/_components/@ui/input';
import { Label } from '@/_components/@ui/label';
import { Textarea } from '@/_components/@ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/_components/@ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/_components/@ui/card';
import { Loader2, Globe, Target, Tag, FileText, AlertTriangle, Save, Plus, Clock, CheckCircle, XCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/_components/@ui/alert';
import { Progress } from '@/_components/@ui/progress';
import { blocksManage } from '../../_store';
import { useBlockActions } from '../../_hooks/useBlockActions';
import { Popover, PopoverContent, PopoverTrigger } from '@/_components/@ui/popover';

interface TaskStatus {
    status: 'pending' | 'processing' | 'completed' | 'failed';
    progress?: number;
    message?: string;
    result?: any;
    error?: string;
    createdAt: number;
    updatedAt: number;
}

const BlockCrawler = () => {
    const { updateBlockData } = useBlockActions();
    const [crawlConfig, setCrawlConfig] = useState({
        url: 'https://keenthemes.com/metronic/',
        selector: '/html/body/div[1]/div/div[3]/div[2]/div[1]/div/div/div[5]',
        componentType: 'Pricing',
        componentName: 'Pricing',
        description: '',
        screenshotUrl: ''
    });

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [componentTypes, setComponentTypes] = useState<{ value: string, label: string }[]>([]);
    const [isTypesLoading, setIsTypesLoading] = useState(false);
    const [newComponentType, setNewComponentType] = useState('');
    const [isAddingType, setIsAddingType] = useState(false);

    // 长任务相关状态
    const [currentTaskId, setCurrentTaskId] = useState<string | null>(null);
    const [taskStatus, setTaskStatus] = useState<TaskStatus | null>(null);
    const [isPolling, setIsPolling] = useState(false);
    const pollingIntervalRef = useRef<NodeJS.Timeout | null>(null);

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
                    const formattedTypes = result.data.map((type: string) => ({
                        value: type,
                        label: type
                    }));
                    setComponentTypes(formattedTypes);
                }
            } catch (err) {
                console.error('Error fetching component types:', err);
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

    // 清理轮询
    useEffect(() => {
        return () => {
            if (pollingIntervalRef.current) {
                clearInterval(pollingIntervalRef.current);
            }
        };
    }, []);

    // 轮询任务状态
    const startPolling = (taskId: string) => {
        setIsPolling(true);
        setCurrentTaskId(taskId);

        const pollTaskStatus = async () => {
            try {
                const response = await fetch(`/api/task-status/${taskId}`);
                const result = await response.json();

                if (result.success && result.data) {
                    const status = result.data as TaskStatus;
                    setTaskStatus(status);

                    // 如果任务完成或失败，停止轮询
                    if (status.status === 'completed' || status.status === 'failed') {
                        stopPolling();
                        handleTaskComplete(status);
                    }
                } else {
                    // 任务不存在或已过期
                    stopPolling();
                    setError('任务不存在或已过期');
                }
            } catch (err) {
                console.error('轮询任务状态失败:', err);
                // 继续轮询，可能是临时网络问题
            }
        };

        // 立即执行一次
        pollTaskStatus();

        // 每2秒轮询一次
        pollingIntervalRef.current = setInterval(pollTaskStatus, 2000);
    };

    const stopPolling = () => {
        setIsPolling(false);
        if (pollingIntervalRef.current) {
            clearInterval(pollingIntervalRef.current);
            pollingIntervalRef.current = null;
        }
    };

    // 处理任务完成
    const handleTaskComplete = (status: TaskStatus) => {
        setIsLoading(false);

        if (status.status === 'completed') {
            setSuccess('组件爬取成功！已添加到组件库中。');

            // 更新代码到编辑器
            if (status.result?.componentCode) {
                blocksManage.setCode(status.result.componentCode, true);
                setCrawlConfig(prev => ({
                    ...prev,
                    screenshotUrl: status.result.screenshotUrl || ''
                }));
            }
        } else if (status.status === 'failed') {
            setError(status.error || '爬取过程中发生错误');
        }

        // 清理任务状态
        setTimeout(() => {
            setCurrentTaskId(null);
            setTaskStatus(null);
        }, 3000);
    };

    const handleInputChange = (field: any, value: any) => {
        setCrawlConfig(prev => ({
            ...prev,
            [field]: value
        }));
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
        const exists = componentTypes.some(type => type.value === lowerCaseType);
        if (exists) {
            setError('此组件类型已存在');
            return;
        }

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
        setTaskStatus(null);

        try {
            // 启动长任务
            const response = await fetch('/api/crawler', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...crawlConfig,
                    async: true, // 标记为异步任务
                }),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || result.message || '爬取失败');
            }

            // 如果返回了taskId，开始轮询
            if (result.taskId) {
                startPolling(result.taskId);
            } else {
                // 同步返回的结果（兼容性处理）
                setIsLoading(false);
                setSuccess('组件爬取成功！已添加到组件库中。');

                if (result.componentCode) {
                    blocksManage.setCode(result.componentCode, true);
                    setCrawlConfig(prev => ({
                        ...prev,
                        screenshotUrl: result.screenshotUrl || ''
                    }));
                }
            }

        } catch (err: any) {
            setIsLoading(false);
            setError(err.message || '爬取过程中发生错误');
        }
    };

    const handleCancelTask = async () => {
        if (currentTaskId) {
            try {
                await fetch(`/api/task-status/${currentTaskId}`, {
                    method: 'DELETE',
                });
            } catch (err) {
                console.error('取消任务失败:', err);
            }
        }

        stopPolling();
        setIsLoading(false);
        setCurrentTaskId(null);
        setTaskStatus(null);
        setError('任务已取消');
    };

    const handleSaveToLibrary = async () => {
        const currentCode = blocksManage.code;
        if (!currentCode) {
            setError('没有可用的组件代码，请先爬取组件');
            return;
        }

        setIsLoading(true);
        try {
            await updateBlockData({
                id: crypto.randomUUID(),
                name: crawlConfig.componentName,
                code: currentCode,
                type: crawlConfig.componentType,
                props: {},
                screenshot_url: crawlConfig.screenshotUrl,
                source_url: crawlConfig.url,
            });

            setSuccess('组件已成功保存到组件库！');
        } catch (err: any) {
            setError(err.message || '保存组件失败');
        } finally {
            setIsLoading(false);
        }
    };

    // 渲染任务状态
    const renderTaskStatus = () => {
        if (!taskStatus) return null;

        const getStatusIcon = () => {
            switch (taskStatus.status) {
                case 'pending':
                    return <Clock className="w-4 h-4 text-yellow-500" />;
                case 'processing':
                    return <Loader2 className="w-4 h-4 animate-spin text-blue-500" />;
                case 'completed':
                    return <CheckCircle className="w-4 h-4 text-green-500" />;
                case 'failed':
                    return <XCircle className="w-4 h-4 text-red-500" />;
                default:
                    return null;
            }
        };

        return (
            <Card className="py-1">
                <CardContent className="pt-6">
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                {getStatusIcon()}
                                <span className="font-medium">
                                    {taskStatus.status === 'pending' && '等待处理'}
                                    {taskStatus.status === 'processing' && '正在处理'}
                                    {taskStatus.status === 'completed' && '处理完成'}
                                    {taskStatus.status === 'failed' && '处理失败'}
                                </span>
                            </div>
                            {isPolling && (
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={handleCancelTask}
                                >
                                    取消任务
                                </Button>
                            )}
                        </div>

                        {taskStatus.message && (
                            <p className="text-sm text-gray-600">{taskStatus.message}</p>
                        )}

                        {typeof taskStatus.progress === 'number' && (
                            <div className="space-y-2">
                                <Progress value={taskStatus.progress} className="w-full" />
                                <p className="text-xs text-gray-500 text-right">
                                    {taskStatus.progress}%
                                </p>
                            </div>
                        )}

                        {taskStatus.error && (
                            <Alert variant="destructive">
                                <AlertTriangle className="h-4 w-4" />
                                <AlertDescription>{taskStatus.error}</AlertDescription>
                            </Alert>
                        )}
                    </div>
                </CardContent>
            </Card >
        );
    };

    return (
        <div className="space-y-1">
            <Card className='gap-4 py-4'>
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
                            disabled={isLoading}
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
                            disabled={isLoading}
                        />
                        <p className="text-xs text-gray-500">
                            使用XPath选择器定位目标组件，如: /html/body/div/section, //div[@class='header']
                        </p>
                    </div>

                    {/* 组件类型选择 */}
                    <div className="space-y-2">
                        <Label className="flex items-center gap-2">
                            <Tag className="w-4 h-4" />
                            组件类型
                        </Label>
                        <div className="flex gap-2">
                            <Select
                                value={crawlConfig.componentType}
                                onValueChange={(value) => handleInputChange('componentType', value)}
                                disabled={isTypesLoading || isLoading}
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
                                        disabled={isLoading}
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
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Enter') {
                                                        handleAddCustomType();
                                                    }
                                                }}
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
                            disabled={isLoading}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="componentName" className="flex items-center gap-2">
                            <FileText className="w-4 h-4" />
                            组件图片地址
                        </Label>
                        <Input
                            id="componentName"
                            value={crawlConfig.screenshotUrl}
                            className="w-full"
                            disabled={isLoading}
                        />
                    </div>

                    {/* 组件描述 */}
                    {/* <div className="space-y-2">
                        <Label htmlFor="description">
                            组件描述 (可选)
                        </Label>
                        <Textarea
                            id="description"
                            placeholder="描述组件的功能和用途..."
                            value={crawlConfig.description}
                            onChange={(e) => handleInputChange('description', e.target.value)}
                            className="w-full min-h-[80px]"
                            disabled={isLoading}
                        />
                    </div> */}

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
                    {/* 任务状态显示 */}
                    {renderTaskStatus()}
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
                                    {taskStatus?.status === 'processing' ? '爬取中...' : '启动中...'}
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