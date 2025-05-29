import path from "path";
import { chromium } from "playwright";
import { analyzeElement } from "./analyzeElement";
import { ConversationManager } from "./conversation-manager";
import { extractElementWithContext } from "./extractElementWithContext";
import { screenshotByXPath } from "./screenshotByXPath";
import { truncateContent } from "./utils";
import fs from "fs";
import prettier from 'prettier';

// 主要的抓取和转换逻辑
export async function scrapeAndConvert(url: string, selector: string, componentName?: string) {
    console.log(`🔍 正在抓取 ${url}...`);
    console.log(`🎯 目标选择器: ${selector}`);

    let browser;
    const processSteps = {
        step1: '',
        step2: '',
        step3: ''
    };

    try {
        // 启动浏览器
        browser = await chromium.launch({
            headless: true,
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-blink-features=AutomationControlled',
                '--disable-features=VizDisplayCompositor'
            ]
        });

        const context = await browser.newContext({
            viewport: { width: 1920, height: 1080 },
            userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            javaScriptEnabled: true,
            ignoreHTTPSErrors: true,
        });

        const page = await context.newPage();

        console.log('🚀 开始加载页面...');
        await page.goto(url, {
            waitUntil: 'domcontentloaded',
            timeout: 60000
        });

        console.log('📄 页面加载完成，开始分析页面结构...');

        // 提取目标元素
        const extractedElement = await extractElementWithContext(page, selector);
        if (!extractedElement) {
            throw new Error('无法提取目标元素');
        }

        // 生成截图
        const imgPath = path.join(process.cwd(), 'public', 'img.png');
        await screenshotByXPath(page, selector, imgPath);

        // 简化的CSS分析
        const analysis = await analyzeElement(page, selector);
        console.log(`🥖分析结果:`, analysis);
        // 生成组件名称
        const elementId = extractedElement.id ? extractedElement.id.replace(/[^a-zA-Z0-9]/g, '') : '';
        const elementClass = extractedElement.className ?
            extractedElement.className.split(' ')[0].replace(/[^a-zA-Z0-9]/g, '') : '';

        const componentBaseName = componentName || elementId || elementClass || extractedElement.tagName || 'Component';
        const finalComponentName = componentBaseName.charAt(0).toUpperCase() + componentBaseName.slice(1) + 'Component';

        // 保存HTML文件
        const htmlPath = path.join(process.cwd(), 'public', 'extractedElement.html');
        fs.writeFileSync(htmlPath, extractedElement.html.trim(), 'utf8');

        // 创建对话管理器
        const conversation = new ConversationManager();
        const html = truncateContent(extractedElement.html, 13000)[0]

        // 第一步：基于HTML生成基础React结构
        console.log(`🚀 第一步：生成基础React结构...`);
        const step1Prompt = `
我需要将以下HTML转换为React组件的基础结构。

组件名称: ${finalComponentName}
组件类型: ${analysis.componentType}

HTML结构:
\`\`\`html
${html}
\`\`\`

计算样式信息:
- 布局类型: ${analysis.hasFlexbox ? 'Flexbox' : analysis.hasGrid ? 'Grid' : 'Normal'}
- 显示方式: ${extractedElement.computedStyle.display}
- 尺寸: ${extractedElement.computedStyle.width} x ${extractedElement.computedStyle.height}

要求：
1. 【保持结构】完全保留HTML的DOM结构和层级
2. 【转换语法】将HTML转换为有效的JSX语法
3. 【提取数据】识别并提取动态数据作为props（文本内容、图片源、链接等）
4. 【基础清理】移除无用的属性，保留重要的class和style
5. 【函数组件】使用TypeScript函数组件格式
6. 【函数参数默认值】所有props的默认值必须在函数参数中定义，格式如：\`function Component({ title = 'Default', count = 0 }: Props) {}\`
7. 【禁止.defaultProps】严禁使用Component.defaultProps的形式

请生成基础的React组件代码。
`;

        const step1Response = await conversation.sendMessage(step1Prompt);
        processSteps.step1 = step1Response;

        // 第二步：基于截图生成带有Tailwind CSS的 React 组件
        console.log(`🎨 第二步：基于截图生成完整的Tailwind CSS样式...`);
        const step2Prompt = `
现在基于截图，为之前的React组件添加完整的Tailwind CSS样式，生成最终可用的组件。

组件分析：
- 组件类型: ${analysis.componentType}
- 布局特征: ${analysis.hasFlexbox ? 'Flexbox布局' : analysis.hasGrid ? 'Grid布局' : '常规布局'}

计算样式参考：
- 显示方式: ${extractedElement.computedStyle.display}
- 尺寸: ${extractedElement.computedStyle.width} x ${extractedElement.computedStyle.height}
- 背景色: ${extractedElement.computedStyle.backgroundColor}
- 文字颜色: ${extractedElement.computedStyle.color}
- 字体大小: ${extractedElement.computedStyle.fontSize}
- 边距: ${extractedElement.computedStyle.margin}
- 内边距: ${extractedElement.computedStyle.padding}
- 边框: ${extractedElement.computedStyle.border}
- 阴影: ${extractedElement.computedStyle.boxShadow}

要求：
1. 【视觉还原】严格按照截图的视觉效果进行样式设计
2. 【Tailwind优先】优先使用Tailwind CSS类实现样式
3. 【完整样式】包含所有必要的样式：布局、颜色、字体、间距、边框、阴影等
4. 【响应式设计】添加响应式类（sm:, md:, lg:）确保在各种屏幕下正常显示
5. 【交互效果】添加hover、focus等交互状态（如果需要）
6. 【组件完整性】生成完整可用的最终组件代码
7. 【代码优化】确保代码简洁、可读性强
8. 【去掉自定义class名称】去掉所有自定义的class，使用Tailwind CSS类替代
9. 【保留tailwindCSS class名称】保留所有的tailwindCSS class名称
10. 【函数参数默认值】必须使用函数参数默认值，禁止使用.defaultProps

代码格式要求：
- ✅ 正确：\`const MyComponent: React.FC<Props> = ({ title = 'Default Title', count = 0 }) => {// 组件逻辑};export default MyComponent;\`
- ❌ 错误：\`Component.defaultProps = { title: 'Default' }\`

# 不需要任何解释 只返回完整的最终React组件代码。
`;

        const step2Response = await conversation.sendMessageWithImage(step2Prompt, '/img.png', 'claude-3-7-sonnet-20250219');
        processSteps.step2 = step2Response;

        // 提取第二步的代码用于第三步
        const step2CodeBlockRegex = /```(?:jsx|tsx|js|javascript|react|typescript)?\s*([\s\S]*?)```/g;
        const step2CodeBlocks = [];
        let step2Match;
        while ((step2Match = step2CodeBlockRegex.exec(step2Response)) !== null) {
            step2CodeBlocks.push(step2Match[1].trim());
        }

        const step2ComponentCode = step2CodeBlocks.length > 0
            ? step2CodeBlocks.join('\n\n')
            : step2Response;

        console.log(`step2ComponentCode:`, step2ComponentCode);
        // 第三步：基于第二步的React代码和截图进行精细化修正
        console.log(`🔧 第三步：对React代码进行精细化修正...`);
        const step3Prompt = `
请对以下React组件代码进行精细化修正和优化，确保与截图的视觉效果完全一致。

当前React组件代码:
\`\`\`tsx
${step2ComponentCode}
\`\`\`

组件信息:
- 组件名称: ${finalComponentName}
- 组件类型: ${analysis.componentType}
- 原始尺寸: ${extractedElement.computedStyle.width} x ${extractedElement.computedStyle.height}

修正要求：
1. 【像素级还原】对比截图，精确调整所有视觉细节（颜色、间距、尺寸、阴影等）
2. 【布局修正】检查并修正元素的对齐、定位、间距问题
3. 【字体优化】确保字体大小、粗细、行高与截图完全匹配
4. 【颜色校准】精确匹配背景色、文字色、边框色等所有颜色
5. 【间距调整】微调margin、padding确保元素间距与截图一致
6. 【圆角和边框】检查并修正border-radius、border等细节
7. 【阴影效果】如果截图中有阴影，确保box-shadow效果准确
8. 【响应式完善】优化响应式断点，确保在不同屏幕尺寸下都美观
9. 【交互状态】完善hover、focus、active等交互状态的样式
10. 【代码清理】移除冗余代码，优化class组合，提高代码质量
11. 【类型安全】确保TypeScript类型定义完整准确
12. 【可访问性】添加必要的aria属性和语义化标签
13. 【函数参数默认值】必须将所有的props默认值定义在函数参数中，禁止使用.defaultProps形式

代码格式要求：
- ✅ 正确格式：\`const MyComponent: React.FC<Props> = ({ title = 'Default Title', count = 0 }) => {// 组件逻辑};export default MyComponent;\`
- ❌ 禁止格式：\`MyComponent.defaultProps = { title: 'Default Title', count: 0 }\`
- 所有props都必须在函数参数的解构赋值中提供默认值
- 如果原代码中存在.defaultProps，必须将其转换为函数参数默认值并删除.defaultProps

特别注意：
- 仔细观察截图中的每个细节，包括微妙的颜色变化、渐变效果
- 确保文本的对齐方式、行间距完全匹配
- 注意元素的层级关系和z-index
- 检查是否有被遗漏的视觉元素或效果
- 确保所有props默认值都在函数参数中定义

# 只返回修正后的完整React组件代码，不需要解释。
`;

        const step3Response = await conversation.sendMessageWithImage(step3Prompt, '/img.png', 'claude-3-7-sonnet-20250219');
        processSteps.step3 = step3Response;

        // 提取最终代码（优先使用第三步的结果）
        const codeBlockRegex = /```(?:jsx|tsx|js|javascript|react|typescript)?\s*([\s\S]*?)```/g;
        const codeBlocks = [];
        let match;
        while ((match = codeBlockRegex.exec(step3Response)) !== null) {
            codeBlocks.push(match[1].trim());
        }

        const componentCode = codeBlocks.length > 0
            ? codeBlocks.join('\n\n')
            : step3Response;

        // 格式化代码
        let formattedCode;
        try {
            formattedCode = await prettier.format(componentCode, {
                parser: 'typescript',
                printWidth: 120,
                tabWidth: 2,
                singleQuote: true,
                trailingComma: 'es5',
                bracketSpacing: true,
                jsxBracketSameLine: false,
            });
        } catch (error) {
            console.warn(`格式化 ${finalComponentName} 失败:`, error);
            formattedCode = componentCode;
        }

        console.log('✅ 三步转换流程完成!');
        console.log('📝 流程总结:');
        console.log('   第一步: HTML → 基础React结构');
        console.log('   第二步: 基础结构 + 截图 → Tailwind样式组件');
        console.log('   第三步: React代码 + 截图 → 精细化修正优化');

        return {
            componentCode: formattedCode,
            componentName: finalComponentName,
            originalHtml: extractedElement.html,
            processSteps
        };

    } finally {
        if (browser) {
            await browser.close();
        }
    }
}