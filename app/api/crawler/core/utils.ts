// 检查内容长度并截断或分块
export function truncateContent(content: string, maxLength: number = 18000): string[] {
    if (content.length <= maxLength) {
        return [content];
    }

    // 如果内容过长，尝试智能分割
    const chunks: string[] = [];
    let currentChunk = '';
    const lines = content.split('\n');

    for (const line of lines) {
        if ((currentChunk + line).length > maxLength && currentChunk.length > 0) {
            chunks.push(currentChunk.trim());
            currentChunk = line + '\n';
        } else {
            currentChunk += line + '\n';
        }
    }

    if (currentChunk.trim()) {
        chunks.push(currentChunk.trim());
    }

    return chunks.length > 0 ? chunks : [content.substring(0, maxLength)];
}

