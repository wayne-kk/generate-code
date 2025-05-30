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

        return outputPath;
    } catch (error) {
        console.error(`通过 XPath 截图失败:`, error);
        throw error;
    }
}

// 截图函数返回Buffer
export async function screenshotByXPathToBuffer(page: any, xpath: string): Promise<Buffer> {
    try {
        // 等待元素存在
        await page.waitForSelector(`xpath=${xpath}`, { timeout: 10000 });

        // 获取元素
        const element = await page.$(`xpath=${xpath}`);
        if (!element) {
            console.error(`未找到匹配 XPath "${xpath}" 的元素`);
        }

        // 截图到Buffer
        const screenshotBuffer = await element.screenshot({
            type: 'png',
        });

        return screenshotBuffer;
    } catch (error) {
        console.error('截图失败:', error);
        throw error;
    }
}