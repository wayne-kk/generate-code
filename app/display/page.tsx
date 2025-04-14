'use client';

import CombinationApp from "@/component/CombinationApp";
import useDataStore from "@/store/useDateStore";

export default function Display() {
    let pageDefaultData = useDataStore((state) => state.pageDefaultData); // 从 Zustand Store 中获取数据
    if (!pageDefaultData) {
        return <div>Loading...</div>; // 如果数据未加载完成，显示 Loading
    }
    return (
        <div id="preview-viewport">
            {/* 将获取到的数据传递给 CombinationApp 组件 */}
            <CombinationApp {...pageDefaultData} />
        </div>
    );
}