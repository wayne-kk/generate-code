// 简化的CSS分析函数
export async function analyzeElement(page: any, selector: string) {
    return await page.evaluate((selector: string) => {
        try {
            let targetElement = null;

            const result = document.evaluate(
                selector,
                document,
                null,
                XPathResult.FIRST_ORDERED_NODE_TYPE,
                null
            );
            targetElement = result.singleNodeValue;

            if (!targetElement || targetElement.nodeType !== Node.ELEMENT_NODE) {
                return { componentType: 'unknown', hasFlexbox: false, hasGrid: false };
            }

            const htmlElement = targetElement as Element;
            const computedStyle = window.getComputedStyle(htmlElement);

            const analysis = {
                hasFlexbox: computedStyle.display === 'flex',
                hasGrid: computedStyle.display === 'grid',
                componentType: 'unknown'
            };

            // 组件类型推断
            const tagName = htmlElement.tagName.toLowerCase();
            if (tagName === 'button' || htmlElement.className.includes('btn')) {
                analysis.componentType = 'button';
            } else if (tagName === 'form' || htmlElement.querySelector('input, textarea')) {
                analysis.componentType = 'form';
            } else if (htmlElement.querySelector('img') || htmlElement.className.includes('card')) {
                analysis.componentType = 'card';
            } else if (analysis.hasFlexbox || analysis.hasGrid) {
                analysis.componentType = 'layout';
            }

            return analysis;
        } catch (error) {
            console.error('CSS分析时出错:', error);
            return { componentType: 'unknown', hasFlexbox: false, hasGrid: false };
        }
    }, selector);
}