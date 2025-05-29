'use client';

import { useEffect, useState } from 'react';
import MonacoEditor from '@/_components/@codeEditor/CodeEditor';
import CodePreview from './CodePreview';
import { blocksManage } from '../../_store';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/_components/@ui/resizable';

interface BlockEditorProps {
    code: string | null;
    splitPosition: number;
    setSplitPosition: (position: number) => void;
}

const BlockEditor = ({
    code,
    splitPosition,
    setSplitPosition,
}: BlockEditorProps) => {
    const [renderCode, setCode] = useState<string | null>(code);

    useEffect(() => {
        setCode(code);
    }, [code]);

    const leftPanelPercentage = splitPosition;
    const rightPanelPercentage = 100 - splitPosition;

    const handleResizeEnd = (sizes: number[]) => {
        if (sizes[0]) {
            setSplitPosition(sizes[0]);
        }
    };

    return (
        <div className="w-full h-full overflow-hidden flex flex-col">
            <ResizablePanelGroup
                direction="horizontal"
                onLayout={handleResizeEnd}
                className="flex-1 w-full rounded-md border bg-background"
            >
                <ResizablePanel
                    defaultSize={leftPanelPercentage}
                    minSize={10}
                    className="flex flex-col"
                >
                    {/* CodePreview 容器 - 只有这里可以滚动 */}
                    <div className="flex-1 overflow-hidden">
                        <div className="h-full overflow-y-auto overflow-x-hidden scrollbar-hide">
                            <CodePreview code={renderCode} />
                        </div>
                    </div>
                </ResizablePanel>

                <ResizableHandle
                    withHandle
                    className="transition-colors bg-border hover:bg-primary"
                />

                <ResizablePanel
                    defaultSize={rightPanelPercentage}
                    minSize={10}
                    className="flex flex-col"
                >
                    {/* MonacoEditor 容器 - 不滚动 */}
                    <div className="flex-1 h-full overflow-hidden">
                        <MonacoEditor
                            value={renderCode}
                            onChange={(value) => {
                                blocksManage.code = value!;
                                setCode(value!);
                            }}
                        />
                    </div>
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    );
};

export default BlockEditor;