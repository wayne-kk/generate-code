import { Tabs, TabsList, TabsTrigger } from '@/_components/@ui/tabs';
import { blocksManage } from "../../_store";
interface DesignTabsProps {
    activeTab: 'new' | 'old';
    setActiveTab: (tab: 'new' | 'old') => void;
    isSidebarCollapsed: boolean;
}

const DesignTabs = ({ activeTab, setActiveTab, isSidebarCollapsed }: DesignTabsProps) => {
    blocksManage
    return (
        <div className={`${isSidebarCollapsed ? 'fixed top-4 z-10' : ''} mb-4 transition-all`}>
            <Tabs defaultValue={activeTab} className="w-full" onValueChange={(val) => setActiveTab(val as 'new' | 'old')}>
                <TabsList className="w-full h-full ">
                    <TabsTrigger
                        value="new"
                        className={`w-full text-center py-1 rounded-lg transition-all `}
                    >
                        新设计
                    </TabsTrigger>
                    <TabsTrigger
                        value="old"
                        className={`w-full text-center py-1 rounded-lg transition-all`}
                    >
                        经典设计
                    </TabsTrigger>
                </TabsList>
            </Tabs>
        </div>
    );
};

export default DesignTabs;
