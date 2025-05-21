import { useResizablePanel } from '../../_hooks/useResizablePanel';
import MonacoEditor from '@/_components/@codeEditor/CodeEditor';
import CodePreview from './CodePreview';
import { blocksManage } from '../../_store';
import { useEffect, useState } from 'react';

interface BlockEditorProps {
    code: string | null;
    splitPosition: number;
    activeTab: 'new' | 'old';
    setSplitPosition: (position: number) => void;
}

const BlockEditor = ({
    code,
    splitPosition,
    setSplitPosition,
    activeTab
}: BlockEditorProps) => {
    const { handleMouseDown } = useResizablePanel(setSplitPosition);
    const [renderCode, setCode] = useState<string | null>(code);

    useEffect(() => {
        setCode(code);
    }, [code]);

    return (
        <div className='flex-1 flex gap-0 relative' id="split-pane">
            <div className='overflow-auto' style={{ width: `${splitPosition}%`, minWidth: '10%' }}>
                <CodePreview code={activeTab === "old" ? blocksManage.oldCode : renderCode} />
            </div>

            {/* 拖动调整栏 */}
            <div
                className="flex-none w-2 bg-gray-300 hover:bg-blue-500 cursor-col-resize relative group z-10"
                onMouseDown={handleMouseDown}
                style={{ touchAction: 'none' }}
            >
                <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-4 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="h-8 w-[3px] bg-blue-600 rounded"></div>
                </div>
            </div>

            <div className="overflow-auto" style={{ width: `${100 - splitPosition}%`, minWidth: '10%' }}>
                <div className="h-full">
                    <MonacoEditor
                        value={renderCode}
                        onChange={(value) => {
                            blocksManage.code = value!
                            setCode(value!)
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default BlockEditor;
