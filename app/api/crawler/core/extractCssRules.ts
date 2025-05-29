export async function extractCssRules(page: any, selector: string) {
    return await page.evaluate((selector: string) => {
        try {
            let element = null;

            const result = document.evaluate(
                selector,
                document,
                null,
                XPathResult.FIRST_ORDERED_NODE_TYPE,
                null
            );
            element = result.singleNodeValue;

            if (!element || element.nodeType !== Node.ELEMENT_NODE) {
                return { inlineStyle: '', cssRules: [] };
            }

            const htmlElement = element as Element;
            const inlineStyle = htmlElement.getAttribute('style') || '';

            const cssRules: any = [];
            const extractCssRules = (element: Element) => {
                for (const sheet of document.styleSheets) {
                    try {
                        if (!sheet.cssRules) continue;
                        for (const rule of sheet.cssRules) {
                            if (
                                rule instanceof CSSStyleRule &&
                                element.matches(rule.selectorText)
                            ) {
                                cssRules.push(rule.cssText);
                            }
                        }
                    } catch (error) {
                        console.error('无法访问样式表规则:', error);
                    }
                }
            };
            extractCssRules(htmlElement);

            return {
                inlineStyle,
                cssRules
            };
        } catch (error) {
            console.error('提取CSS规则时出错:', error);
            return { inlineStyle: '', cssRules: [] };
        }
    }, selector);
}
