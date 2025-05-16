import supabase from "@/_lib/supabase";
import { nanoid } from "nanoid";

const defaultExtra = {
    "color": {
        "name": "自定义颜色",
        "colorHex": "#443480",
    },
    "webTheme": "Pet,Adoption,Fluffy",
    "font": {
        "heading": "Poppins",
        "body": "Raleway"
    }
}

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
        const { pageId, pageName, pageDescription, sections, extra, children, blocksData } = body;

        // 构建需要更新的字段，只有对应字段有值时才进行更新
        const pagedata: any = {
            id: pageId || nanoid(),
            page_name: pageName,
            page_description: pageDescription,
            sections: sections,
            extra: extra,
            children: children,
            blocks_data: blocksData,
        };

        // 在 Supabase 中插入数据
        const { data, error } = await supabase
            .from('page_data')
            .upsert([pagedata], { onConflict: 'id' });

        if (error) {
            return new Response(JSON.stringify({ error: error.message }), {
                status: 500,
                headers,
            });
        }

        return new Response(JSON.stringify({ pageId: pagedata.id }), {
            status: 200,
            headers,
        });
    } catch (error) {
        return new Response(
            JSON.stringify({ error: 'Failed to parse or insert data' }),
            { status: 400, headers: new Headers({ 'Access-Control-Allow-Origin': '*' }) }
        );
    }
}
