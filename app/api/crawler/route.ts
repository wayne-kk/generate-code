// app/api/web-to-react/route.ts
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { scrapeAndConvert } from './core';

// 请求体类型定义
interface WebToReactRequest {
    url: string;
    selector: string;
    componentName?: string;
}

// 响应体类型定义
interface WebToReactResponse {
    success: boolean;
    componentCode?: string;
    componentName?: string;
    originalHtml?: string;
    error?: string;
    processSteps?: {
        step1: string;
        step2: string;
        step3: string;
    };
}

// POST 请求处理器
export async function POST(request: NextRequest) {
    try {
        const body: WebToReactRequest = await request.json();

        // 验证请求体
        if (!body.url || !body.selector) {
            return NextResponse.json<WebToReactResponse>(
                { success: false, error: 'URL 和 selector 参数是必需的' },
                { status: 400 }
            );
        }

        // 验证 URL 格式
        try {
            new URL(body.url);
        } catch {
            return NextResponse.json<WebToReactResponse>(
                { success: false, error: '无效的 URL 格式' },
                { status: 400 }
            );
        }

        console.log(`开始两步转换流程: ${body.url}, 选择器: ${body.selector}`);

        const result = await scrapeAndConvert(body.url, body.selector, body.componentName);

        console.log('✅ 两步转换流程完成!');

        // 保存文件
        const tsxPath = path.join(process.cwd(), 'public', 'generate.tsx');
        fs.writeFileSync(tsxPath, result.componentCode, 'utf8');

        return NextResponse.json<WebToReactResponse>({
            success: true,
            ...result
        });

    } catch (error) {
        console.error('❌ 处理请求时出错:', error);

        const errorMessage = error instanceof Error ? error.message : '未知错误';

        return NextResponse.json<WebToReactResponse>(
            { success: false, error: errorMessage },
            { status: 500 }
        );
    }
}