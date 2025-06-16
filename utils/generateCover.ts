import supabase from '@/lib/supabase';
import { v4 as uuidv4 } from 'uuid';
import puppeteer from 'puppeteer-core';
import chromium from '@sparticuz/chromium';

export async function generateCover(url: string): Promise<string> {
    // 启动 Puppeteer（适配 Vercel 环境）
    const browser = await puppeteer.launch({
        args: chromium.args,
        executablePath: await chromium.executablePath(),
        headless: chromium.headless,
        defaultViewport: { width: 1440, height: 820 },
    });

    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });

    // 等待主容器和额外时间
    await page.waitForSelector('#preview-viewport', { timeout: 10000 });
    // 等待字体加载
    await page.evaluate(async () => {
        await (document as any).fonts.ready;
    });


    const screenshotBuffer = await page.screenshot({ type: 'png' });
    await browser.close();

    const filename = `${uuidv4()}.png`;

    const { data, error } = await supabase.storage
        .from('covers')
        .upload(filename, screenshotBuffer, {
            contentType: 'image/png',
            upsert: true,
        });

    if (error) {
        throw new Error(`Failed to upload image: ${error.message}`);
    }

    const { data: publicUrlData } = supabase
        .storage
        .from('covers')
        .getPublicUrl(filename);

    return publicUrlData.publicUrl;
}
