import { NextResponse } from 'next/server';
import axios from 'axios';

const UNSPLASH_API_URL = 'https://api.unsplash.com/photos/random'; // 使用 random 接口来获取随机图片

// 封装请求函数，支持重试机制
async function fetchImage(query: string, retries: number = 3): Promise<string | null> {
    try {
        const response = await axios.get(UNSPLASH_API_URL, {
            params: {
                query,
                client_id: process.env.UNSPLASH_ACCESS_KEY, // API 密钥
            },
        });

        const imageUrl = response.data?.urls?.regular; // 获取图片的 regular 尺寸 URL
        return imageUrl || null;
    } catch (error) {
        if (retries > 0) {
            console.log(`Request failed, retrying... (${3 - retries + 1}/3)`);
            await new Promise(resolve => setTimeout(resolve, 1000)); // 延迟1秒后重试
            return fetchImage(query, retries - 1);
        } else {
            console.error('Error fetching image:', error);
            return null;
        }
    }
}

export async function GET(request: Request) {
    try {
        // 从请求查询参数中获取搜索关键字
        const url = new URL(request.url);
        const query = url.searchParams.get('query') || 'nature'; // 默认查询关键词为 'nature'
        console.log('query', query);

        // 调用 fetchImage 函数，最多重试三次
        const imageUrl = await fetchImage(query);

        if (!imageUrl) {
            return NextResponse.json({ error: 'No image found after multiple attempts.' }, { status: 404 });
        }

        // 返回图片的 URL
        return NextResponse.json({ imageUrl });
    } catch (error) {
        console.error('Unexpected error:', error);
        return NextResponse.json({ error: 'Unable to fetch image.' }, { status: 500 });
    }
}
