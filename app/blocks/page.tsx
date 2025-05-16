'use client';

import { useEffect, useState, useRef } from 'react';
import MonacoEditor from '@/components/@codeEditor/CodeEditor';
import CodeTsxLoader from '@/components/@codeLoader/CodeTsxLoader';
import { gsap } from 'gsap'
import { toast } from 'sonner'
import AnimateInView from '@/components/@base/AnimateInView';
import EditableButton from '@/components/@base/EditableButton';
import EditableIcon from '@/components/@base/EditableIcon';
import EditableImg from '@/components/@base/EditableImg';
import EditableText from '@/components/@base/EditableText';
import { AnimatePresence, motion } from 'framer-motion';
import { isObject, throttle } from 'lodash-es';
import { Carousel } from 'react-responsive-carousel';
import Marquee from '@/components/@base/Marquee';
import Overflow from '@/components/@base/Overflow';
import { nanoid } from 'nanoid';
import { Select, SelectItem, SelectTrigger, SelectContent, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    useFormField,
    Form,
    FormItem,
    FormLabel,
    FormControl,
    FormDescription,
    FormMessage,
    FormField
} from "@/components/ui/form"
import { Label } from '@/components/ui/label';

const BlocksPage = () => {
    const [source, setSource] = useState<'blocks' | 'aigcode-blocks' | 'backend-blocks'>('aigcode-blocks');
    const [blocks, setBlocks] = useState<any[]>([]);
    const [blocksMap, setBlocksMap] = useState<Record<string, any>>({});
    const [selectedType, setSelectedType] = useState<string | null>(null);
    const [selectedBlockId, setSelectedBlockId] = useState<string | null>(null);
    const [sourceId, setSourceId] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [code, setCode] = useState<string | null>(null);
    const [oldCode, setOldCode] = useState<string | null>(null);
    const [oldName, setOldName] = useState<string | null>(null);
    const [props, setProps] = useState<any>({});
    const [activeTab, setActiveTab] = useState<'new' | 'old'>('new');
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false); // 控制左侧栏显示/隐藏
    const [splitPosition, setSplitPosition] = useState(50); // 左右面板分割比例，初始为50%
    const splitPaneRef = useRef<HTMLDivElement>(null);
    const isDraggingRef = useRef(false);

    const updateBlockData = async (blockData: any) => {
        try {
            const res = await fetch(`/api/aigcode-blocks/update`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(blockData),
            });

            const result = await res.json();
            if (res.ok) {
                toast.success('组件更新成功');
                return { success: true, data: result.data, finalName: result.finalName };
            } else {
                toast.error(result.error || '组件更新失败');
                return { success: false, error: result.error };
            }
        } catch (err) {
            toast.error('请求失败');
            return { success: false, error: '请求失败' };
        }
    };

    const deleteBlockData = async (id: string) => {
        try {
            const res = await fetch(`/api/aigcode-blocks/delete`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id }),
            });

            const result = await res.json();
            if (res.ok) {
                toast.success('组件删除成功');
                const refreshed = await fetch(`/api/${source}`);
                const data = await refreshed.json();
                if (refreshed.ok) {
                    const map: Record<string, any> = {};
                    for (const block of data.data) {
                        const parsedProps = isObject(block.props) ? block.props : JSON.parse(block.props);
                        map[block.id] = { ...block, props: parsedProps };
                    }
                    setBlocks(data.data);
                    setBlocksMap(map);
                    setSelectedBlockId(null);
                    setCode(null);
                    setProps({});
                }
                return { success: true, data: result.data };
            } else {
                toast.error(result.error || '组件删除失败');
                return { success: false, error: result.error };
            }
        } catch (err) {
            toast.error('请求失败');
            return { success: false, error: '请求失败' };
        }
    };

    useEffect(() => {
        const fetchBlocks = async () => {
            try {
                const res = await fetch(`/api/${source}`);
                const data = await res.json();
                if (res.ok) {
                    const map: Record<string, any> = {};
                    for (const block of data.data) {
                        const parsedProps = isObject(block.props) ? block.props : JSON.parse(block.props);
                        map[block.id] = { ...block, props: parsedProps };
                    }
                    setBlocks(data.data);
                    setBlocksMap(map);
                } else {
                    setError(data.error || '无法获取组件列表');
                }
            } catch (err) {
                setError('请求失败');
            }
        };
        fetchBlocks();
    }, [source]);

    useEffect(() => {
        if (!sourceId) return;
        const fetchCompare = async () => {
            const res = await fetch(`/api/blocks?blockId=${sourceId}`);
            const json = await res.json();
            if (res.ok) {
                setOldCode(json.data.code);
                setOldName(json.data.name)
            }
        };
        fetchCompare();
    }, [sourceId]);

    // 处理拖动调整大小的逻辑
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isDraggingRef.current || !splitPaneRef.current) return;

            const containerRect = splitPaneRef.current.getBoundingClientRect();
            const containerWidth = containerRect.width;
            const mouseX = e.clientX - containerRect.left;

            // 计算鼠标位置相对于容器的百分比
            let newPosition = (mouseX / containerWidth) * 100;

            // 限制分割比例在10%到90%之间
            newPosition = Math.max(10, Math.min(90, newPosition));

            setSplitPosition(newPosition);
        };

        const handleMouseUp = () => {
            isDraggingRef.current = false;
            document.body.style.cursor = 'default';
            document.body.style.userSelect = 'auto';
        };

        // 始终添加事件监听器，并在回调中检查状态
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault(); // 防止文本选择
        isDraggingRef.current = true;
        document.body.style.cursor = 'col-resize';
        document.body.style.userSelect = 'none';
    };

    const uniqueTypes = [...new Set(blocks.map(block => block.type).filter(Boolean))];
    const filteredBlocks = selectedType ? blocks.filter(block => block.type === selectedType) : [];
    const sortedBlocks = sortHierarchicalStrings(filteredBlocks);
    function sortHierarchicalStrings(array: any, delimiter: '_' = '_') {
        return array.sort((a: any, b: any) => {
            const splitA = a.name.split(delimiter).map((part, index) => index === 0 ? part : Number(part));
            const splitB = b.name.split(delimiter).map((part, index) => index === 0 ? part : Number(part));

            for (let i = 1; i < Math.max(splitA.length, splitB.length); i++) {
                if (splitA[i] === undefined) return -1; // a has fewer levels
                if (splitB[i] === undefined) return 1;  // b has fewer levels

                if (splitA[i] !== splitB[i]) {
                    return Number(splitA[i]) - Number(splitB[i]); // Compare the numerical values
                }
            }
            return 0; // They are equal
        });
    }

    const handleToggleSidebar = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed);
    };

    return (
        <div className="flex">
            <button onClick={handleToggleSidebar} className={`z-[100] fixed top-16 left-${isSidebarCollapsed ? '0' : '[250px]'} bg-gray-200 p-2 rounded-l-md`}>
                <span className="text-xl">{isSidebarCollapsed ? '▶' : '◀'}</span>
            </button>
            {<div
                className={`${isSidebarCollapsed ? 'w-0' : 'w-1/10 p-4'} h-full overflow-hidden border-r border-gray-300 fixed left-0 top-16 bg-white z-10 transition-all`}
            >
                <h2 className="text-lg font-bold mb-4">选择组件</h2>

                {error && <div className="text-red-500 mb-2">{error}</div>}

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">组件库</label>
                    <Tabs defaultValue={source} className="w-full" onValueChange={(val) => setSource(val as 'blocks' | 'aigcode-blocks')}>
                        <TabsList className="grid w-full h-full grid-cols-2 rounded-lg border bg-gray-100 shadow-sm">
                            {/* <TabsTrigger
                                value="blocks"
                                className={`w-full text-center py-2 rounded-lg transition-all ${source === 'blocks'
                                    ? 'bg-blue-600 text-white border-b-4 border-blue-700'
                                    : 'bg-transparent text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                                    }`}
                            >
                                blocks
                            </TabsTrigger> */}
                            <TabsTrigger
                                value="aigcode-blocks"
                                className={`w-full text-center py-2 rounded-lg transition-all ${source === 'aigcode-blocks'
                                    ? 'bg-blue-600 text-white border-b-4 border-blue-700'
                                    : 'bg-transparent text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                                    }`}
                            >
                                aigcode-blocks
                            </TabsTrigger>
                            <TabsTrigger
                                value="backend-blocks"
                                className={`w-full text-center py-2 rounded-lg transition-all ${source === 'backend-blocks'
                                    ? 'bg-blue-600 text-white border-b-4 border-blue-700'
                                    : 'bg-transparent text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                                    }`}
                            >
                                backend-blocks
                            </TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">组件类型 </label>
                    <Select value={selectedType || ''} onValueChange={(val) => setSelectedType(val)}>
                        <SelectTrigger className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <SelectValue placeholder="选择组件类型" className="text-gray-600" />
                        </SelectTrigger>
                        <SelectContent className="bg-white shadow-lg rounded-lg mt-1 max-h-[500px]">
                            {uniqueTypes.map((type) => (
                                <SelectItem key={type} value={type} className="text-gray-800 hover:bg-blue-50 hover:text-blue-600 px-4 py-2 rounded-md">
                                    {type}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                {selectedType && (
                    <div className="mb-4 z-10">
                        <label className="block text-sm font-medium mb-2">组件名称 {oldName}</label>
                        <Select
                            value={selectedBlockId || ''}
                            onValueChange={(val) => {
                                setSelectedBlockId(val);
                                setSourceId(blocksMap[val]?.source_id ?? null);
                                setProps(blocksMap[val]?.props ?? {});
                                setCode(blocksMap[val]?.code ?? null);
                                setOldCode(blocksMap[val]?.code ?? null);
                            }}
                        >
                            <SelectTrigger className="w-full py-3 px-4 border rounded-lg bg-white text-gray-800 shadow-sm focus:ring-2 focus:ring-blue-500 transition-all">
                                <SelectValue placeholder="选择组件" />
                            </SelectTrigger>
                            <SelectContent className="bg-white shadow-lg rounded-lg mt-1 max-h-[500px]">
                                {sortedBlocks.map((block, index) => (
                                    <SelectItem key={block.id} value={block.id} className="hover:bg-blue-50 text-sm py-2 px-4 transition-all">
                                        {block.name || block.id}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                )}

                <div className={`${isSidebarCollapsed ? 'fixed top-4 z-10' : ''} mb-4 transition-all`}>
                    <Tabs defaultValue={activeTab} className="w-full" onValueChange={(val) => setActiveTab(val as 'new' | 'old')}>
                        <TabsList className="grid w-full h-full grid-cols-2 rounded-lg border bg-gray-100 shadow-sm">
                            <TabsTrigger
                                value="new"
                                className={`w-full text-center py-1 rounded-lg transition-all ${activeTab === 'new'
                                    ? 'bg-blue-600 text-white border-b-4 border-blue-700'
                                    : 'bg-transparent text-gray-600 hover:bg-blue-50 hover:text-blue-600'}`}
                            >
                                新设计
                            </TabsTrigger>
                            <TabsTrigger
                                value="old"
                                className={`w-full text-center py-1 rounded-lg transition-all ${activeTab === 'old'
                                    ? 'bg-blue-600 text-white border-b-4 border-blue-700'
                                    : 'bg-transparent text-gray-600 hover:bg-blue-50 hover:text-blue-600'}`}
                            >
                                经典设计
                            </TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>

                {(source === 'blocks' && selectedBlockId) && <Button className="w-full mb-2 bg-blue-600 hover:bg-sky-500 text-white" onClick={() => {
                    updateBlockData({
                        ...blocksMap[selectedBlockId!],
                        id: nanoid(),
                        code,
                        source_id: selectedBlockId,
                    });
                }}>
                    创建为AIGCODE组件
                </Button>}

                {(source === 'aigcode-blocks' && selectedBlockId) && (
                    <>
                        <Button variant="default" className="w-full mb-2 bg-sky-600 hover:bg-sky-500 text-white px-0" onClick={async () => {
                            const id = nanoid();
                            const { finalName } = await updateBlockData({
                                ...blocksMap[selectedBlockId!],
                                id: id,
                                code,
                            });
                            blocksMap[id!] = {
                                ...blocksMap[selectedBlockId!],
                                id: id,
                                name: finalName,
                                code,
                            }
                            blocks.push({
                                ...blocksMap[selectedBlockId!],
                                id: id,
                                name: finalName,
                                code,
                            })
                            setCode(code);
                            setSelectedBlockId(id);
                            setSourceId(blocksMap[id]?.source_id ?? null);
                        }}>
                            复制为一个新组件
                        </Button>
                        <Button variant="default" className="w-full mb-2 bg-sky-600 hover:bg-sky-500 text-white px-0" onClick={() => {
                            updateBlockData({
                                ...blocksMap[selectedBlockId!],
                                code,
                            });
                            blocksMap[selectedBlockId!].code = code;
                        }}>
                            更新组件
                        </Button>
                        <Button variant="default" className="w-full mb-2 bg-red-600 hover:bg-red-500 text-white px-0" onClick={() => deleteBlockData(selectedBlockId)}>
                            删除组件
                        </Button>
                    </>
                )}
            </div>}

            <div id="preview-viewport" className={`ml-${isSidebarCollapsed ? '0' : '[15%]'} w-full overflow-y-auto p-4 font-fa font-custom-body transition-all`}>
                {code && oldCode ? (
                    <div className='flex-1 flex gap-0 relative' ref={splitPaneRef}>
                        <div className='overflow-auto' style={{ width: `${splitPosition}%`, minWidth: '10%' }}>
                            <CodeTsxLoader
                                code={activeTab === 'new' ? code : oldCode}
                                customComponents={{
                                    AnimateInView,
                                    EditableText,
                                    EditableButton,
                                    Overflow,
                                    EditableIcon,
                                    Carousel,
                                    EditableImg,
                                    Marquee,
                                    motion,
                                    throttle,
                                    AnimatePresence,
                                    Button,
                                    Card,
                                    CardContent,
                                    Input,
                                    Textarea,
                                    useFormField,
                                    Form,
                                    FormItem,
                                    FormLabel,
                                    FormControl,
                                    FormDescription,
                                    FormMessage,
                                    FormField,
                                    Label,
                                    toast,
                                    gsap
                                }}
                                props={{}}
                            />
                        </div>

                        {/* 拖动调整栏 */}
                        <div
                            className="flex-none w-2 bg-gray-300 hover:bg-blue-500 cursor-col-resize relative group z-10"
                            onMouseDown={handleMouseDown}
                            style={{ touchAction: 'none' }}
                        >
                            <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-4 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <div className="h-8 w-[3px] bg-blue-600 rounded"></div>
                            </div>
                        </div>

                        <div className="overflow-auto" style={{ width: `${100 - splitPosition}%`, minWidth: '10%' }}>
                            <div className="h-full">
                                <MonacoEditor
                                    key={selectedBlockId}
                                    value={code}
                                    onChange={(value) => setCode(value!)}
                                />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="text-gray-500">请选择一个组件进行预览</div>
                )}
            </div>
        </div>
    );
};

export default BlocksPage;