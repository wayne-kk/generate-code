"use client"; // 确保组件在客户端渲染

import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";

const DescriptionSender = () => {
    const [description, setDescription] = useState<string>("");
    const [response, setResponse] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();


    const handleSubmit = async () => {
        if (!description) return;
        setLoading(true);
        try {
            const res = await fetch("/api/project/generate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ description }), // 传递用户输入的描述
            });

            if (!res.ok) throw new Error("请求失败");

            const data = await res.json();
            const { pageId } = JSON.parse(data.answer);

            setResponse(data.answer); // 假设返回的响应字段是 answer
            // 页面生成成功，跳转到生成的页面
            router.push(`/${pageId}`);
        } catch (error) {
            setResponse("请求出错，请稍后再试");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative flex justify-center items-center min-h-screen bg-gray-100">
            {/* Loading 遮罩层 */}
            {loading && (
                <div className="absolute inset-0 flex justify-center items-center z-50 bg-gray-800 bg-opacity-50">
                    {/* 随机运动的图标 */}
                    <div
                        className="text-white text-4xl animate-pulse"
                    >
                        🌀 {/* 这里可以换成你喜欢的图标 */}
                    </div>
                    <div className="text-white text-lg font-semibold animate-pulse">生成中，请稍等...</div>
                    <div
                        className="text-white text-4xl animate-pulse"
                    >
                        🌀 {/* 这里可以换成你喜欢的图标 */}
                    </div>
                </div>
            )}

            <div className="p-8 bg-white rounded-xl shadow-lg max-w-md w-full z-10">
                <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">生成网站描述</h2>
                <textarea
                    className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={4}
                    placeholder="请输入要生成的网站描述..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button
                    className="mt-6 w-full p-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={handleSubmit}
                    disabled={loading}
                >
                    {loading ? "提交中..." : "生成网站"}
                </button>

                {response && (
                    <div className="mt-6 p-4 border border-gray-300 rounded-md shadow-sm bg-gray-50">
                        <strong>响应:</strong> {response}
                    </div>
                )}
            </div>
        </div>
    );
};

export default DescriptionSender;
