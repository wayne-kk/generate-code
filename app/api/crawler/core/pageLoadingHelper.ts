import { Page } from "playwright";

/**
 * 等待页面完全加载，包括懒加载内容
 * @param page Playwright Page对象
 * @param options 配置选项
 */
export async function waitForPageFullyLoaded(page: Page, options: {
    maxWaitTime?: number;      // 最大等待时间（毫秒）
    scrollDelay?: number;      // 滚动延迟（毫秒）
    stabilityDelay?: number;   // 稳定性检查延迟（毫秒）
    maxScrollAttempts?: number; // 最大滚动尝试次数
} = {}) {
    const {
        maxWaitTime = 60000,
        scrollDelay = 1000,
        stabilityDelay = 2000,
        maxScrollAttempts = 10
    } = options;

    console.log('🔄 开始等待页面完全加载...');

    const startTime = Date.now();

    try {
        // 1. 等待基础DOM加载完成
        await page.waitForLoadState('domcontentloaded', { timeout: maxWaitTime });
        console.log('✅ DOM内容加载完成');

        // 2. 等待网络请求空闲
        await page.waitForLoadState('networkidle', { timeout: maxWaitTime });
        console.log('✅ 网络请求空闲');

        // 3. 等待所有图片加载完成
        await waitForImages(page);
        console.log('✅ 图片加载完成');

        // 4. 模拟滚动触发懒加载
        await triggerLazyLoading(page, { scrollDelay, maxScrollAttempts });
        console.log('✅ 懒加载内容触发完成');


        const totalTime = Date.now() - startTime;
        console.log(`🎉 页面完全加载完成，耗时: ${totalTime}ms`);

    } catch (error) {
        const totalTime = Date.now() - startTime;
        console.warn(`⚠️ 页面加载超时或出错，已等待: ${totalTime}ms`, error);
        // 不抛出错误，继续执行后续操作
    }
}

/**
 * 等待所有图片加载完成
 */
async function waitForImages(page: Page) {
    try {
        await page.evaluate(() => {
            return new Promise<void>((resolve) => {
                const images = Array.from(document.querySelectorAll('img'));
                let loadedCount = 0;
                const totalImages = images.length;

                if (totalImages === 0) {
                    resolve();
                    return;
                }

                const checkComplete = () => {
                    loadedCount++;
                    if (loadedCount >= totalImages) {
                        resolve();
                    }
                };

                images.forEach(img => {
                    if (img.complete && img.naturalHeight !== 0) {
                        checkComplete();
                    } else {
                        img.onload = checkComplete;
                        img.onerror = checkComplete; // 即使加载失败也继续
                    }
                });

                // 5秒超时保护
                setTimeout(resolve, 5000);
            });
        });
    } catch (error) {
        console.warn('图片加载检查失败:', error);
    }
}

/**
 * 模拟滚动触发懒加载
 */
async function triggerLazyLoading(page: Page, options: { scrollDelay: number; maxScrollAttempts: number }) {
    try {
        // 获取页面高度
        const pageHeight = await page.evaluate(() => document.body.scrollHeight);
        const viewportHeight = await page.evaluate(() => window.innerHeight);

        if (pageHeight <= viewportHeight) {
            console.log('页面内容较少，无需滚动');
            return;
        }

        // 逐步滚动到页面底部
        const scrollStep = Math.ceil(pageHeight / options.maxScrollAttempts);

        for (let i = 0; i <= options.maxScrollAttempts; i++) {
            const scrollPosition = Math.min(i * scrollStep, pageHeight);

            await page.evaluate((pos) => {
                window.scrollTo({ top: pos, behavior: 'smooth' });
            }, scrollPosition);

            // 等待懒加载内容触发
            await page.waitForTimeout(options.scrollDelay);

            // 检查是否有新的网络请求
            await page.waitForLoadState('networkidle', { timeout: 3000 }).catch(() => { });

            console.log(`📜 滚动进度: ${Math.min((i + 1) / options.maxScrollAttempts * 100, 100).toFixed(0)}%`);
        }

        // 滚动回顶部
        await page.evaluate(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        await page.waitForTimeout(500);

    } catch (error) {
        console.warn('懒加载触发失败:', error);
    }
}


/**
 * 智能等待特定元素完全加载（支持XPath和CSS选择器）
 * @param page Playwright Page对象
 * @param selector 目标元素选择器（支持XPath和CSS选择器）
 */
export async function waitForElementFullyLoaded(page: Page, selector: string) {
    try {
        console.log(`🎯 等待目标元素完全加载: ${selector}`);

        // 判断是否为XPath并等待元素存在
        await page.waitForSelector(`xpath=${selector}`, { timeout: 30000 });

        // 滚动到目标元素
        await page.evaluate((xpath) => {
            const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
            const element = result.singleNodeValue as Element;
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, selector);

        // 等待元素区域稳定
        await page.waitForTimeout(1000);

        // 再次检查元素及其子元素
        await page.evaluate((xpath) => {
            return new Promise<void>((resolve) => {
                const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
                const element = result.singleNodeValue as Element;

                if (!element) {
                    resolve();
                    return;
                }

                // 检查元素内的图片
                const images = element.querySelectorAll('img');
                let loadedImages = 0;

                if (images.length === 0) {
                    resolve();
                    return;
                }

                const checkImageLoad = () => {
                    loadedImages++;
                    if (loadedImages >= images.length) {
                        resolve();
                    }
                };

                images.forEach(img => {
                    if (img.complete && (img as HTMLImageElement).naturalHeight !== 0) {
                        checkImageLoad();
                    } else {
                        img.onload = checkImageLoad;
                        img.onerror = checkImageLoad;
                    }
                });

                // 3秒超时
                setTimeout(resolve, 3000);
            });
        }, selector);


        console.log('✅ 目标元素完全加载完成');

    } catch (error) {
        console.warn('目标元素加载检查失败:', error);
    }
}

/**
 * 使用XPath获取元素（辅助函数）
 * @param page Playwright Page对象
 * @param xpath XPath表达式
 * @returns 元素定位器
 */
export function getElementByXPath(page: Page, xpath: string) {
    return page.locator(`xpath=${xpath}`);
}

/**
 * 检查XPath元素是否存在
 * @param page Playwright Page对象
 * @param xpath XPath表达式
 * @returns 是否存在
 */
export async function isXPathElementExists(page: Page, xpath: string): Promise<boolean> {
    try {
        const element = page.locator(`xpath=${xpath}`);
        await element.waitFor({ timeout: 1000 });
        return true;
    } catch {
        return false;
    }
}