'use client';

import CombinationApp, { CombinationAppProps } from "@/component/CombinationApp";
import { useEffect, useState } from "react";

export default function Display() {
    const [data, setData] = useState<CombinationAppProps>({});
    useEffect(() => {
        const pageDefaultData = JSON.parse(localStorage.getItem('pageDefaultData') ?? '{}')
        if (pageDefaultData) {
            setData(pageDefaultData);
        }
    }, []);
    if (!data) {
        return <div>Loading...</div>; // 如果数据未加载完成，显示 Loading
    }
    return (
        <div id="preview-viewport">
            {/* 将获取到的数据传递给 CombinationApp 组件 */}
            <CombinationApp {...data} />
        </div>
    );
}