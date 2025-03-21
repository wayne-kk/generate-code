'use client'
import React, { useState, useEffect } from 'react';
import * as Babel from '@babel/standalone';

const CodeLoader = ({ code, customComponents = {}, props = {} }) => {
    const [Component, setComponent] = useState(null);

    useEffect(() => {
        try {
            let wrappedCode = code.includes("export default")
                ? code.replace("export default", "module.exports =")
                : `module.exports = ${code}`;

            const transformedCode = Babel.transform(wrappedCode, {
                presets: ['react'],
                plugins: ['transform-modules-commonjs']
            }).code;

            // ✅ 显式解构 `components` 里的所有自定义组件
            const componentKeys = Object.keys(customComponents).join(", ");
            const dynamicModule = new Function('React', 'components', `
                const { ${componentKeys} } = components; // ✅ 这里解构组件
                const exports = {};
                const module = { exports };
                ${transformedCode}
                return module.exports;
            `)(React,  customComponents);

            if (!dynamicModule || typeof dynamicModule !== 'function') {
                throw new Error("Parsed component is not a function.");
            }

            setComponent(() => dynamicModule);
        } catch (error) {
            console.error('Error loading component:', error);
        }
    }, []);

    if (!Component) return <div>Loading...</div>;

    return <Component {...props} />;
};

export default CodeLoader;
