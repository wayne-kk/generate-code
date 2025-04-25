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


// 调用 fetch-images API 获取新的图片 URL，支持传入 count
async function fetchNewImages(query: string, count: number = 1): Promise<string[] | null> {
    try {
        // 从环境变量中获取 BASE_URL
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/fetch-images`, {
            params: { query, count }, // 传递查询参数和图片数量
        });

        // 获取图片 URLs
        const images = response.data?.images || [];
        return images.length > 0 ? images : null;
    } catch (error) {
        console.error('Error fetching new images:', error);
        return null;
    }
}

// 递归函数，用于处理 props 对象中的图片 URL
async function updatePropsWithImageUrls(props: any, query: string): Promise<any> {
    let imageCount = 0; // 统计图片数量
    const pathsToUpdate: { path: string[], value: any }[] = []; // 用来记录需要更新的图片路径

    // 递归遍历对象，统计图片 URL 的数量
    function countImages(obj: any, path: string[] = []) {
        if (typeof obj === 'string' && isImageUrl(obj)) {
            imageCount++;
            pathsToUpdate.push({ path, value: obj });
        } else if (Array.isArray(obj)) {
            obj.forEach((item, index) => countImages(item, [...path, `${index}`]));
        } else if (typeof obj === 'object' && obj !== null) {
            for (const key in obj) {
                if (obj.hasOwnProperty(key)) {
                    countImages(obj[key], [...path, key]);
                }
            }
        }
    }

    // 开始统计图片数量
    countImages(props);

    // 如果没有图片，直接返回原对象
    if (imageCount === 0) {
        return props;
    }

    // 一次性请求所需的图片
    const images: any = await fetchNewImages(query, imageCount) || [];

    if (!images || images.length === 0) {
        return props
    }
    // 使用请求到的图片 URL 更新 props
    let imageIndex = 0;
    function updateImages(obj: any): any {
        if (typeof obj === 'string' && isImageUrl(obj)) {
            // 更新图片
            const newImageUrl = images[imageIndex++].imageUrl;
            return newImageUrl;
        } else if (Array.isArray(obj)) {
            return obj.map(updateImages);
        } else if (typeof obj === 'object' && obj !== null) {
            const updatedObj: any = {};
            for (const key in obj) {
                if (obj.hasOwnProperty(key)) {
                    if (key === 'logo' && typeof props[key] === 'string' && isImageUrl(props[key])) {
                        updatedObj[key] = 'https://img.js.design/assets/min_img/680a1e0361b367c0736a991b.m.png';
                    } else {
                        updatedObj[key] = updateImages(obj[key]);
                    }
                }
            }
            return updatedObj;
        }
        return obj;
    }

    // 更新所有图片 URL
    return updateImages(props);
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
