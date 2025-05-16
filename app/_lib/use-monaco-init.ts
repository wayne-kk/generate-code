'use client';

/**
 * 这个文件负责初始化 Monaco Editor 的类型定义和语言服务
 * 应该在使用 Monaco Editor 的页面组件中导入
 */

import { useEffect } from 'react';
import monacoConfig from './monaco-config';

// 用于初始化所有需要的类型定义的实用函数
function initializeMonacoServices(monaco: any) {
    // 确保语言服务已加载
    const languages = ['typescript', 'javascript', 'html', 'css', 'json'];

    // 配置 TypeScript/JavaScript 编译器选项
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

    monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
        target: monaco.languages.typescript.ScriptTarget.ESNext,
        allowNonTsExtensions: true,
        allowJs: true,
        checkJs: true,
    });

    // 基本的 TypeScript 类型定义
    const typesToLoad = [
        { url: 'https://unpkg.com/@types/react@18.2.0/index.d.ts', path: 'file:///node_modules/@types/react/index.d.ts' },
        { url: 'https://unpkg.com/@types/react-dom@18.2.0/index.d.ts', path: 'file:///node_modules/@types/react-dom/index.d.ts' },
        { url: 'https://unpkg.com/@types/node@18.15.0/index.d.ts', path: 'file:///node_modules/@types/node/index.d.ts' }
    ];

    // 加载基本的 TypeScript 类型定义
    typesToLoad.forEach(({ url, path }) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
                }
                return response.text();
            })
            .then(types => {
                monaco.languages.typescript.typescriptDefaults.addExtraLib(types, path);
                monaco.languages.typescript.javascriptDefaults.addExtraLib(types, path);
            })
            .catch(error => console.error(`Error loading type definitions:`, error));
    });

    // 添加自定义的 Next.js 类型定义
    const nextjsTypes = `
    declare module 'next/dynamic' {
      export default function dynamic<P = {}>(
        dynamicOptions: {
          loader: () => Promise<React.ComponentType<P> | { default: React.ComponentType<P> }>;
          loading?: React.ComponentType<any>;
          ssr?: boolean;
          suspense?: boolean;
        },
        options?: { ssr?: boolean; suspense?: boolean },
      ): React.ComponentType<P>;
    }

    declare module 'next/link' {
      import { PropsWithChildren } from 'react';
      
      export interface LinkProps {
        href: string;
        as?: string;
        replace?: boolean;
        scroll?: boolean;
        shallow?: boolean;
        passHref?: boolean;
        prefetch?: boolean;
        locale?: string | false;
      }
      
      export type LinkPropsWithChildren = PropsWithChildren<LinkProps>;
      
      export default function Link(props: LinkPropsWithChildren): JSX.Element;
    }

    declare module 'next/image' {
      import { DetailedHTMLProps, ImgHTMLAttributes } from 'react';
      
      export interface ImageProps extends Omit<DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, 'src' | 'alt'> {
        src: string;
        alt: string;
        width?: number;
        height?: number;
        layout?: 'fixed' | 'intrinsic' | 'responsive' | 'fill';
        quality?: number | string;
        priority?: boolean;
        loading?: 'lazy' | 'eager';
        objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
        objectPosition?: string;
        unoptimized?: boolean;
      }
      
      export default function Image(props: ImageProps): JSX.Element;
    }
  `;

    monaco.languages.typescript.typescriptDefaults.addExtraLib(
        nextjsTypes,
        'file:///node_modules/@types/next/index.d.ts'
    );

    // 添加常用的库类型定义
    const tailwindCssTypes = `
    declare interface ClassAttributes<T> extends React.Attributes {
      className?: string;
    }
  `;

    monaco.languages.typescript.typescriptDefaults.addExtraLib(
        tailwindCssTypes,
        'file:///node_modules/@types/tailwindcss/index.d.ts'
    );
}

export default function useMonacoInit() {
    useEffect(() => {
        // 初始化基本配置
        monacoConfig();

        // 当Monaco加载完成后，初始化所有类型定义
        import('@monaco-editor/react').then(({ loader }) => {
            loader.init().then(monaco => {
                if (monaco) {
                    initializeMonacoServices(monaco);
                }
            });
        });
    }, []);
}