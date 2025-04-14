'use client';

import CombinationApp from "@/component/CombinationApp";
import useDataStore from "@/store/useDateStore";

export default function Display() {
    let pageDefaultData = useDataStore((state) => state.pageDefaultData); // 从 Zustand Store 中获取数据
    // if (!pageDefaultData) {
    //     pageDefaultData = mockData
    // }
    if (Object.keys(pageDefaultData).length === 0) return null
    // fetchBlockData(data)
    return (
        <div id="preview-viewport">
            {/* 将获取到的数据传递给 CombinationApp 组件 */}
            <CombinationApp {...pageDefaultData} />
        </div>
    );
}