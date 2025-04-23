// app/api/blocks/route.ts

import { NextResponse } from 'next/server';
import { insertAiBlock } from '@/lib/database'; // 导入你的方法
import { nanoid } from 'nanoid';

const CORS_HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
};

export async function OPTIONS() {
    return new Response(null, {
        status: 204,
        headers: CORS_HEADERS,
    });
}

export async function POST(req: Request) {
    try {
        const block = await req.json();  // 从请求体中解析出 block 数据
        // 调用 insertOrUpdateBlock 方法
        const blockId = await insertAiBlock(block);

        return NextResponse.json({ blockId: blockId }, {
            status: 200,
            headers: CORS_HEADERS,
        });
    } catch (error: any) {
        console.error('Error processing request:', error);
        return NextResponse.json({ message: 'Error saving block', error: error.message }, {
            status: 500,
            headers: CORS_HEADERS,
        });
    }
}
