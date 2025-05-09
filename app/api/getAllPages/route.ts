import supabase from "@/lib/supabase";

export async function GET(req: Request) {
    const headers = new Headers();
    headers.set("Access-Control-Allow-Origin", "*");
    headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    headers.set("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        return new Response(null, { status: 200, headers });
    }

    try {
        const url = new URL(req.url);
        const page = parseInt(url.searchParams.get("page") || "1");
        const pageSize = parseInt(url.searchParams.get("pageSize") || "10");
        const offset = (page - 1) * pageSize;

        const { data, error, count } = await supabase
            .from("page_data")
            .select("id, page_name, page_description, cover_url, created_at", { count: "exact" })
            .range(offset, offset + pageSize - 1);

        if (error) {
            return new Response(
                JSON.stringify({ error: error.message }),
                { status: 500, headers }
            );
        }

        return new Response(
            JSON.stringify({
                data,
                pagination: {
                    page,
                    pageSize,
                    totalItems: count,
                    totalPages: Math.ceil((count || 0) / pageSize),
                },
            }),
            { status: 200, headers }
        );
    } catch (err) {
        return new Response(
            JSON.stringify({ error: "Failed to fetch data" }),
            { status: 500, headers }
        );
    }
}
