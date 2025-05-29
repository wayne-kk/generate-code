import supabase from "@/_lib/supabase";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        // 查询所有唯一的 type 值
        const { data, error } = await supabase
            .from('aigcode_blocks')
            .select('type')
            .order('type');  // 可选：按字母顺序排序

        if (error) {
            console.error('Supabase query error:', error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        // 提取所有 type 值到一个简单数组，并去重
        const types = Array.from(new Set(data.map(item => item.type)));

        return NextResponse.json({
            status: 'success',
            data: types
        });

    } catch (e: any) {
        console.error('Unexpected error:', e);
        return NextResponse.json({ error: '服务异常' }, { status: 500 });
    }
}
