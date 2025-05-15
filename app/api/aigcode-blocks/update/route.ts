import supabase from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        let { id, name, code, type, props, source_id = null } = body;

        console.log('接收到的 block 数据:', body);

        if (!id || !name || !code) {
            return NextResponse.json({ error: '缺少必要字段（id, name, code）' }, { status: 400 });
        }

        // 判断是否是新建（即 id 是否已存在于数据库中）
        const { data: existingById, error: idCheckError } = await supabase
            .from('aigcode_blocks')
            .select('id')
            .eq('id', id)
            .single();

        if (idCheckError && idCheckError.code !== 'PGRST116') {
            console.error('Supabase ID check error:', idCheckError);
            return NextResponse.json({ error: 'ID 检查失败' }, { status: 500 });
        }

        // 如果是新增（id 不存在），才检测 name 冲突
        if (!existingById) {
            const { data: existingNames, error: nameCheckError } = await supabase
                .from('aigcode_blocks')
                .select('name')
                .like('name', `${name}%`);

            if (nameCheckError) {
                console.error('Supabase name check error:', nameCheckError);
                return NextResponse.json({ error: '名称检查失败' }, { status: 500 });
            }

            const existingNameSet = new Set(existingNames?.map(n => n.name));
            const baseName = name;
            let suffix = 1;

            while (existingNameSet.has(name)) {
                name = `${baseName}_${suffix}`;
                suffix += 1;
            }
        }

        // 执行 UPSERT
        const { data, error } = await supabase
            .from('aigcode_blocks')
            .upsert({
                id,
                name,
                code,
                type,
                props,
                source_id,
            }, {
                onConflict: 'id',
            });

        if (error) {
            console.error('Supabase insert error:', error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ status: 'success', data, finalName: name });

    } catch (e: any) {
        console.error('Unexpected error:', e);
        return NextResponse.json({ error: '服务异常' }, { status: 500 });
    }
}
