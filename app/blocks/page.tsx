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
import { isObject, throttle } from 'lodash-es';
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
    const [error, setError] = useState<string | null>(null);
    const [code, setCode] = useState<string | null>(null);
    const [props, setProps] = useState<any>({});

    const updateBlockData = async (blockData: any) => {
        console.log('更新组件数据', blockData);
        try {
            const res = await fetch(`/api/aigcode-blocks/update`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(blockData)
            });

            const result = await res.json();
            if (res.ok) {
                toast.success('组件更新成功');
                console.log('更新成功', result);
                return { success: true, data: result.data };
            } else {
                toast.error(result.error || '组件更新失败');
                console.error('更新失败', result.error);
                return { success: false, error: result.error };
            }
        } catch (err) {
            toast.error('请求失败');
            console.error('请求失败', err);
            return { success: false, error: '请求失败' };
        }
    };

    const deleteBlockData = async (id: string) => {
        console.log('删除组件 ID:', id);
        try {
            const res = await fetch(`/api/aigcode-blocks/delete`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id }),
            });

            const result = await res.json();
            if (res.ok) {
                toast.success('组件删除成功');
                console.log('删除成功', result);

                // 🔁 重新获取组件列表
                const refreshed = await fetch(`/api/${source}`);
                const data = await refreshed.json();
                if (refreshed.ok) {
                    const map: Record<string, any> = {};
                    for (const block of data.data) {
                        if (isObject(block.props)) {
                            map[block.id] = { ...block, props: block.props };
                        } else {
                            const parsedProps = JSON.parse(block.props);
                            map[block.id] = { ...block, props: parsedProps };
                        }
                    }
                    setBlocks(data.data);
                    setBlocksMap(map);

                    // 🧼 清空选中的 block
                    setSelectedBlockId(null);
                    setCode(null);
                    setProps({});
                }

                return { success: true, data: result.data };
            } else {
                toast.error(result.error || '组件删除失败');
                console.error('删除失败', result.error);
                return { success: false, error: result.error };
            }
        } catch (err) {
            toast.error('请求失败');
            console.error('请求失败', err);
            return { success: false, error: '请求失败' };
        }
    };



    // 获取所有 blocks 数据
    useEffect(() => {
        const fetchBlocks = async () => {
            try {
                const res = await fetch(`/api/${source}`);
                const data = await res.json();

                if (res.ok) {
                    const map: Record<string, any> = {};
                    for (const block of data.data) {
                        if (isObject(block.props)) {
                            map[block.id] = { ...block, props: block.props };
                        } else {
                            const parsedProps = JSON.parse(block.props);
                            map[block.id] = { ...block, props: parsedProps };
                        }
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

    // 所有独特的类型
    const uniqueTypes = [...new Set(blocks.map(block => block.type).filter(Boolean))];

    // 当前选中类型下的 blocks
    const filteredBlocks = selectedType
        ? blocks.filter(block => block.type === selectedType)
        : [];

    return (
        <div className="flex h-screen">
            {/* 左侧选择栏 */}
            <div className="w-1/5 p-4 border-r border-gray-300">
                <h2 className="text-lg font-bold mb-4">选择组件</h2>

                {error && <div className="text-red-500 mb-2">{error}</div>}

                {/* 组件库选择 */}
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

                {/* 类型选择 */}
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

                {/* 组件选择 */}
                {selectedType && (
                    <div>
                        <label className="block text-sm font-medium mb-1">组件名称</label>
                        <select
                            className="w-full p-2 border rounded"
                            value={selectedBlockId || ''}
                            onChange={(e) => {
                                setSelectedBlockId(e.target.value);
                                setProps(blocksMap[e.target.value]?.props ?? null);
                                setCode(blocksMap[e.target.value]?.code ?? null);
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

                {/* 更新按钮 */}
                {source === 'blocks' &&
                    <div className="mt-[500px] flex justify-end">
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400 transition"
                            onClick={() => {
                                console.log('selectedBlockId', selectedBlockId)
                                if (selectedBlockId) {
                                    updateBlockData({ ...blocksMap[selectedBlockId], id: nanoid(), code, props });
                                }
                            }}
                        >
                            更新组件
                        </button>
                    </div>
                }

                {/* 删除按钮 */}
                {source === 'aigcode-blocks' &&
                    <div className="mt-[500px] flex justify-end">
                        <button
                            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-blue-400 transition"
                            onClick={() => {
                                console.log('selectedBlockId', selectedBlockId)
                                if (selectedBlockId) {
                                    deleteBlockData(selectedBlockId);
                                }
                            }}
                        >
                            删除组件
                        </button>
                    </div>
                }

            </div>

            {/* 右侧展示区域 */}
            <div id="preview-viewport" className="w-4/5 p-4 font-fa font-custom-body">
                {code ? (
                    <>
                        <CodeLoader
                            code={code}
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
                        <div className="flex gap-4">
                            <div className="flex-1 min-w-0">
                                <MonacoEditor
                                    key={selectedBlockId}
                                    value={code}
                                    onChange={(value) => setCode(value!)}
                                />
                            </div>
                            {/* 可启用编辑 props 面板 */}
                            {/* <div className="flex-1 min-w-0">
                                <MonacoEditor
                                    key={JSON.stringify(props, null, 2)}
                                    value={JSON.stringify(props, null, 2)}
                                    language="json"
                                    onChange={(value) => {
                                        setProps(JSON.parse(value ?? '{}'));
                                    }}
                                />
                            </div> */}
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
