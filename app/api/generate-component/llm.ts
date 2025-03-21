export interface Message {
  role: "user" | "assistant";
  content: string;
}

export interface ModelResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Array<{
    message: Message;
    finish_reason: string;
    index: number;
  }>;
}

/**
 * 调用 AI 接口
 */
export const fetchModelResponse = async (
  model: string,
  messages: Message[]
): Promise<ModelResponse> => {
  const url = "https://aiapi.koudingvip.com/v1/chat/completions";
  const apiKey = "sk-faDwFJZcXuqK6MTGC18c34E6Ef48430b935f4e7a5f1b40Fb"; // 你的 API 密钥

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ model, messages }),
    });

    if (!response.ok) {
      throw new Error(`请求失败，状态码：${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("请求 AI 失败:", error);
    throw error;
  }
};

/**
 * 生成 UIDL 的消息列表
 */
export const generateUIDLPrompt = (
  description: string,
  uidlData: string
): Message[] => [
  { role: "user", content: "你好，模型！" },
  { role: "assistant", content: "你是一个生成 UIDL 的机器。" },
  {
    role: "user",
    content: `请基于以下参考 UIDL 结构，生成一个 ${description} 网站的 UIDL 结构：\n${uidlData}`,
  },
  {
    role: "user",
    content:
      "请确保网站包含以下内容：\n- 使用 Unsplash 图片（确保有效链接）\n- 嵌入来自 Twitter、YouTube 等的网页（确保有效链接）",
  },
  {
    role: "user",
    content:
      "⚠️ 重要：\n- **请只返回纯净的 JSON**，不要包含任何额外字符。\n- **新数据应能无缝追加到已有结果，返回的结果不影响 JSON 解析**。",
  },
];

/**
 * 递归拼接 JSON，确保完整性
 */
export const generateCompleteUIDL = async (
  description: string,
  uidlData: string
): Promise<any> => {
  let messages = generateUIDLPrompt(description, uidlData);
  let partialJSON = "";

  // while (true) {
  //   try {
  //     // 请求 AI 生成 JSON 片段
  //     const response = await fetchModelResponse("gpt-4o-2024-11-20", messages);
  //     const jsonChunk = response.choices[0]?.message.content.trim();

  //     if (!jsonChunk) {
  //       throw new Error("AI 返回的 JSON 为空");
  //     }

  //     // 累加 JSON 片段
  //     partialJSON += jsonChunk;
  //     console.log("partialJSON", partialJSON);
  //     // ✅ 解析 JSON，成功则返回
  //     return JSON.parse(partialJSON);
  //   } catch (error) {
  //     console.warn("JSON 解析失败，可能未完整，继续请求剩余部分...");

  //     // 追加新的提示，让 AI 继续生成剩余 JSON
  //     messages.push({
  //       role: "user",
  //       content: "JSON 还未闭合，请继续返回剩余部分。",
  //     });
  //   }
  // }
};

export default generateCompleteUIDL;
