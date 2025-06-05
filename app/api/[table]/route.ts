import { NextRequest, NextResponse } from "next/server";
import supabase from "@/_lib/supabase";
import { getTableConfig, } from "./_crudHelper";

// 获取全部
export async function GET(
    req: NextRequest,
    context: { params: Promise<{ table: string }> }
) {
    const { table } = await context.params;
    try {
        getTableConfig(table); // 校验表名
        const { data, error } = await supabase.from(table).select("*");
        if (error) {
            console.error(error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
        return NextResponse.json({ data }, { status: 200 });
    } catch (e: any) {
        console.error(e);
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}
