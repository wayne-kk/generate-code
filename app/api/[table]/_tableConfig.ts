// /api/_tableConfig.ts
export const tableConfig = {
    aigcode_blocks: {
        allow: true,
        requiredFields: ['id', 'name', 'code'],
        nameCheck: true, // 新增时需要查重
    },
    backend_blocks: {
        allow: true,
        requiredFields: ['id', 'name', 'code'],
        nameCheck: false,
    },
    spare_blocks: {
        allow: true,
        requiredFields: ['id', 'name'],
        nameCheck: false,
    }
    // 以后加表只用往这里加
};

export type TableName = keyof typeof tableConfig;
