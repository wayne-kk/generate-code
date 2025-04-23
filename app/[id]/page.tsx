// app/[id]/page.tsx
'use client';  // 明确标记为客户端组件

import CombinationApp from '@/component/CombinationApp';
import { useParams } from 'next/navigation';  // 使用 next/navigation 中的 useParams
import { useState, useEffect } from 'react';

const Page = () => {
    const [pageData, setPageData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    const { id } = useParams();  // 使用 useParams 来获取动态路由参数

    useEffect(() => {
        if (!id) return;

        const fetchPageData = async () => {
            try {
                const res = await fetch(`/api/get-page?id=${id}`);
                const data = await res.json();

                if (res.ok) {
                    console.log('data', data.data);
                    setPageData(data.data);
                } else {
                    setError(data.error || '数据获取失败');
                }
            } catch (error) {
                setError('请求数据时出错');
            }
        };

        fetchPageData();
    }, [id]);

    if (error) {
        return <div>错误：{error}</div>;
    }

    if (!pageData) {
        return <div>加载中...</div>;
    }
    return (
        <div id="preview-viewport" className="relative">
            <CombinationApp children={pageData.children} blocksMap={pageData.blocks_data} />
        </div>
    );
};

export default Page;
