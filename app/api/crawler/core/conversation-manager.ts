import fs from 'fs';
import path from 'path';
import axios from 'axios';

// 创建 axios 实例
const openaiClient = axios.create({
    baseURL: process.env.OPENAI_API_BASE,
    headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
    }
});

const normalDes = `
你是一个专业的 React 和 Tailwind CSS 专家，精通将 HTML 和 CSS 转换为高质量的 React 组件。
你可以使用我们自定义的组件 EditableButton、EditableIcon、EditableImg、EditableText、Carousel 和 Marquee 来构建 React 组件。以下是这些组件的详细说明和示例：|
特别注意：
- 当 iconLibrary 为 FontAwesome 时，iconName 应使用完整的类名字符串，例如 'fa-solid fa-house'。
- 当 iconLibrary 为 Lucide 时，iconName 应仅为图标名称，例如 'search'。
- 自定义组件类型说明:
\`\`\`typescript
    interface EditableButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
        children?: React.ReactNode; // 子节点内容，可选
        className?: string; // className，可选
        style?: React.CSSProperties; // 内联样式，可选
        propKey?: string; // 自定义 key 属性
    }
    interface EditableIconProps {
        propKey?: string; // 可选的 propKey，用于标识
        icon?: string; // 可选的图标名称
        className?: string; // 可选的样式类名
        iconLibrary?: "FontAwesome" | "Lucide"; // 可选的图标库，默认FontAwesome 
        style?: React.CSSProperties; // 可选的内联样式
    }
    interface EditableImgProps {
        src: string; // 图片地址
        alt?: string; // 图片描述
        className?: string; // 自定义类名
        propKey: string; // 自定义 key 属性
        style?: CSSProperties; // 内联样式
    }
    interface EditableTextProps {
        className?: string; // 自定义类名
        propKey?: string; // 可选的 propKey，用于标识
        children?: string; // 初始文本内容
    }
    interface CarouselProps {
        autoplay?: boolean; // 是否自动播放
        cellAlign?: "left" | "center" | "right"; // 图片对齐方式
        wrapAround?: boolean; // 是否循环播放
        withoutControls?: boolean; // 是否隐藏控制箭头
        cellSpacing?: number; // 图片之间的间距
        slidesToShow?: number; // 每次显示的图片数量
        speed?: number; // 动画过渡时间（毫秒）
        children: ReactNode; // 子元素（图片列表）
    }
    interface MarqueeProps {
        children: React.ReactNode;
        speed?: number; // 滚动速度，单位为秒
        direction?: "left" | "right";
        className?: string;
        autoFill?: boolean; // 是否自动填充
    }
\`\`\`
你可以使用shadcn/ui组件库来构建React组件。以下是一些常用的shadcn/ui组件示例：
- Button、Card、Input、Textarea、Form、Select等。
特别注意:
- 优先使用自定义组件 EditableButton、EditableIcon、EditableImg、EditableText、Carousel 和 Marquee 来构建 React 组件。
- 自定义组件不满足时使用 shadcn/ui 组件库来构建 React 组件。
- 确保生成的代码符合 React 和 Tailwind CSS 的最佳实践。
`

// 分步调用OpenAI的状态管理
export class ConversationManager {
    private messages: Array<{ role: string; content: string | Array<any> }>;
    private publicDir: string;

    constructor(systemPrompt?: string, options: { publicDir?: string } = {}) {
        // 使用提供的系统提示或默认提示
        const defaultSystemPrompt = normalDes;

        this.messages = [
            {
                role: "system",
                content: systemPrompt || defaultSystemPrompt
            }
        ];

        // 设置 public 目录路径，默认为项目根目录下的 public 文件夹
        this.publicDir = options.publicDir || path.join(process.cwd(), 'public');
    }

    /**
     * 发送文本消息
     * @param content 文本内容
     */
    async sendMessage(content: string): Promise<string> {
        this.messages.push({
            role: "user",
            content: content
        });

        return this.getAIResponse();
    }

    /**
     * 发送包含图片的消息
     * @param textContent 文本内容
     * @param imagePath 图片路径，可以是 public 目录下的相对路径或绝对路径
     */
    async sendMessageWithImage(textContent: string, imagePath: string, model?: string): Promise<string> {
        try {
            // 处理图片路径
            let fullImagePath: string;

            // 如果路径以 '/' 开头，视为 public 目录下的相对路径
            if (imagePath.startsWith('/')) {
                fullImagePath = path.join(this.publicDir, imagePath.substring(1));
            } else {
                // 否则视为绝对路径
                fullImagePath = imagePath;
            }

            // 读取图片文件
            const imageBuffer = fs.readFileSync(fullImagePath);

            // 转换为 base64
            const base64Image = imageBuffer.toString('base64');

            // 根据文件扩展名确定 MIME 类型
            const ext = path.extname(fullImagePath).toLowerCase();
            let mimeType = 'image/jpeg'; // 默认

            if (ext === '.png') mimeType = 'image/png';
            else if (ext === '.gif') mimeType = 'image/gif';
            else if (ext === '.webp') mimeType = 'image/webp';

            const imageUrl = `data:${mimeType};base64,${base64Image}`;

            // 构建包含图片的消息内容
            const content = [
                { type: "text", text: textContent },
                {
                    type: "image_url",
                    image_url: { url: imageUrl }
                }
            ];

            this.messages.push({
                role: "user",
                content: content
            });

            return this.getAIResponse(model);
        } catch (error) {
            console.error('图片处理失败:', error);
            const errorMessage = (error instanceof Error) ? error.message : String(error);
            throw new Error(`图片处理失败: ${errorMessage}`);
        }
    }

    /**
     * 获取AI响应
     * @private
     */
    private async getAIResponse(model = 'gpt-4o'): Promise<string> {
        try {
            const response = await openaiClient.post('/chat/completions', {
                model: model || "claude-3-7-sonnet-20250219", // "claude-3-7-sonnet-20250219", // 使用支持图像的模型
                messages: this.messages,
                temperature: 0.1,
            });

            const aiResponse = response.data.choices[0].message.content.trim();

            // 将AI的回复也加入对话历史
            this.messages.push({
                role: "assistant",
                content: aiResponse
            });

            return aiResponse;
        } catch (error) {
            console.error('OpenAI API 调用失败:', error);
            throw new Error('AI 服务调用失败');
        }
    }

    /**
     * 清除对话历史，只保留系统提示
     */
    clearConversation(): void {
        const systemMessage = this.messages[0];
        this.messages = [systemMessage];
    }

    /**
     * 获取当前对话历史
     */
    getMessages(): Array<{ role: string; content: string | Array<any> }> {
        return this.messages;
    }
}
