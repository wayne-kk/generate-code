import { Tabs, TabsList, TabsTrigger } from '@/_components/@ui/tabs';

interface SourceTabsProps {
    source: 'blocks' | 'aigcode-blocks' | 'backend-blocks';
    setSource: (source: 'blocks' | 'aigcode-blocks' | 'backend-blocks') => void;
}

const SourceTabs = ({ source, setSource }: SourceTabsProps) => {
    return (
        <div className="mb-4">
            <label className="block text-sm font-medium mb-2">组件库</label>
            <Tabs defaultValue={source} className="w-full" onValueChange={(val) => setSource(val as 'blocks' | 'aigcode-blocks' | 'backend-blocks')}>
                <TabsList className=" w-full h-ful">
                    <TabsTrigger
                        value="aigcode-blocks"
                        className={`w-full text-center py-2 rounded-lg transition-all
                            }`}
                    >
                        aigcode-blocks
                    </TabsTrigger>
                    <TabsTrigger
                        value="backend-blocks"
                        className={`w-full text-center py-2 rounded-lg transition-all 
                            }`}
                    >
                        backend-blocks
                    </TabsTrigger>
                </TabsList>
            </Tabs>
        </div>
    );
};

export default SourceTabs;
