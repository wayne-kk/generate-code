// /api/[table]/type/route.ts
import { NextRequest, NextResponse } from "next/server";
import supabase from "@/_lib/supabase";
import { getTableConfig } from "../_crudHelper";

export async function GET(
    req: NextRequest,
    context: { params: Promise<{ table: string }> }
) {
    const { table } = await context.params;
    try {
        getTableConfig(table); // 检查合法性
        const { data, error } = await supabase
            .from(table)
            .select('type')
            .order('type');
        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
        const types = Array.from(new Set(data.map(item => item.type)));
        return NextResponse.json({ status: 'success', data: types });
    } catch (e: any) {
        return NextResponse.json({ error: '服务异常' }, { status: 500 });
    }
}
