// lib/longRequestHandler.ts
import { Redis } from '@upstash/redis';

const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL!,
    token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export interface TaskStatus {
    status: 'pending' | 'processing' | 'completed' | 'failed';
    progress?: number;
    message?: string;
    result?: any;
    error?: string;
    createdAt: number;
    updatedAt: number;
}

export class LongRequestHandler {
    private static readonly TASK_EXPIRY = 3600; // 1小时过期
    private static readonly MAX_RETRIES = 3;

    // 创建任务
    static async createTask(taskId: string, initialData?: any): Promise<void> {
        const taskStatus: TaskStatus = {
            status: 'pending',
            progress: 0,
            message: '任务已创建',
            createdAt: Date.now(),
            updatedAt: Date.now(),
            ...initialData,
        };

        await redis.setex(`task:${taskId}`, this.TASK_EXPIRY, JSON.stringify(taskStatus));
    }

    // 更新任务状态
    static async updateTask(
        taskId: string,
        updates: Partial<TaskStatus>
    ): Promise<void> {
        const current = await this.getTaskStatus(taskId);
        if (!current) return;

        const updated: TaskStatus = {
            ...current,
            ...updates,
            updatedAt: Date.now(),
        };

        await redis.setex(`task:${taskId}`, this.TASK_EXPIRY, JSON.stringify(updated));
    }

    // 获取任务状态
    static async getTaskStatus(taskId: string): Promise<TaskStatus | null> {
        const data = await redis.get(`task:${taskId}`);

        // 如果数据已经是对象形式，直接返回
        if (typeof data === 'object') {
            return data as TaskStatus;
        }

        // 如果数据是字符串形式，尝试解析
        try {
            return data ? JSON.parse(data as string) : null;
        } catch (error) {
            console.error(`解析 Redis 数据失败: ${data}`, error);
            return null; // 如果 JSON 解析失败，返回 null
        }
    }




    // 标记任务完成
    static async completeTask(taskId: string, result: any): Promise<void> {
        await this.updateTask(taskId, {
            status: 'completed',
            progress: 100,
            result,
            message: '任务完成',
        });
    }

    // 标记任务失败
    static async failTask(taskId: string, error: string): Promise<void> {
        await this.updateTask(taskId, {
            status: 'failed',
            error,
            message: '任务失败',
        });
    }

    // 删除任务
    static async deleteTask(taskId: string): Promise<void> {
        await redis.del(`task:${taskId}`);
    }

    // 执行长任务的通用包装器
    static async executeLongTask<T>(
        taskId: string,
        taskFunction: (updateProgress: (progress: number, message?: string) => Promise<void>) => Promise<T>,
        maxExecutionTime: number = 500000 // 50秒，留10秒缓冲
    ): Promise<T> {
        await this.updateTask(taskId, {
            status: 'processing',
            message: '任务开始执行',
        });

        const updateProgress = async (progress: number, message?: string) => {
            await this.updateTask(taskId, { progress, message });
        };

        try {
            // 设置超时保护
            const timeoutPromise = new Promise<never>((_, reject) => {
                setTimeout(() => reject(new Error('任务执行超时')), maxExecutionTime);
            });

            const result = await Promise.race([
                taskFunction(updateProgress),
                timeoutPromise,
            ]);

            await this.completeTask(taskId, result);
            return result;

        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : '未知错误';
            await this.failTask(taskId, errorMessage);
            throw error;
        }
    }
}

// 生成唯一任务ID的工具函数
export function generateTaskId(prefix: string = 'task'): string {
    return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

// API路由辅助函数
export function createTaskResponse(taskId: string) {
    return {
        success: true,
        taskId,
        message: '任务已创建，请使用taskId查询进度',
        pollingUrl: `/api/task-status/${taskId}`,
    };
}

export function createErrorResponse(message: string, status: number = 500) {
    return Response.json({ success: false, error: message }, { status });
}