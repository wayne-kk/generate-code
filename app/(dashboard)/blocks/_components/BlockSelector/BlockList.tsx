import { Select, SelectItem, SelectTrigger, SelectContent, SelectValue } from '@/_components/@ui/select';
import { Block } from '@/_types/block';
import { blocksManage } from '../../_store';
import { useEffect, useState } from 'react';

interface BlockListProps {
    selectedType: string
}

const BlockList = ({
    selectedType
}: BlockListProps) => {
    const [sortedBlocks, setSortedBlocks] = useState<Block[]>([]);
    const [selectedBlockId, setSelectedBlockId] = useState<string>(blocksManage.selectedBlockId || '');

    function getSortBlocks(blocks: Block[]) {
        const filteredBlocks = blocksManage.selectedType ? blocks.filter(block => block.type === blocksManage.selectedType) : [];
        const sortedBlocks = sortHierarchicalStrings(filteredBlocks);
        return sortedBlocks;
    }

    useEffect(() => {
        const blocks = blocksManage.blocks;
        const sortedBlocks = getSortBlocks(blocks);
        setSortedBlocks(sortedBlocks)
    }, [selectedType]);

    useEffect(() => {
        function handleChange() {
            const blocks = blocksManage.blocks;
            const sortedBlocks = getSortBlocks(blocks)
            setSortedBlocks(sortedBlocks)
            setSelectedBlockId(blocksManage.selectedBlockId || '')
        }
        blocksManage.on('blockSelected', handleChange)
        return () => {
            blocksManage.off('blockSelected', handleChange)
        }
    }, [])


    return (
        <div className="my-4 z-10">
            <label className="block text-sm font-medium mb-2">组件名称</label>
            <Select
                value={selectedBlockId}
                onValueChange={(val) => {
                    blocksManage.setSelectedBlockId(val);
                    setSelectedBlockId(val)
                }}
            >
                <SelectTrigger className="w-full py-3 px-4 border rounded-lg  shadow-sm focus:ring-2 focus:ring-blue-500 transition-all">
                    <SelectValue placeholder="选择组件">
                        {sortedBlocks.find(block => block.id === selectedBlockId)?.name}
                    </SelectValue>
                </SelectTrigger>
                <SelectContent className=" shadow-lg rounded-lg mt-1 max-h-[500px]">
                    {sortedBlocks.map((block: Block) => (
                        <SelectItem key={block.id} value={block.id} className="hover:bg-blue-50 text-sm py-2 px-4 transition-all">
                            {block.name || block.id}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
};



/**
 * 对层级命名的块进行排序，例如 header_1, header_2
 * @param array 要排序的块数组
 * @param delimiter 分隔符，默认为下划线
 * @returns 排序后的数组
 */
export function sortHierarchicalStrings(array: Block[], delimiter: string = '_'): Block[] {
    return [...array].sort((a: Block, b: Block) => {
        const splitA = a.name.split(delimiter).map((part: string, index: number) =>
            index === 0 ? part : Number(part)
        );

        const splitB = b.name.split(delimiter).map((part: string, index: number) =>
            index === 0 ? part : Number(part)
        );

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


export default BlockList;
