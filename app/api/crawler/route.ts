// api/crawler/route.ts
import { NextRequest } from 'next/server';
import {
    LongRequestHandler,
    generateTaskId,
    createTaskResponse,
    createErrorResponse
} from '@/_lib/longRequestHandler';
import { scrapeAndConvert } from './core';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { url, selector, componentType, componentName, description } = body;

        // 验证必要参数
        if (!url || !selector) {
            return createErrorResponse('缺少必要参数：url 和 selector', 400);
        }

        // 生成任务ID
        const taskId = generateTaskId('crawler');

        // 创建任务记录
        await LongRequestHandler.createTask(taskId, {
            url,
            selector,
            componentName,
            componentType,
            description,
        });

        // 异步执行爬取任务（不等待结果）
        executeScrapingTask(taskId, { url, selector, componentName }).catch(console.error);

        // 立即返回任务ID
        return Response.json(createTaskResponse(taskId));

    } catch (error) {
        console.error('创建爬取任务失败:', error);
        return createErrorResponse('创建任务失败');
    }
}

// 异步执行爬取任务
async function executeScrapingTask(
    taskId: string,
    params: { url: string; selector: string; componentName?: string }
) {
    const { url, selector, componentName } = params;

    await LongRequestHandler.executeLongTask(
        taskId,
        async (updateProgress) => {
            // 这里完全保持你原有的逻辑，只是添加进度更新
            updateProgress(10, '正在启动浏览器...');

            const result = await scrapeAndConvert(url, selector, componentName, updateProgress);

            updateProgress(90, '正在保存结果...');

            // 你可以在这里添加更多的进度更新点
            return {
                componentCode: result.componentCode,
                componentName: result.componentName,
                screenshotUrl: result.screenshotUrl,
                originalHtml: result.originalHtml,
                processSteps: result.processSteps,
            };
        }
    );
}