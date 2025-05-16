// app/api/pages/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import supabase from "@/lib/supabase";

// 定义响应类型
interface PageData {
    id: string;
    title: string;
    content: string;
    // 添加其他字段
    created_at?: string;
    updated_at?: string;
}

interface ApiResponse<T = any> {
    data?: T;
  error?: string;
}

type PageResponse = ApiResponse<PageData>;

// 使用内联类型而不是自定义的 RouteContext 类型
export async function GET(
  request: NextRequest,
    { params }: { params: { id: string } }
): Promise<NextResponse<PageResponse>> {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
      const pageId = params.id;

    if (!pageId) {
      return NextResponse.json(
        { error: "Missing page ID" },
        { status: 400, headers }
      );
    }

    // 从 Supabase 获取数据
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

    // 如果没有找到数据，返回 404 错误
    if (!data) {
      return NextResponse.json(
        { error: "Page not found" },
        { status: 404, headers }
      );
    }

    // 返回查询到的数据
    return NextResponse.json({ data }, { status: 200, headers });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to fetch data';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500, headers }
    );
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
