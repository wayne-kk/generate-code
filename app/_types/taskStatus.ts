export interface TaskStatus {
    id: string;
    status: 'pending' | 'processing' | 'completed' | 'failed';
    progress?: number;
    result?: any;
    error?: string;
    createdAt: number;
    updatedAt: number;
}
