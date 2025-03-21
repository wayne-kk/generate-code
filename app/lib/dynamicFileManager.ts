const fs = require("fs");
const path = require("path");
import { CompiledComponent } from '@teleporthq/teleport-types'

// 生成随机文件名
const generateFileName = (name: string, fileType: string = 'js') => `${name}.${fileType}`;

// **保存组件**
export async function saveComponentFiles(reactComponent: CompiledComponent) {
    const baseDir = path.join(process.cwd(), "template/generated");
    if (!fs.existsSync(baseDir)) fs.mkdirSync(baseDir, { recursive: true });

    let componentFile = "";
    let cssFile = "";
    console.log('reactComponent', reactComponent)
    for (const file of reactComponent.files) {
        const fileName = generateFileName(file.name, file.fileType);
        const filePath = path.join(baseDir, fileName);

        fs.writeFileSync(filePath, file.content, "utf8");

        if (file.fileType === "js") componentFile = `/generated/${fileName}`;
        if (file.fileType === "css") cssFile = `/generated/${fileName}`;
    }

    return { componentFile, cssFile };
}

