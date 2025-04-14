import supabase from "@/lib/supabase";

async function getAllTypes() {
    // 使用 distinct 来查询唯一的 type 字段
    const { data, error } = await supabase
        .from('blocks')
        .select('type', { count: 'exact' })

    if (error) {
        console.error('Error querying types:', error.message);
        return [];
    }

    // 如果没有匹配的结果，返回一个空数组
    if (!data || data.length === 0) return [];

    // 返回所有唯一的 type 类型
    return Array.from(new Set(data.map(item => item.type)));
}

export async function GET(request: Request) {
    try {
        // 设置 CORS 头部，允许所有来源
        const headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',  // 允许所有来源的访问
            'Access-Control-Allow-Methods': 'GET',  // 允许 GET 方法
            'Access-Control-Allow-Headers': 'Content-Type',  // 允许的请求头
        };

        // 如果是 OPTIONS 请求，直接返回 200 响应
        if (request.method === 'OPTIONS') {
            return new Response(null, {
                status: 200,
                headers: headers,
            });
        }

        // 调用 getAllTypes 方法从数据库获取所有类型
        const types = await getAllTypes();

        // 返回成功的响应
        return new Response(JSON.stringify({ success: true, data: types }), {
            status: 200,
            headers: headers,  // 包含 CORS 头部
        });
    } catch (error) {
        // 处理错误
        return new Response(
            JSON.stringify({ success: false, message: error.message }),
            {
                status: 500,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',  // 允许所有来源的访问
                },
            }
        );
    }
}
