import { NextResponse } from 'next/server';
import axios from 'axios';

// 辅助函数：检查给定的字符串是否为图片 URL
function isImageUrl(value: string): boolean {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];

    // 检查是否包含 https、unsplash 或 image
    const containsValidHost = /unsplash|images|cdn/i.test(value);

    // 检查是否为图片扩展名，或者包含有效的图片主机（https、unsplash 或 image）
    return imageExtensions.some(ext => value.toLowerCase().endsWith(ext)) || containsValidHost;
}


// 调用 fetch-images API 获取新的图片 URL
async function fetchNewImageUrl(query: string): Promise<string | null> {
    try {
        // 从环境变量中获取 BASE_URL
        const response = await axios.get(`https://wayne.beer/api/fetch-images`, {
            params: { query }, // 传递查询参数
        });
        // 获取图片 URL
        return response.data?.imageUrl || null;
    } catch (error) {
        console.error('Error fetching new image:', error);
        return null;
    }
}

// 递归函数，用于处理 props 对象中的图片 URL
async function updatePropsWithImageUrls(props: any, query: string): Promise<any> {
    // ✅ 处理字符串类型（递归终点）
    if (typeof props === 'string' && isImageUrl(props)) {
        return await fetchNewImageUrl(query); // 替换为新图片 URL
    }

    // ✅ 处理数组
    if (Array.isArray(props)) {
        const updatedArray = [];
        for (let i = 0; i < props.length; i++) {
            updatedArray.push(await updatePropsWithImageUrls(props[i], query));
        }
        return updatedArray;
    }

    // ✅ 处理对象
    if (typeof props === 'object' && props !== null) {
        const updatedObject: any = {};
        for (const key in props) {
            if (props.hasOwnProperty(key)) {
                // 特殊处理 logo
                if (key === 'logo' && typeof props[key] === 'string' && isImageUrl(props[key])) {
                    updatedObject[key] = 'https://img.js.design/assets/img/6805f22761b367c073a8c972.png';
                } else {
                    updatedObject[key] = await updatePropsWithImageUrls(props[key], query);
                }
            }
        }
        return updatedObject;
    }

    // 原样返回其他类型（number、boolean 等）
    return props;
}


// 主处理函数，接收请求并更新 props 中的图片 URL
export async function POST(request: Request) {
    try {
        const { props, query } = await request.json(); // 获取请求体中的 props 和 query（默认为 'nature'）
        // 递归更新 props 中的图片 URL
        const updatedProps = await updatePropsWithImageUrls(props, JSON.stringify(query));

        return NextResponse.json(updatedProps); // 返回更新后的 props
    } catch (error) {
        console.error('Error updating props:', error);
        return NextResponse.json({ error: 'Failed to update props' }, { status: 500 });
    }
}
