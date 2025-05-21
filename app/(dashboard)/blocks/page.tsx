'use client';
import { useEffect, useState } from 'react';
import { useBlocks } from './_hooks/useBlocks';
import { BlockTabs } from './_components/BlockTabs';
import BlockSelector from './_components/BlockSelector';
import BlockActions from './_components/BlockActions';
import BlockEditor from './_components/BlockEditor';
import { blocksManage } from './_store'

const BlocksPage = () => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [splitPosition, setSplitPosition] = useState(50);
    const {
        source,
        setSource,
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


    const sidebarPosition = isSidebarCollapsed ? 'left-0' : 'left-[250px]';
    const previewPosition = isSidebarCollapsed ? 'ml-0' : 'ml-[15%]';

    const className = `z-[100] fixed top-16 ${sidebarPosition} bg-gray-200 p-2 rounded-l-md`;
    const sidebarClass = isSidebarCollapsed ? 'w-0' : 'w-1/7  px-4';
    return (
        <div className="flex">
            <button
                onClick={handleToggleSidebar}
                className={className}
            >
                <span className="text-xl">{isSidebarCollapsed ? '▶' : '◀'}</span>
            </button>

            {<div
                className={`${sidebarClass} h-full overflow-hidden border-r border-gray-300 fixed left-0 top-16 bg-white z-10 transition-all`}
            >
                <h2 className="text-lg font-bold mb-4">选择组件</h2>

                <BlockTabs.SourceTabs
                    source={source}
                    setSource={setSource}
                />
                {(blocks && blocks.length > 0) &&
                    <>
                        <BlockSelector.TypeSelector />
                        <BlockTabs.DesignTabs
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                            isSidebarCollapsed={isSidebarCollapsed}
                        />
                    </>
                }

                <BlockActions
                    source={source}
                    selectedBlockId={selectedBlockId}
                />
            </div>}

            <div id="preview-viewport" className={`${previewPosition} w-full overflow-y-auto p-4 font-fa font-custom-body transition-all`}>
                {code ? (
                    <BlockEditor
                        activeTab={activeTab}
                        code={code}
                        splitPosition={splitPosition}
                        setSplitPosition={setSplitPosition}
                    />
                ) : (
                    <div className="text-gray-500">请选择一个组件进行预览</div>
                )}
            </div>
        </div>
    );
};

export default BlocksPage;