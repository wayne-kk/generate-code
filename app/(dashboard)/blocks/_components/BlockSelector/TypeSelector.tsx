import { Select, SelectItem, SelectTrigger, SelectContent, SelectValue } from '@/_components/@ui/select';
import { blocksManage } from '../../_store';
import { useEffect, useState } from 'react';
import BlockSelector from '.';
import { set } from 'lodash-es';

interface TypeSelectorProps {
}

const TypeSelector = ({ }: TypeSelectorProps) => {
    const blocks = blocksManage.blocks;
    const uniqueTypes = [...new Set(blocks.map(block => block.type).filter(Boolean))];
    const [selectedType, setSelectedType] = useState<string | null>(blocksManage.selectedType);

    useEffect(() => {
        const handleChange = () => {
            setSelectedType(blocksManage.selectedType)
        }
        blocksManage.on('blockTypeChange', handleChange)
        return () => {
            blocksManage.off('blockTypeChange', handleChange)
        }
    }, [])

    return (
        <div className="mb-4">
            <label className="block text-sm font-medium mb-1">组件类型</label>
            <Select value={selectedType || ''} onValueChange={(val) => {
                blocksManage.selectedType = val
            }}>
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
            {selectedType && <BlockSelector.BlockList
                selectedType={selectedType || ''} // 传递选中的类型
            />}
        </div>
    );
};

export default TypeSelector;
