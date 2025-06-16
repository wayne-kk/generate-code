// /api/[table]/update/name/route.ts
import { NextRequest, NextResponse } from "next/server";
import supabase from "@/_lib/supabase";
import { getTableConfig } from "../../_crudHelper";
import { nanoid } from "nanoid";

export async function POST(
    req: NextRequest,
    context: { params: Promise<{ table: string }> }
) {
    const { table } = await context.params;
    try {
        getTableConfig(table);
        const body = await req.json();

        // 检查 name 字段
        if (!body.name) {
            console.log("缺少必要字段（name）");
            return NextResponse.json({ error: "缺少必要字段（name）" }, { status: 400 });
        }
        // 检查其他必填字段
        if (!body.code) {
            console.log("缺少必要字段（code）");
            return NextResponse.json({ error: `缺少必要字段（code）` }, { status: 400 });
        }

        // 查找是否有对应 name 的数据
        const { data: existing, error: findError } = await supabase
            .from(table)
            .select('*')
            .eq('name', body.name)
            .single();

        if (findError && findError.code !== 'PGRST116') {
            // 不是没找到（PGRST116），就是其他错误
            return NextResponse.json({ error: '查找数据失败' }, { status: 500 });
        }

        if (!existing) {
            // 未找到，创建新记录
            const { data, error } = await supabase
                .from(table)
                .insert({
                    id: nanoid(),
                    name: body.name,
                    code: body.code,
                    type: body.type,
                })
                .select();
            if (error) {
                return NextResponse.json({ error: error.message }, { status: 500 });
            }
            return NextResponse.json({ status: 'created', data }, { status: 201 });
        } else {
            // 找到了，更新
            const { data, error } = await supabase
                .from(table)
                .update(body)
                .eq('name', body.name)
                .select();
            if (error) {
                return NextResponse.json({ error: error.message }, { status: 500 });
            }
            return NextResponse.json({ status: 'updated', data }, { status: 200 });
        }
    } catch (e: any) {
        return NextResponse.json({ error: e.message || '服务异常' }, { status: 500 });
    }
}
