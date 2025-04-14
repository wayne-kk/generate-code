'use client';

import CombinationApp from "@/component/CombinationApp";
import useDataStore from "@/store/useDateStore";

export default function Display() {
    let pageDefaultData = useDataStore((state) => state.pageDefaultData); // 从 Zustand Store 中获取数据
    // if (!pageDefaultData) {
    //     pageDefaultData = mockData
    // }
    console.log('pageDefaultData', pageDefaultData)
    if (!pageDefaultData) return null
    // fetchBlockData(data)
    // const blockData = 
    return (
        <div id="preview-viewport">
            {/* 将获取到的数据传递给 CombinationApp 组件 */}
            <CombinationApp {...pageDefaultData} />
        </div>
    );
}