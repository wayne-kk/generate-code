import { NextRequest } from 'next/server';
import { LongRequestHandler } from '@/_lib/longRequestHandler';

export async function GET(
    request: NextRequest,
    context: { params: Promise<{ taskId: string }> }
) {
    try {
        const { taskId } = await context.params;

        if (!taskId) {
            return new Response(JSON.stringify({
                success: false,
                message: '缺少任务ID',
            }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const taskStatus = await LongRequestHandler.getTaskStatus(taskId);

        if (!taskStatus) {
            return new Response(JSON.stringify({
                success: false,
                message: '任务不存在或已过期',
            }), {
                status: 404,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        return new Response(JSON.stringify({
            success: true,
            data: taskStatus,
        }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error) {
        console.error('查询任务状态失败:', error);
        return new Response(JSON.stringify({
            success: false,
            message: '查询任务状态失败',
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

export async function DELETE(
    request: NextRequest,
    context: { params: Promise<{ taskId: string }> }
) {
    try {
        const { taskId } = await context.params;

        if (!taskId) {
            return new Response(JSON.stringify({
                success: false,
                message: '缺少任务ID',
            }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        await LongRequestHandler.deleteTask(taskId);

        return new Response(JSON.stringify({
            success: true,
            message: '任务已删除',
        }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error) {
        console.error('删除任务失败:', error);
        return new Response(JSON.stringify({
            success: false,
            message: '删除任务失败',
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
