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
                <TabsList className="grid w-full h-full grid-cols-2 rounded-lg border bg-gray-100 shadow-sm">
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
    );
};

export default SourceTabs;
