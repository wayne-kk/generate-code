'use client';
import { useEffect, useState } from 'react';
import { useBlocks } from './_hooks/useBlocks';
import { BlockTabs } from './_components/BlockTabs';
import BlockSelector from './_components/BlockSelector';
import BlockActions from './_components/BlockActions';
import BlockEditor from './_components/BlockEditor';
import BlockCrawler from './_components/BlockCrawler';
import { blocksManage } from './_store'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/_components/@ui/tabs';
import { Badge } from '@/_components/@ui/badge';

const BlocksPage = () => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [splitPosition, setSplitPosition] = useState(50);
    const [activeMainTab, setActiveMainTab] = useState('选择组件');
    const {
        source,
        blocks,
        selectedBlockId,
        setSelectedBlockId,
        code,
        setCode,
        activeTab,
        setActiveTab,
    } = useBlocks();

    const handleToggleSidebar = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed);
    };

    useEffect(() => {
        const handleBlockSelected = () => {
            setSplitPosition(50);
            setCode(blocksManage.code);
            setSelectedBlockId(blocksManage.selectedBlockId);
        };
        blocksManage.on('blockSelected', handleBlockSelected);
        return () => {
            blocksManage.off('blockSelected', handleBlockSelected);
        };
    }, []);

    useEffect(() => {
        const handleBlocksChange = () => {
            setSplitPosition(50);
            setCode(blocksManage.code);
            setSelectedBlockId(blocksManage.selectedBlockId);
        };
        blocksManage.on('blocksChange', handleBlocksChange);
        return () => {
            blocksManage.off('blocksChange', handleBlocksChange);
        };
    }, []);

    const sidebarPosition = isSidebarCollapsed ? 'left-0' : 'left-[320px]';
    const previewPosition = isSidebarCollapsed ? 'ml-0' : 'ml-[350px]';

    const className = `z-[100] fixed top-16 ${sidebarPosition}`;
    const sidebarClass = isSidebarCollapsed ? 'w-0' : 'w-[350px] px-2';
    console.log('blocks', blocks);
    return (
        <div
            className="fixed inset-0 top-16 overflow-hidden">
            <Badge
                className={className}
                onClick={handleToggleSidebar}
            >
                <span className="text-xl">{isSidebarCollapsed ? '▶' : '◀'}</span>
            </Badge>

            <div
                id="sidebar"
                className={`${sidebarClass} h-full fixed left-0 top-16 z-10 transition-all overflow-hidden border-r border-gray-500`}
            >
                <div className="h-full flex flex-col">
                    <Tabs
                        className="flex-1 flex flex-col my-4"
                        value={activeMainTab}
                        onValueChange={setActiveMainTab}
                    >
                        <TabsList className="grid w-full grid-cols-2 flex-shrink-0">
                            <TabsTrigger value="选择组件">
                                选择组件
                            </TabsTrigger>
                            <TabsTrigger value="爬取指定组件">
                                爬取组件
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="选择组件" className="flex-1 mt-4 overflow-y-auto">
                            {/* <BlockTabs.SourceTabs
                                source={source}
                                setSource={setSource}
                            /> */}
                            {(blocks && blocks.length > 0) && (
                                <>
                                    <BlockSelector.TypeSelector />
                                    <BlockTabs.DesignTabs
                                        activeTab={activeTab}
                                        setActiveTab={setActiveTab}
                                        isSidebarCollapsed={isSidebarCollapsed}
                                    />
                                </>
                            )}
                            <BlockActions
                                source={source}
                                selectedBlockId={selectedBlockId}
                            />
                        </TabsContent>

                        <TabsContent value="爬取指定组件" className="flex-1 mt-4 overflow-y-auto">
                            <BlockCrawler />
                        </TabsContent>
                    </Tabs>
                </div>
            </div>

                <div
                    id="preview-viewport"
                    className={`${previewPosition} h-full overflow-hidden p-4 font-fa font-custom-body transition-all`}
                >
                {code ? (
                        <BlockEditor
                        code={code}
                        splitPosition={splitPosition}
                        setSplitPosition={setSplitPosition}
                    />
                ) : (
                        <div className="text-gray-500">
                            {activeMainTab === '选择组件' ? '请选择一个组件进行预览' : '请配置爬取参数并开始爬取'}
                        </div>
                )}
            </div>
        </div>
    );
};

export default BlocksPage;