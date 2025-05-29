// 增强的元素提取函数（支持图片地址转换）
export async function extractElementWithContext(page: any, selector: string) {
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
                return null;
            }

            const htmlElement = element as Element;
            const computedStyle = window.getComputedStyle(htmlElement);
            const boundingRect = htmlElement.getBoundingClientRect();

            // 处理图片地址转换
            function convertRelativeUrlsToAbsolute(htmlString: string): string {
                const parser = new DOMParser();
                const doc = parser.parseFromString(htmlString, 'text/html');

                // 处理 img 标签的 src 属性
                const images = doc.querySelectorAll('img[src]');
                images.forEach(img => {
                    const src = img.getAttribute('src');
                    if (src && !src.startsWith('http') && !src.startsWith('data:')) {
                        const absoluteUrl = new URL(src, window.location.href).href;
                        img.setAttribute('src', absoluteUrl);
                    }
                });

                // 处理背景图片
                const elementsWithBg = doc.querySelectorAll('[style*="background-image"]');
                elementsWithBg.forEach(el => {
                    const style = el.getAttribute('style') || '';
                    const bgImageMatch = style.match(/background-image:\s*url\(['"]?([^'")\s]+)['"]?\)/i);
                    if (bgImageMatch && bgImageMatch[1]) {
                        const bgUrl = bgImageMatch[1];
                        if (!bgUrl.startsWith('http') && !bgUrl.startsWith('data:')) {
                            const absoluteUrl = new URL(bgUrl, window.location.href).href;
                            const newStyle = style.replace(bgImageMatch[0], `background-image: url('${absoluteUrl}')`);
                            el.setAttribute('style', newStyle);
                        }
                    }
                });

                // 处理其他可能包含URL的属性
                const urlAttributes = ['href', 'action', 'formaction'];
                urlAttributes.forEach(attr => {
                    const elements = doc.querySelectorAll(`[${attr}]`);
                    elements.forEach(el => {
                        const url = el.getAttribute(attr);
                        if (url && !url.startsWith('http') && !url.startsWith('#') && !url.startsWith('javascript:') && !url.startsWith('mailto:')) {
                            const absoluteUrl = new URL(url, window.location.href).href;
                            el.setAttribute(attr, absoluteUrl);
                        }
                    });
                });

                return doc.documentElement.innerHTML;
            }

            // 获取原始HTML并转换相对地址
            const originalHtml = htmlElement.outerHTML;
            const convertedHtml = convertRelativeUrlsToAbsolute(originalHtml);

            // 提取图片信息（如果元素是图片或包含图片）
            const imageInfo = [];
            if (htmlElement.tagName.toLowerCase() === 'img') {
                const src = htmlElement.getAttribute('src');
                const absoluteSrc = src && !src.startsWith('http') && !src.startsWith('data:')
                    ? new URL(src, window.location.href).href
                    : src;

                imageInfo.push({
                    tagName: 'img',
                    originalSrc: src,
                    absoluteSrc: absoluteSrc,
                    alt: htmlElement.getAttribute('alt'),
                    width: htmlElement.getAttribute('width'),
                    height: htmlElement.getAttribute('height')
                });
            } else {
                // 查找子元素中的图片
                const childImages = htmlElement.querySelectorAll('img[src]');
                childImages.forEach(img => {
                    const src = img.getAttribute('src');
                    const absoluteSrc = src && !src.startsWith('http') && !src.startsWith('data:')
                        ? new URL(src, window.location.href).href
                        : src;

                    imageInfo.push({
                        tagName: 'img',
                        originalSrc: src,
                        absoluteSrc: absoluteSrc,
                        alt: img.getAttribute('alt'),
                        width: img.getAttribute('width'),
                        height: img.getAttribute('height')
                    });
                });
            }

            // 提取关键样式信息
            const styleInfo = {
                display: computedStyle.display,
                position: computedStyle.position,
                width: computedStyle.width,
                height: computedStyle.height,
                backgroundColor: computedStyle.backgroundColor,
                color: computedStyle.color,
                fontSize: computedStyle.fontSize,
                fontFamily: computedStyle.fontFamily,
                margin: computedStyle.margin,
                padding: computedStyle.padding,
                border: computedStyle.border,
                borderRadius: computedStyle.borderRadius,
                boxShadow: computedStyle.boxShadow,
                textAlign: computedStyle.textAlign,
                flexDirection: computedStyle.flexDirection,
                justifyContent: computedStyle.justifyContent,
                alignItems: computedStyle.alignItems,
                // 如果有背景图片，也转换为绝对地址
                backgroundImage: computedStyle.backgroundImage
            };

            return {
                html: convertedHtml, // 转换后的HTML，所有相对地址都变成绝对地址
                originalHtml: originalHtml, // 原始HTML
                tagName: htmlElement.tagName.toLowerCase(),
                className: htmlElement.className,
                id: htmlElement.id,
                computedStyle: styleInfo,
                boundingRect: {
                    width: boundingRect.width,
                    height: boundingRect.height,
                    top: boundingRect.top,
                    left: boundingRect.left
                },
                images: imageInfo, // 图片信息数组
                currentUrl: window.location.href // 当前页面地址
            };
        } catch (error) {
            console.error('提取元素时出错:', error);
            return null;
        }
    }, selector);
}

// 辅助函数：专门用于提取和转换图片地址
export async function extractImagesWithAbsoluteUrls(page: any, selector: string = 'img') {
    return await page.evaluate((selector: string) => {
        try {
            const images = document.querySelectorAll(selector);
            const imageData: any = [];

            images.forEach((img, index) => {
                const src = img.getAttribute('src');
                const absoluteSrc = src && !src.startsWith('http') && !src.startsWith('data:')
                    ? new URL(src, window.location.href).href
                    : src;

                imageData.push({
                    index,
                    originalSrc: src,
                    absoluteSrc: absoluteSrc,
                    alt: img.getAttribute('alt') || '',
                    width: (img as HTMLImageElement).naturalWidth || (img as HTMLImageElement).width,
                    height: (img as HTMLImageElement).naturalHeight || (img as HTMLImageElement).height,
                    className: img.className,
                    id: img.id
                });
            });

            return {
                images: imageData,
                currentUrl: window.location.href,
                totalCount: images.length
            };
        } catch (error) {
            console.error('提取图片时出错:', error);
            return null;
        }
    }, selector);
}