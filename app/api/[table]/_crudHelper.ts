// /api/_lib/crudHelper.ts
import { tableConfig, TableName } from './_tableConfig';

// 校验表名是否合法
export function getTableConfig(table: string) {
    if (table in tableConfig && tableConfig[table as TableName].allow) {
        return tableConfig[table as TableName];
    }
    throw new Error('非法的表名');
}

// 校验必填字段
export function checkRequiredFields(table: string, body: any) {
    const config = getTableConfig(table);
    for (const k of config.requiredFields) {
        if (body[k] === undefined || body[k] === null) return k;
    }
    return null;
}
