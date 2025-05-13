'use client';
import React, { useState, useEffect } from 'react';
import * as Babel from '@babel/standalone';

// ✅ 注释掉所有 import 语句（支持多行）
const sanitizeCode = (code) => {
    return code.replace(/^\s*import\s.+from\s+['"][^'"]+['"];?\s*$/gm, match => `// ${match}`);
};

const CodeTsxLoader = ({ code, customComponents = {}, props = {} }) => {
    const [Component, setComponent] = useState(null);

    useEffect(() => {
        try {
            // ✅ 第一步：注释掉 import
            const sanitizedCode = sanitizeCode(code);

            // ✅ 第二步：包装 export default
            const wrappedCode = sanitizedCode.includes('export default')
                ? sanitizedCode.replace(/export\s+default/, 'module.exports =')
                : `module.exports = ${sanitizedCode}`;

            // ✅ 第三步：Babel 转译（用清洗后的代码！）
            const transformedCode = Babel.transform(wrappedCode, {
            presets: ['react', 'typescript'],
            plugins: ['transform-modules-commonjs'],
            filename: 'component.tsx',
        }).code;

            // ✅ 第四步：运行时注入组件并执行
            const componentKeys = Object.keys(customComponents).join(', ');
            const dynamicModule = new Function('React', 'components', `
        const { ${componentKeys} } = components;
        const exports = {};
        const module = { exports };
        ${transformedCode}
        return module.exports;
      `)(React, customComponents);

            if (!dynamicModule || typeof dynamicModule !== 'function') {
            throw new Error('Parsed component is not a function.');
        }

            setComponent(() => dynamicModule);
        } catch (error) {
            console.error('Error loading component:', error);
        }
    }, [code]);

    if (!Component) return <div>Loading...</div>;
    return <Component key={JSON.stringify(props)} {...props} />;
};

export default CodeTsxLoader;
