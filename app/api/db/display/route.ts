import supabase from '@/lib/supabase';
import { NextResponse } from 'next/server';

// 初始化 Supabase 客户端

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const keyword = searchParams.get('keyword') || '';

  // 查询数据库中的 blocks 表，支持模糊匹配，并返回 20 条随机结果
  const { data, error } = await supabase
    .from('blocks')  // 查询 blocks 表
    .select('*')
    .ilike('name', `%${keyword}%`)  // 使用 ilike 进行模糊匹配
    .order('created_at', { ascending: false })  // 按时间排序，若需要随机顺序使用 order('id') 或其他字段
    .limit(20);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json({ data });
}
