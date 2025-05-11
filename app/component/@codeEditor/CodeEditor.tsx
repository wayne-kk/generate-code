// app/components/MonacoEditor.tsx
'use client';

import Editor from '@monaco-editor/react';

type Props = {
    value?: string;
    language?: string;
    onChange?: (value: string | undefined) => void;
};

export default function MonacoEditor({ value, language = 'javascript', onChange }: Props) {
    return (
        <div className="border rounded-md overflow-hidden w-full min-w-0">
            <Editor
                height="500px"
                defaultLanguage={language}
                defaultValue={value}
                theme="vs-dark"
                onChange={onChange}
                options={{
                    minimap: { enabled: false },
                    fontSize: 14,
                    automaticLayout: true,
                }}
            />
        </div>
    );
}
