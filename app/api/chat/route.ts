import { OpenAI } from 'openai';
import { NextRequest, NextResponse } from 'next/server';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY!,// 确保从环境变量获取 API key
    baseURL: 'https://aiapi.koudingvip.com/v1', // 自定义模型 URL
});

const allowedOrigin = "*"
// 处理跨域请求（OPTIONS 预检请求）
export async function OPTIONS() {
    return NextResponse.json({}, {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': allowedOrigin,
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        }
    });
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { messages, model = 'gpt-4o', temperature = 0.7 } = body;

        const chatCompletion = await openai.chat.completions.create({
            model,
            messages,
            temperature,
        });
        console.log('chatCompletion', chatCompletion)
        // 设置 CORS 响应头并返回结果
        const response = NextResponse.json(chatCompletion);

        response.headers.set('Access-Control-Allow-Origin', allowedOrigin);
        response.headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
        response.headers.set('Access-Control-Allow-Headers', 'Content-Type');

        return response;
    } catch (error: any) {
        console.error('[Chat API Error]:', error);
        return NextResponse.json(
            { error: error.message || 'Internal Server Error' },
            { status: 500 }
        );
    }
}
