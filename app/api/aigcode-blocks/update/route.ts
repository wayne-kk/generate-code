import supabase from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { id, name, code, type, props, source_id = null } = body;
        console.log('接收到的 block 数据:', body);
        if (!id || !name || !code) {
            return NextResponse.json({ error: '缺少必要字段（id, name, code）' }, { status: 400 });
        }

        const { data, error } = await supabase
            .from('aigcode_blocks') // 指定你的表名
            .upsert({
                id: id,
                name: name,
                code: code,
                type: type,
                props: props,
                source_id: source_id
            }, {
                onConflict: 'id',
            });

        if (error) {
            console.error('Supabase insert error:', error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
        return NextResponse.json({ status: 'success', data });
    } catch (e: any) {
        console.error('Unexpected error:', e);
        return NextResponse.json({ error: '服务异常' }, { status: 500 });
    }
}