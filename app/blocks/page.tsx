'use client';

import { useEffect, useState } from 'react';
import MonacoEditor from '@/component/@codeEditor/CodeEditor';
import CodeLoader from '@/component/@codeLoader/CodeLoader';
import AnimateInView from '@/component/@base/AnimateInView';
import EditableButton from '@/component/@base/EditableButton';
import EditableIcon from '@/component/@base/EditableIcon';
import EditableImg from '@/component/@base/EditableImg';
import EditableText from '@/component/@base/EditableText';
import { AnimatePresence, motion } from 'framer-motion';
import { isObject, set, throttle } from 'lodash-es';
import { Carousel } from 'react-responsive-carousel';
import Marquee from '@/component/@base/Marquee';
import Overflow from '@/component/@base/Overflow';
import { nanoid } from 'nanoid';
import toast from 'react-hot-toast';

const BlocksPage = () => {
    const [source, setSource] = useState<'blocks' | 'aigcode-blocks'>('blocks');
    const [blocks, setBlocks] = useState<any[]>([]);
    const [blocksMap, setBlocksMap] = useState<Record<string, any>>({});
    const [selectedType, setSelectedType] = useState<string | null>(null);
    const [selectedBlockId, setSelectedBlockId] = useState<string | null>(null);
    const [sourceId, setSourceId] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [code, setCode] = useState<string | null>(null);
    const [oldCode, setOldCode] = useState<string | null>(null);
    const [props, setProps] = useState<any>({});
    const [activeTab, setActiveTab] = useState<'new' | 'old'>('new');
    const [compareCode, setCompareCode] = useState<string | null>(null);

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
                return { success: true, data: result.data };
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
                setCompareCode(json.data.code);
            }
        };
        fetchCompare();
    }, [sourceId]);

    const uniqueTypes = [...new Set(blocks.map(block => block.type).filter(Boolean))];
    const filteredBlocks = selectedType ? blocks.filter(block => block.type === selectedType) : [];

    return (
        <div className="flex h-screen overflow-hidden">
            {/* 左侧固定侧边栏 */}
            <div className="w-1/5 h-full overflow-y-auto p-4 border-r border-gray-300 fixed left-0 top-16 bg-white z-10">
                <h2 className="text-lg font-bold mb-4">选择组件</h2>

                {error && <div className="text-red-500 mb-2">{error}</div>}

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">组件库</label>
                    <select
                        className="w-full p-2 border rounded"
                        value={source}
                        onChange={(e) => {
                            const selectedSource = e.target.value as 'blocks' | 'aigcode-blocks';
                            setSource(selectedSource);
                            setSelectedType(null);
                            setSelectedBlockId(null);
                            setBlocks([]);
                            setBlocksMap({});
                        }}
                    >
                        <option value="blocks">blocks</option>
                        <option value="aigcode-blocks">aigcode-blocks</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">组件类型</label>
                    <select
                        className="w-full p-2 border rounded"
                        value={selectedType || ''}
                        onChange={(e) => {
                            setSelectedType(e.target.value);
                            setSelectedBlockId(null);
                        }}
                    >
                        <option value="">请选择组件类型</option>
                        {uniqueTypes.map(type => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </select>
                </div>

                {selectedType && (
                    <div>
                        <label className="block text-sm font-medium mb-1">组件名称</label>
                        <select
                            className="w-full p-2 border rounded"
                            value={selectedBlockId || ''}
                            onChange={(e) => {
                                const id = e.target.value;
                                setSelectedBlockId(id);
                                setSourceId(blocksMap[id]?.source_id ?? null);
                                setProps(blocksMap[id]?.props ?? {});
                                setCode(blocksMap[id]?.code ?? null);
                                setOldCode(blocksMap[id]?.code ?? null);
                            }}
                        >
                            <option value="">请选择组件</option>
                            {filteredBlocks.map((block) => (
                                <option key={block.id} value={block.id}>
                                    {block.name || block.id}
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                {source === 'blocks' && selectedBlockId && (
                    <div className="mt-8 mb-4">
                        <button
                            className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400 transition"
                            onClick={() => {
                                updateBlockData({
                                    ...blocksMap[selectedBlockId],
                                    id: nanoid(),
                                    code,
                                    props,
                                    source_id: selectedBlockId,
                                });
                            }}
                        >
                            更新组件
                        </button>
                        <div className="flex gap-2 mt-4">
                            <button
                                onClick={() => setActiveTab('new')}
                                className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium border transition-colors duration-200
                                    ${activeTab === 'new'
                                        ? 'bg-blue-500 text-white border-blue-500'
                                        : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-100 hover:border-blue-300'}
                                            `}>
                                新设计
                            </button>
                            <button
                                onClick={() => setActiveTab('old')}
                                className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium border transition-colors duration-200
                                        ${activeTab === 'old'
                                        ? 'bg-blue-500 text-white border-blue-500'
                                        : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-100 hover:border-blue-300'}
                                        `}>
                                经典设计
                            </button>
                        </div>
                    </div>
                )}

                {source === 'aigcode-blocks' && selectedBlockId && (
                    <div className="mt-8">
                        <button
                            className="w-full bg-[#ef4444] text-white px-4 py-2 rounded hover:bg-[#fca5a5] transition"
                            onClick={() => {
                                deleteBlockData(selectedBlockId);
                            }}
                        >
                            删除组件
                        </button>
                    </div>
                )}
            </div>

            {/* 右侧滚动主内容区域 */}
            <div id="preview-viewport" className="ml-[20%] w-[80%] h-full overflow-y-auto p-4 font-fa font-custom-body">
                {(code && oldCode) ? (
                    <>
                        <CodeLoader
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
                            }}
                            props={{}}
                        />
                        {(compareCode && source === 'aigcode-blocks') && (
                            <CodeLoader
                                code={compareCode}
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
                                }}
                                props={{}}
                            />
                        )}
                        <div className="flex gap-4">
                            <div className="flex-1 min-w-0">
                                <MonacoEditor
                                    key={selectedBlockId}
                                    value={code}
                                    onChange={(value) => setCode(value!)}
                                />
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="text-gray-500">请选择一个组件进行预览</div>
                )}
            </div>
        </div>
    );
};

export default BlocksPage;
