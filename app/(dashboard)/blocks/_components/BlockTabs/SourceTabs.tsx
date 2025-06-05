import { Tabs, TabsList, TabsTrigger } from '@/_components/@ui/tabs';

export type Source = 'aigcode_blocks' | 'backend_blocks' | 'spare_blocks'
interface SourceTabsProps {
    source: Source;
    setSource: (source: Source) => void;
}

const SourceTabs = ({ source, setSource }: SourceTabsProps) => {
    return (
        <div className="mb-4">
            <label className="block text-sm font-medium mb-2">组件库</label>
            <Tabs defaultValue={source} className="w-full" onValueChange={(val) => setSource(val as Source)}>
                <TabsList className=" w-full h-ful">
                    <TabsTrigger
                        value="aigcode_blocks"
                        className={`w-full text-center py-2 rounded-lg transition-all}`}
                    >
                        blocks
                    </TabsTrigger>
                    <TabsTrigger
                        value="spare_blocks"
                        className={`w-full text-center py-2 rounded-lg transition-all}`}
                    >
                        spareBlocks
                    </TabsTrigger>
                    <TabsTrigger
                        value="backend_blocks"
                        className={`w-full text-center py-2 rounded-lg transition-all}`}
                    >
                        backendBlocks
                    </TabsTrigger>
                </TabsList>
            </Tabs>
        </div>
    );
};

export default SourceTabs;
