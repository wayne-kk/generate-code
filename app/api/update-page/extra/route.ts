import supabase from "@/lib/supabase";

export async function POST(req: Request) {
    try {
        // 允许所有跨域请求
        const headers = new Headers();
        headers.set('Access-Control-Allow-Origin', '*');
        headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        headers.set('Access-Control-Allow-Headers', 'Content-Type');

        // 如果是 OPTIONS 请求，返回 200 状态码
        if (req.method === 'OPTIONS') {
            return new Response(null, { status: 200, headers });
        }

        const body = await req.json();
        const { pageId, extra } = body;

        // 构建需要更新的字段，只有 extra 字段需要更新
        const pagedata: any = {
            extra: extra,
        };

        // 在 Supabase 中更新数据
        const { data, error } = await supabase
            .from('page_data')
            .update(pagedata)
            .eq('id', pageId);

        if (error) {
            return new Response(JSON.stringify({ error: error.message }), {
                status: 500,
                headers,
            });
        }

        return new Response(JSON.stringify({ pageId: pageId }), {
            status: 200,
            headers,
        });
    } catch (error) {
        return new Response(
            JSON.stringify({ error: 'Failed to parse or update extra' }),
            { status: 400, headers: new Headers({ 'Access-Control-Allow-Origin': '*' }) }
        );
    }
}
