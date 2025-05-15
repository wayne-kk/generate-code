'use client';

import { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import useMonacoInit from '@/lib/use-monaco-init';

// Dynamically import the Monaco editor to prevent SSR issues
const MonacoEditorComponent = dynamic(
    () => import('@monaco-editor/react').then(mod => mod.default),
    { ssr: false }
);

interface EditorProps {
    value?: string;
    language?: string;
    onChange?: (value: string | undefined) => void;
}

export default function MonacoEditor({ value, language, onChange }: EditorProps) {
    // 调用您的初始化钩子，确保 Monaco 配置加载
    useMonacoInit();

    const monacoRef = useRef<any>(null);
    const editorRef = useRef<any>(null);
    const [detectedLanguage, setDetectedLanguage] = useState(language || 'typescript');
    const [isMonacoReady, setIsMonacoReady] = useState(false);

    // 存储搜索状态的 ref
    const findStateRef = useRef<{
        searchText: string;
        replaceText: string;
    }>({
        searchText: '',
        replaceText: ''
    });

    // 当值变化时尝试检测语言
    useEffect(() => {
        if (!value) return;

        // 简单检测：如果包含 HTML 标签，设置为 html；如果包含 JSX 语法，设置为 tsx
        if (value.includes('<') && value.includes('>')) {
            // 进一步检查是否为 JSX（例如，包含 React 组件或属性）
            if (value.match(/<[A-Z]|on[A-Z]|className|useState|useEffect|import.*from.*react/)) {
                setDetectedLanguage('tsx');  // 对 React/JSX 文件使用 tsx
            } else {
                setDetectedLanguage('html');
            }
        } else if (value.includes('interface') || value.includes('type ') || value.includes(':') || value.includes('namespace')) {
            // 明确检测 TypeScript 特有的语法元素
            setDetectedLanguage('typescript');
        } else if (value.includes('function') || value.includes('const') || value.includes('var') || value.includes('let')) {
            setDetectedLanguage('javascript');
        } else {
            setDetectedLanguage(language || 'typescript');
        }
    }, [value, language]);

    // 当 Monaco 加载时配置编辑器
    const handleEditorDidMount = (editor: any, monaco: any) => {
        editorRef.current = editor;
        monacoRef.current = monaco;
        setIsMonacoReady(true);

        // 确保应用正确的语言设置和编译器选项
        if (monaco && monaco.languages && monaco.languages.typescript) {
            // 再次确认编译器选项设置 - 这是防止配置未正确应用的保险措施
            monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
                target: monaco.languages.typescript.ScriptTarget.ESNext,
                allowNonTsExtensions: true,
                moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
                module: monaco.languages.typescript.ModuleKind.ESNext,
                noEmit: true,
                esModuleInterop: true,
                jsx: monaco.languages.typescript.JsxEmit.React,
                jsxFactory: 'React.createElement',
                jsxFragmentFactory: 'React.Fragment',
                allowJs: true,
                typeRoots: ['node_modules/@types'],
            });
        }

        // 建立模型更改监听
        setupModelListener(editor, monaco);

        // 聚焦编辑器
        editor.focus();
    };

    // 设置搜索框监听器
    const setupModelListener = (editor: any, monaco: any) => {
        if (!editor || !monaco) return;

        try {
            // 监听搜索框输入变化
            const findInput = document.querySelector('.monaco-editor .find-widget .input');
            const replaceInput = document.querySelector('.monaco-editor .find-widget .replace-input');

            // 为搜索输入框添加事件监听
            if (findInput) {
                findInput.addEventListener('input', (e: any) => {
                    findStateRef.current.searchText = e.target.value;
                });
            }

            // 为替换输入框添加事件监听
            if (replaceInput) {
                replaceInput.addEventListener('input', (e: any) => {
                    findStateRef.current.replaceText = e.target.value;
                });
            }

            // 监听模型变化事件，当模型重新创建时重新注入搜索值
            editor.onDidChangeModel(() => {
                setTimeout(() => {
                    restoreSearchState();
                }, 100);
            });
        } catch (e) {
            console.warn('Failed to setup search widget listeners:', e);
        }
    };

    // 恢复搜索状态
    const restoreSearchState = () => {
        try {
            const findInput = document.querySelector('.monaco-editor .find-widget .input') as HTMLInputElement;
            const replaceInput = document.querySelector('.monaco-editor .find-widget .replace-input') as HTMLInputElement;

            // 如果搜索框存在且有保存的搜索文本，则恢复
            if (findInput && findStateRef.current.searchText) {
                findInput.value = findStateRef.current.searchText;
                // 触发输入事件，确保Monaco内部状态更新
                findInput.dispatchEvent(new Event('input', { bubbles: true }));
            }

            // 如果替换框存在且有保存的替换文本，则恢复
            if (replaceInput && findStateRef.current.replaceText) {
                replaceInput.value = findStateRef.current.replaceText;
                // 触发输入事件，确保Monaco内部状态更新
                replaceInput.dispatchEvent(new Event('input', { bubbles: true }));
            }
        } catch (e) {
            console.warn('Failed to restore search state:', e);
        }
    };

    // 处理编辑器内容变化
    const handleEditorChange = (newValue: string | undefined) => {
        if (onChange) {
            onChange(newValue);
        }
    };

    useEffect(() => {
        // 当检测到的语言改变时更新语言模型
        if (monacoRef.current && editorRef.current && isMonacoReady) {
            const model = editorRef.current.getModel();
            if (model) {
                monacoRef.current.editor.setModelLanguage(model, detectedLanguage);
            }
        }
    }, [detectedLanguage, isMonacoReady]);

    // 在组件卸载前保存搜索状态
    useEffect(() => {
        return () => {
            try {
                const findInput = document.querySelector('.monaco-editor .find-widget .input') as HTMLInputElement;
                const replaceInput = document.querySelector('.monaco-editor .find-widget .replace-input') as HTMLInputElement;

                if (findInput) {
                    findStateRef.current.searchText = findInput.value;
                }

                if (replaceInput) {
                    findStateRef.current.replaceText = replaceInput.value;
                }
            } catch (e) {
                console.warn('Failed to save search state on unmount:', e);
            }
        };
    }, []);

    return (
        <div className="border rounded-md overflow-hidden w-full min-w-0">
            <MonacoEditorComponent
                height="750px"
                language={detectedLanguage}
                value={value}
                theme="vs-dark"
                onChange={handleEditorChange}
                onMount={handleEditorDidMount}
                options={{
                    minimap: { enabled: false },
                    fontSize: 14,
                    automaticLayout: true,
                    tabSize: 2,
                    formatOnPaste: true,
                    formatOnType: true,
                    scrollBeyondLastLine: false,
                    quickSuggestions: true,
                    suggestOnTriggerCharacters: true,
                    acceptSuggestionOnEnter: "on",
                    wordBasedSuggestions: "currentDocument",
                    parameterHints: {
                        enabled: true
                    },
                    snippetSuggestions: "inline",
                    renderLineHighlight: "all",
                    fontLigatures: true,
                    find: {
                        addExtraSpaceOnTop: true,
                        autoFindInSelection: 'never',
                        seedSearchStringFromSelection: 'always'
                    }
                }}
            />
        </div>
    );
}