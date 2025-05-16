// app/api/pages/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import supabase from '@/_lib/supabase';

// 定义响应类型
interface PageData {
    id: string;
    title: string;
    content: string;
    created_at?: string;
    updated_at?: string;
}

interface ApiResponse<T = any> {
    data?: T;
    error?: string;
}

type PageResponse = ApiResponse<PageData>;

// 删除自定义 Context 类型定义，直接在函数参数中使用标准结构

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse<PageResponse>> {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    };

    try {
        const { id: pageId } = await params;

        if (!pageId) {
            return NextResponse.json(
                { error: 'Missing page ID' },
                { status: 400, headers }
            );
        }

        const { data, error } = await supabase
            .from('page_data')
            .select('*')
            .eq('id', pageId)
            .single();

        if (error) {
            return NextResponse.json(
                { error: error.message },
                { status: 500, headers }
            );
        }

        if (!data) {
            return NextResponse.json(
                { error: 'Page not found' },
                { status: 404, headers }
            );
        }

        return NextResponse.json({ data }, { status: 200, headers });
    } catch (error) {
        const errorMessage =
            error instanceof Error ? error.message : 'Failed to fetch data';
        return NextResponse.json({ error: errorMessage }, { status: 500, headers });
    }
}

// 处理 OPTIONS 请求
export async function OPTIONS() {
    return new Response(null, {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
    });
}