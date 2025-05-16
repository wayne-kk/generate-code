import { NextResponse } from 'next/server';
import { createApi } from 'unsplash-js';

// 使用 Unsplash API 获取随机图片的 URL
const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY!;
const unsplash = createApi({
    accessKey: UNSPLASH_ACCESS_KEY,
});

export async function GET(request: Request) {
    try {
        // 从请求查询参数中获取搜索关键字
        const url = new URL(request.url);
        const query = url.searchParams.get('query') || "[\"nature\"]"; // 默认查询关键词为 'nature'
        const count = Number(url.searchParams.get('count')) || 1; // 默认获取1张图片
        console.log('query', query, 'count', count, JSON.parse(query));
        const key = JSON.parse(query).join(','); // 将数组转换为字符串
        // 调用 fetchImages 函数获取图片数组
        const images = await fetchImages(key, count);

        if (!images || images.length === 0) {
            return NextResponse.json({ error: 'No images found.' }, { status: 404 });
        }

        // 返回图片数组和其详细信息
        return NextResponse.json({ images });
    } catch (error) {
        console.error('Unexpected error:', error);
        return NextResponse.json({ error: 'Unable to fetch images.' }, { status: 500 });
    }
}


// 封装函数用于获取随机图片
async function fetchImages(query: string, count: number): Promise<any[] | null> {
    try {
        // 使用 unsplash-js 获取随机图片)
        const result = await unsplash.photos.getRandom({ query, count });

        if (result.type === 'success') {
            const response = Array.isArray(result.response) ? result.response : [result.response];
            if (response.length > 0) {
                return response.map((photo) => ({
                    id: photo.id,
                    alt_description: photo.alt_description,
                    imageUrl: photo.urls.regular,
                    user: {
                        name: photo.user.name,
                        username: photo.user.username,
                        profileUrl: photo.user.links.html,
                    },
                }));
            } else {
                console.error('No images found.');
                return null;
            }
        }
    } catch (error) {
        console.error('Error fetching images:', error);
        return null;
    }
    // Ensure all code paths return a value
    return null;
}

