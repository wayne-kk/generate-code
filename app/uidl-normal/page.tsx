"use client";
import React, { useEffect, useState } from "react";
import CodeLoader from "../component/@codeLoader/CodeLoader";

const Page = (props: any) => {
    const [codeStr, setCodeStr] = useState<string | null>(null);

    // 使用 useEffect 动态加载组件代码
    useEffect(() => {
        // 示例调用

        const fetchComponent = async () => {

            const response = await fetch("api/generate-uidl-component");
            const { component } = await response.json();
            // 去掉组件的 React 导入部分
            const updatedCodeStr = component.files[0].content.replace(
                `import React from 'react'\n\n`,
                ""
            );
            console.log('component', component)
            setCodeStr(updatedCodeStr); // 设置动态加载的代码

        };

        fetchComponent();
    }, []); // 依赖项为空数组，确保只在首次加载时调用一次

    return (
        <div>
            {codeStr ? <CodeLoader code={codeStr} /> : <p>Loading...</p>}
        </div>
    );
};

export default Page;
