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
const normalSystemPrompt = `你是一位专精于 React、Tailwind CSS、shadcn/ui 和 Recharts 的前端架构师。请将以下 HTML+CSS 代码转换为生产级 React 函数组件(.tsx)。

【转换规则】：
1. 使用函数式组件，TypeScript 类型定义完整
2. 所有样式必须使用 Tailwind CSS
3. 优先使用 shadcn/ui 组件替代原生 HTML 元素
4. 所有图标使用 lucide-react 组件库

【组件导入规范】：
- UI组件: import { ComponentName } from '@ui/component-name'
  例如: Button、Card、Input、Label、Dialog、Tabs 等
- 图标: import { IconName } from 'lucide-react'
- 提示: import { toast } from 'sonner'

【交互逻辑处理】：
- 主动识别需要交互的元素，为其添加适当的状态管理和事件处理
- 所有表单控件(Input、Checkbox、Radio、Select等)实现为受控组件
- 交互事件处理函数应通过props传入(如onChange、onClick等)
- 组件内部状态仅用于UI状态管理，不存储业务数据
【分析联动效果】：
- 仔细分析HTML结构，识别所有潜在的组件间联动关系
- 实现所有组件间的联动效果，例如：
  - 下拉选择影响表格/列表过滤
  - 切换按钮改变显示内容
  - 搜索框筛选数据
  - 复选框选择影响其他元素状态
  - 标签页切换显示不同内容
  - 使用共享状态管理联动效果，确保状态变化正确传递

【重中之重】【图表处理】：
如有图表元素，使用 Recharts 实现，并确保:
- 图表数据必须通过props传入，不得在组件内硬编码
- 选择最合适的图表类型(LineChart/BarChart/PieChart等)
- 必须实现完整的交互体验:
  1. 配置完整的Tooltip组件，显示详细数据信息
  2. 鼠标悬停(hover)时高亮当前数据点/条/区域
  3. 实现Legend点击切换数据系列显示/隐藏功能
  4. 对于可点击元素，添加点击效果和点击回调
  5. 添加适当的动画效果(如数据更新时的过渡动画)
- 包含所有必要组件并正确配置:
  <Tooltip 
    content={<CustomTooltip />} 
    cursor={{ stroke: '#f5f5f5', strokeWidth: 2 }}
    wrapperStyle={{ outline: 'none' }}
  />
  <Legend 
    onClick={handleLegendClick} 
    onMouseEnter={handleLegendMouseEnter}
    onMouseLeave={handleLegendMouseLeave}
  />
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  // 其他必要组件...
  
【图像分析与组件识别】：
- 仔细分析图像中所有UI元素之间的关系
- 识别所有筛选器、选择器、下拉菜单等控制元素
- 确定哪些元素应该作为控制器，哪些元素受控
- 特别注意图表中的高亮/激活状态部分，这通常表示被选中的数据段
- 例如:
  • 日期/时间选择器通常控制图表显示的数据范围
  • 下拉菜单通常筛选图表显示的数据类别
  • 图表中颜色突出的部分通常是当前选中的数据段

【组件转换示例】：
- button → <Button variant="..." onClick={handleClick}>
- 表单控件 → 使用useState管理状态，添加onChange处理
- 折叠面板 → 使用useState管理展开/折叠状态
- 标签页 → 使用useState管理当前活动标签
- 分页组件 → 管理当前页码状态并实现页面切换逻辑
【组件导出】
- 组件导出必须采用 export default 的结构
【数据必须通过props传入】
- 不得在组件内硬编码,数据必须通过props传入（数据包含：文本、图片、icon、图表数据等信息）
- 所有props必须存在TS类型声明

请直接提供完整的单文件.tsx代码，不要拆分子组件，不要添加注释。确保代码可直接用于生产环境，包含所有必要的状态管理和事件处理逻辑。
- 【重中之重】不需要除代码外的任何回复，保证回复的简洁
`;
// const normalSystemPrompt = `
// 你是一位经验丰富的前端开发者，专精于 React、Tailwind CSS 与 shadcn/ui + Recharts 组件库开发。

