import supabase from "@/lib/supabase";

export async function GET(req: Request) {
    const headers = new Headers();

    try {
        // 设置 CORS 头，允许所有跨域请求
        headers.set('Access-Control-Allow-Origin', '*');
        headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        headers.set('Access-Control-Allow-Headers', 'Content-Type');

        // 处理 OPTIONS 请求，返回 200 状态码
        if (req.method === 'OPTIONS') {
            return new Response(null, { status: 200, headers });
        }

        // 获取 URL 中的查询参数（例如 id）
        const url = new URL(req.url);
        const pageId = url.searchParams.get("id"); // 获取 "id" 参数

        if (!pageId) {
            return new Response(
                JSON.stringify({ error: "Missing 'id' query parameter" }),
                { status: 400, headers }
            );
        }

        // 从 Supabase 获取数据
        const { data, error } = await supabase
            .from('page_data')
            .select('*') // 获取所有字段
            .eq('id', pageId) // 根据 id 查询
            .single(); // 返回单个结果

        if (error) {
            return new Response(
                JSON.stringify({ error: error.message }),
                { status: 500, headers }
            );
        }

        // 如果没有找到数据，返回 404 错误
        if (!data) {
            return new Response(
                JSON.stringify({ error: "Page not found" }),
                { status: 404, headers }
            );
        }

        // 返回查询到的数据
        return new Response(
            JSON.stringify({ data }),
            { status: 200, headers }
        );
    } catch (error) {
        return new Response(
            JSON.stringify({ error: 'Failed to fetch data' }),
            { status: 500, headers }
        );
    }
}
