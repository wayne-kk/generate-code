import supabase from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function DELETE(req: Request) {
    try {
        const body = await req.json();
        const { id } = body;
        console.log('请求删除 block，ID:', id);

        if (!id) {
            return NextResponse.json({ error: '缺少必要字段（id）' }, { status: 400 });
        }

        const { data, error } = await supabase
            .from('aigcode_blocks') // 指定你的表名
            .delete()
            .eq('id', id);

        if (error) {
            console.error('Supabase delete error:', error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ status: 'deleted', data });
    } catch (e: any) {
        console.error('Unexpected error:', e);
        return NextResponse.json({ error: '服务异常' }, { status: 500 });
    }
}
