// supabaseStorage.ts - Supabase存储工具类
import { createClient } from '@supabase/supabase-js';

// 使用服务端密钥创建客户端，用于服务端操作
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

export class SupabaseStorageManager {
    private bucketName: string;

    constructor(bucketName: string = 'screenshots') {
        this.bucketName = bucketName;
    }

    /**
     * 确保存储桶存在
     */
    async ensureBucketExists(): Promise<void> {
        try {
            const { data: buckets, error: listError } = await supabase.storage.listBuckets();

            if (listError) {
                console.error('获取存储桶列表失败:', listError);
                throw listError;
            }

            const bucketExists = buckets?.some(bucket => bucket.name === this.bucketName);

            if (!bucketExists) {
                console.log(`创建存储桶: ${this.bucketName}`);
                const { error: createError } = await supabase.storage.createBucket(this.bucketName, {
                    public: true, // 设置为公开访问
                    allowedMimeTypes: ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'],
                    fileSizeLimit: 10485760 // 10MB限制
                });

                if (createError) {
                    console.error('创建存储桶失败:', createError);
                    throw createError;
                }
            }
        } catch (error) {
            console.error('确保存储桶存在时出错:', error);
            throw error;
        }
    }

    /**
     * 上传图片Buffer到Supabase Storage
     * @param imageBuffer 图片Buffer数据
     * @param fileName 文件名（可选，会自动生成）
     * @returns 公开访问URL
     */
    async uploadImage(imageBuffer: Buffer, fileName?: string): Promise<string> {
        try {
            // 确保存储桶存在
            await this.ensureBucketExists();

            // 生成文件名
            const finalFileName = fileName || this.generateFileName();
            const filePath = `screenshots/${finalFileName}`;

            console.log(`上传图片到 Supabase: ${filePath}`);

            // 上传文件
            const { data, error } = await supabase.storage
                .from(this.bucketName)
                .upload(filePath, imageBuffer, {
                    contentType: 'image/png',
                    upsert: true // 如果文件已存在则覆盖
                });

            if (error) {
                console.error('上传图片到Supabase失败:', error);
                throw error;
            }

            // 获取公开URL
            const { data: urlData } = supabase.storage
                .from(this.bucketName)
                .getPublicUrl(filePath);

            console.log(`图片上传成功，URL: ${urlData.publicUrl}`);
            return urlData.publicUrl;

        } catch (error) {
            console.error('上传图片时出错:', error);
            throw error;
        }
    }

    /**
     * 删除图片
     * @param filePath 文件路径
     */
    async deleteImage(filePath: string): Promise<void> {
        try {
            const { error } = await supabase.storage
                .from(this.bucketName)
                .remove([filePath]);

            if (error) {
                console.error('删除图片失败:', error);
                throw error;
            }

            console.log(`图片删除成功: ${filePath}`);
        } catch (error) {
            console.error('删除图片时出错:', error);
            throw error;
        }
    }

    /**
     * 生成唯一文件名
     */
    private generateFileName(): string {
        const timestamp = Date.now();
        const randomStr = Math.random().toString(36).substring(7);
        return `screenshot_${timestamp}_${randomStr}.png`;
    }

}