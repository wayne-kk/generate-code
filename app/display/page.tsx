'use client';

import CombinationApp from "@/component/CombinationApp";
import useDataStore from "@/store/useDateStore";
import mockData from '../../resourceLibrary/data.json'

export default function Display() {
    let data = useDataStore((state) => state.data); // 从 Zustand Store 中获取数据
    if (!data) {
        data = mockData
    }
    return (
        <div id="preview-viewport">
            {/* 将获取到的数据传递给 CombinationApp 组件 */}
            <CombinationApp {...data} />
        </div>
    );
}