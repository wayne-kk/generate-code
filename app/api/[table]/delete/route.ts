// /api/[table]/delete/route.ts
import { NextRequest, NextResponse } from "next/server";
import supabase from "@/_lib/supabase";
import { getTableConfig } from "../_crudHelper";

export async function DELETE(
    req: NextRequest,
    context: { params: Promise<{ table: string }> }
) {
    const { table } = await context.params;
    try {
        getTableConfig(table);
        const body = await req.json();
        const { id } = body;
        if (!id) {
            return NextResponse.json({ error: '缺少必要字段（id）' }, { status: 400 });
        }
        const { data, error } = await supabase.from(table).delete().eq('id', id);
        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
        return NextResponse.json({ status: 'deleted', data });
    } catch (e: any) {
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}
