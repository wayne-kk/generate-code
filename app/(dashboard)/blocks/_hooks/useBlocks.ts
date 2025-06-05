import { useState, useEffect } from 'react';
import { Block } from '@/_types/block';
import { blocksManage } from '../_store';
import { Source } from '../_components/BlockTabs/SourceTabs';

export function useBlocks() {
    const [source, setSource] = useState<Source>('aigcode_blocks');
    const [blocks, setBlocks] = useState<Block[]>([]);
    const [selectedType, setSelectedType] = useState<string | null>(null);
    const [selectedBlockId, setSelectedBlockId] = useState<string | null>(null);
    const [sourceId, setSourceId] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [code, setCode] = useState<string | null>(null);
    const [oldCode, setOldCode] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<'new' | 'old'>('new');

    useEffect(() => {
        const fetchBlocks = async () => {
            try {
                const res = await fetch(`/api/${source}`);
                const data = await res.json();
                if (res.ok) {
                    blocksManage.init(data.data);
                    setBlocks(data.data);
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
            }
        };
        fetchCompare();
    }, [sourceId]);

    return {
        source,
        setSource,
        blocks,
        setBlocks,
        selectedType,
        setSelectedType,
        selectedBlockId,
        setSelectedBlockId,
        sourceId,
        error,
        setError,
        code,
        setCode,
        oldCode,
        setOldCode,
        activeTab,
        setActiveTab,
    };
}
