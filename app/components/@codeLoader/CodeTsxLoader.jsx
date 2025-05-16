'use client';
import React, { useState, useEffect } from 'react';
import * as Babel from '@babel/standalone';

// ✅ 注释所有形式的 import
const sanitizeCode = (code) =>
    code.replace(/^\s*import[\s\S]*?from\s+['"][^'"]+['"]\s*;?\s*$/gm, match => `// ${match}`);

const CodeTsxLoader = ({ code, customComponents = {}, props = {} }) => {
    const [Component, setComponent] = useState(null);

    useEffect(() => {
        try {
            // ✅ Step 1: 注释 import
            const sanitizedCode = sanitizeCode(code);
            console.log('🧼 Sanitized Code:\n', sanitizedCode);

            // ✅ Step 2: 替换 export default
            const wrappedCode = sanitizedCode.includes('export default')
                ? sanitizedCode.replace(/export\s+default/, 'module.exports =')
                : `module.exports = ${sanitizedCode}`;

            // ✅ Step 3: 编译
            const transformed = Babel.transform(wrappedCode, {
                presets: ['typescript', 'react'],
                filename: 'component.tsx',
            });

            // ✅ Step 4: 移除 Babel 多余的 `export {};`
            const cleanedCode = transformed.code.replace(/export\s*\{\s*\};?$/, '');

            // ✅ Step 5: 注入环境 & 执行
            const componentKeys = Object.keys(customComponents).join(', ');
            const dynamicModule = new Function('React', 'components', `
                const { ${componentKeys} } = components;
                const exports = {};
                const module = { exports };
                ${cleanedCode}
                return module.exports;
            `)(React, customComponents);

            if (!dynamicModule || typeof dynamicModule !== 'function') {
                throw new Error('Parsed component is not a function.');
            }

            setComponent(() => dynamicModule);
        } catch (error) {
            console.error('❌ Error loading component:', error);
        }
    }, [code]);

    if (!Component) return <div>Loading...</div>;
    return <Component key={JSON.stringify(props)} {...props} />;
};

export default CodeTsxLoader;
