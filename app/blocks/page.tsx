'use client';

import { useEffect, useState } from 'react';
import CombinationApp from '@/component/CombinationApp';

const BlocksPage = () => {
    const [blocks, setBlocks] = useState<any[]>([]);
    const [blocksMap, setBlocksMap] = useState<Record<string, any>>({});
    const [selectedType, setSelectedType] = useState<string | null>(null);
    const [selectedBlockId, setSelectedBlockId] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    // 获取所有 blocks 数据
    useEffect(() => {
        const fetchBlocks = async () => {
            try {
                const res = await fetch('/api/blocks');
                const data = await res.json();

                if (res.ok) {
                    const map: Record<string, any> = {};
                    for (const block of data.data) {
                        const parsedProps = JSON.parse(block.props);
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
    }, []);

    // 所有独特的类型
    const uniqueTypes = [...new Set(blocks.map(block => block.type).filter(Boolean))];

    // 当前选中类型下的 blocks
    const filteredBlocks = selectedType
        ? blocks.filter(block => block.type === selectedType)
        : [];

    // 当前选中的 block
    const selectedBlock = selectedBlockId ? { [selectedBlockId]: blocksMap[selectedBlockId] } : null;

    return (
        <div className="flex h-screen">
            {/* 左侧选择栏 */}
            <div className="w-1/5 p-4 border-r border-gray-300">
                <h2 className="text-lg font-bold mb-4">选择组件</h2>

                {error && <div className="text-red-500 mb-2">{error}</div>}

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">组件类型</label>
                    <select
                        className="w-full p-2 border rounded"
                        value={selectedType || ''}
                        onChange={(e) => {
                            setSelectedType(e.target.value);
                            setSelectedBlockId(null); // 清空已选组件
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
                            onChange={(e) => setSelectedBlockId(e.target.value)}
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
            </div>

            {/* 右侧展示区域 */}
            <div id="preview-viewport" className="w-4/5 p-4 font-fa font-custom-body">
                {selectedBlock ? (
                    <CombinationApp
                        children={[selectedBlockId!]}
                        blocksMap={selectedBlock}
                    />
                ) : (
                    <div className="text-gray-500">请选择一个组件进行预览</div>
                )}
            </div>
        </div>
    );
};

export default BlocksPage;