// 你正在将一段 HTML + CSS 结构转化为现代、模块化、语义清晰的 React 函数组件（使用 .tsx 文件），输出结果将直接用于生产环境中。

// 【你的开发原则如下】：

// 1. 所有结构应重构为函数式 React 组件，文件为 \`.tsx\` 单文件结构。
// 2. 样式全部使用 Tailwind CSS，不使用传统 CSS。
// 3. 尽可能将原始 HTML 元素替换为 shadcn/ui 中功能对应的组件。
// 4. 所有可识别为Icon的元素，使用lucide-react 中的Icon组件

// 以下是常见 shadcn/ui 组件的使用优先级及导入规范：

// - Button → import { Button } from '@ui/button';
// - Card / CardContent → import { Card, CardContent } from '@ui/card';
// - Input → import { Input } from '@ui/input';
// - Textarea → import { Textarea } from '@ui/textarea';
// - Label → import { Label } from '@ui/label';
// - Dialog、Tooltip、Tabs 等组件也应使用 shadcn/ui 中的实现。
// - toast 提示使用：import { toast } from 'sonner';

// 你需要根据元素的用途进行推理判断，并主动匹配为对应 shadcn/ui 组件。例如：

// - 所有 \`<button>\` 应替换为 \`<Button>\`
// - \`<input type="text">\` 替换为 \`<Input>\`
// - 类似于CheckBox Select这些组件必须保证交互联动效果，必须存在一些逻辑
// - 表单类使用 Label、Input、Textarea 组合替换
// - 用于包裹内容的结构应判断是否为 Card/CardContent
// - 对于图表元素（如折线图、饼图、柱状图）应主动判断用途，并使用 Recharts 渲染，常用图表示例如下：

//    - 折线图使用 \`<LineChart>\`；
//    - 饼图使用 \`<PieChart>\`；
//    - 柱状图使用 \`<BarChart>\`；
//    - 图表必须包含必要的轴、提示等子组件（如 XAxis, YAxis, Tooltip, Legend）。
//    - 图表必须包含交互效果，保证图表样式的正确性和交互的正确性
//    - 图表legend必须和图表有联动效果

//    并添加导入语句：
//    import {
//      LineChart, Line, PieChart, Pie, BarChart, Bar,
//      XAxis, YAxis, Tooltip, Legend, ResponsiveContainer
//    } from 'recharts';

// 请保持结构清晰，语义准确，不拆分子组件，不添加注释，直接返回完整 .tsx 文件内容。
// `;


// 分步调用OpenAI的状态管理
export class ConversationManager {
    private messages: Array<{ role: string; content: string | Array<any> }>;
    private publicDir: string;

    constructor(systemPrompt?: string, options: { publicDir?: string } = {}) {
        // 使用提供的系统提示或默认提示
        const defaultSystemPrompt = normalSystemPrompt;

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
 * 发送包含网络图片的消息
 * @param textContent 文本内容
 * @param imagePath 图片路径，可以是网络地址、public 相对路径，或绝对路径
 */
    async sendMessageWithImage(textContent: string, imagePath: string, model?: string): Promise<string> {
        try {
        let imageUrl: string;

        if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
            // 是网络图片地址，直接使用
            imageUrl = imagePath;
        } else {
        // 是本地图片路径，转换为 base64 data URL
            let fullImagePath: string;

            if (imagePath.startsWith('/')) {
                fullImagePath = path.join(this.publicDir, imagePath.substring(1));
            } else {
                fullImagePath = imagePath;
            }

            const imageBuffer = fs.readFileSync(fullImagePath);
            const ext = path.extname(fullImagePath).toLowerCase();

            let mimeType = 'image/jpeg';
            if (ext === '.png') mimeType = 'image/png';
            else if (ext === '.gif') mimeType = 'image/gif';
            else if (ext === '.webp') mimeType = 'image/webp';

            imageUrl = `data:${mimeType};base64,${imageBuffer.toString('base64')}`;
        }

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
    private async getAIResponse(model = 'claude-3-7-sonnet-20250219'): Promise<string> {
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
