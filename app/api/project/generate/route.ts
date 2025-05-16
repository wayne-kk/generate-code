
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { description } = await req.json();  // 从请求体中获取 description

    // 检查 description 是否存在
    if (!description) {
        return NextResponse.json(
            { error: "Description is required" },
            { status: 400 }
        );
    }

    try {
        const res = await fetch("http://223.106.234.3:11910/v1/chat-messages", {
            method: "POST",
            headers: {
                "Authorization": "Bearer app-aKnfbyHA8u7WxjAOHnyoY9pG", // 替换为实际的 API 密钥
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                inputs: {},
                query: description, // 使用用户输入的描述
                response_mode: "blocking",
                conversation_id: "", // 可以根据需要填写
                user: "abc-123", // 替换为实际的用户标识
                files: [
                    {
                        type: "image",
                        transfer_method: "remote_url",
                        url: "https://cloud.dify.ai/logo/logo-site.png", // 图像 URL
                    },
                ],
            }),
        });

        if (!res.ok) {
            throw new Error("请求失败");
        }

        const data = await res.json();
        return NextResponse.json(data); // 返回响应数据

    } catch (error) {
        return NextResponse.json(
            { error: "请求出错，请稍后再试" },
            { status: 500 }
        );
    }
}
