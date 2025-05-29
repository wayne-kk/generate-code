/**
 * 通过 XPath 定位元素并截图
 * @param page Playwright 页面实例
 * @param xpath 要截图元素的 XPath 表达式
 * @param outputPath 截图保存路径
 */
export async function screenshotByXPath(page: any, xpath: any, outputPath: any) {
    try {
        // 定位元素
        const element = await page.$(`xpath=${xpath}`);

        if (!element) {
            console.error(`未找到匹配 XPath "${xpath}" 的元素`);
            return null;
        }

        // 截取元素截图
        await element.screenshot({
            path: outputPath || `element-screenshot-${Date.now()}.png`,
        });

        console.log(`元素截图已保存至: ${outputPath}`);
        return outputPath;
    } catch (error) {
        console.error(`通过 XPath 截图失败:`, error);
        throw error;
    }
}

