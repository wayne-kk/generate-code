// /api/[table]/update/route.ts
import { NextRequest, NextResponse } from "next/server";
import supabase from "@/_lib/supabase";
import { checkRequiredFields, getTableConfig } from "../_crudHelper";

export async function POST(
    req: NextRequest,
    context: { params: Promise<{ table: string }> }
) {
    const { table } = await context.params;
    try {
        const config = getTableConfig(table);
        const body = await req.json();
        // 校验必填
        const miss = checkRequiredFields(table, body);
        if (miss) {
            return NextResponse.json({ error: `缺少必要字段（${miss}）` }, { status: 400 });
        }

        let { id, name } = body;
        let finalName = name;

        // 新增时查重
        if (config.nameCheck) {
            const { data: existingById, error: idCheckError } = await supabase
                .from(table)
                .select('id')
                .eq('id', id)
                .single();
            if (idCheckError && idCheckError.code !== 'PGRST116') {
                return NextResponse.json({ error: 'ID 检查失败' }, { status: 500 });
            }
            if (!existingById) {
                const { data: existingNames, error: nameCheckError } = await supabase
                    .from(table)
                    .select('name')
                    .like('name', `${name}%`);
                if (nameCheckError) {
                    return NextResponse.json({ error: '名称检查失败' }, { status: 500 });
                }
                const existingNameSet = new Set(existingNames?.map(n => n.name));
                const baseName = name;
                let suffix = 1;
                while (existingNameSet.has(finalName)) {
                    finalName = `${baseName}_${suffix}`;
                    suffix += 1;
                }
                body.name = finalName;
            }
        }

        // UPSERT
        const { data, error } = await supabase
            .from(table)
            .upsert(body, { onConflict: 'id' });
        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
        return NextResponse.json({ status: 'success', data, finalName });
    } catch (e: any) {
        return NextResponse.json({ error: e.message || '服务异常' }, { status: 500 });
    }
}

// 获取全部
export async function GET(
    req: NextRequest,
    context: { params: Promise<{ table: string }> }
) {
    const { table } = await context.params;
    console.log(table)
    try {
        getTableConfig(table); // 检查合法性
        const { data, error } = await supabase.from(table).select("*");
        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
        return NextResponse.json({ data }, { status: 200 });
    } catch (e: any) {
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}
