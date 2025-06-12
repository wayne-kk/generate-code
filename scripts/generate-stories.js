// scripts/generate-stories.js
const fs = require('fs');
const path = require('path');
const glob = require('glob');

// 配置
const CONFIG = {
    // 组件目录（相对于脚本所在目录）
    componentsDir: '../aigcode-components',
    // 故事文件输出目录（相对于脚本所在目录）
    storiesOutputDir: '../stories',
    // 故事文件标题前缀
    storyTitlePrefix: '组件',
    // 要忽略的文件模式
    ignorePatterns: ['**/*.test.*', '**/*.stories.*', '**/*.d.ts', '**/*.spec.*']
};

// 确保输出目录存在
function ensureDirectoryExists(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
}

// 清空输出目录
function cleanOutputDirectory(dir) {
    if (fs.existsSync(dir)) {
        fs.rmSync(dir, { recursive: true, force: true });
    }
    fs.mkdirSync(dir, { recursive: true });
}

// 从文件路径中提取组件信息
function extractComponentInfo(filePath, componentsDir) {
    // 获取相对于组件目录的路径
    const relativePath = path.relative(componentsDir, filePath);
    const parts = relativePath.split(path.sep);

    const fileName = parts[parts.length - 1];
    const componentName = fileName.replace(/\.\w+$/, '');

    // 提取相对路径中的目录结构（除了文件名）
    const directories = parts.slice(0, -1);

    return {
        name: componentName,
        directories, // 保存完整的目录结构
        category: directories.length > 0 ? directories[0] : '未分类', // 第一级目录作为主分类
        relativeDirPath: directories.join('/'), // 用于创建对应的输出目录
        filePath
    };
}

// 生成组件故事文件内容
function generateStoryFileContent(componentInfo, relativePath) {
    // 构建标题路径，保持目录结构
    const titlePath = componentInfo.directories.length > 0
        ? `${componentInfo.directories.join('/')}/${componentInfo.name}`
        : componentInfo.name;

    return `// 自动生成的故事文件 - 请勿手动修改
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ${componentInfo.name} from '${relativePath}';

const meta = {
  title: '${CONFIG.storyTitlePrefix}/${titlePath}',
  component: ${componentInfo.name},
  parameters: {
    layout: 'fullscreen',
    componentSubtitle: '${componentInfo.category} 类别的组件',
  },
} satisfies Meta<typeof ${componentInfo.name}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => (
    <div style={{ 
      padding: '20px',
      maxWidth: '100%',
      border: '1px solid #eee',
      borderRadius: '8px',
      height: '700px'
    }}>
      <${componentInfo.name} />
    </div>
  ),
};
`;
}

// 主函数
function main() {
    // 获取脚本所在目录的绝对路径
    const scriptDir = __dirname;

    // 将相对路径转换为绝对路径
    const componentsDir = path.resolve(scriptDir, CONFIG.componentsDir);
    const outputDir = path.resolve(scriptDir, CONFIG.storiesOutputDir);

    console.log(`扫描组件目录: ${componentsDir}`);
    console.log(`输出故事文件到: ${outputDir}`);

    // 清空输出目录
    cleanOutputDirectory(outputDir);

    // 查找所有组件文件
    const componentFiles = glob.sync(`${componentsDir}/**/*.tsx`, {
        ignore: CONFIG.ignorePatterns
    });

    console.log(`找到 ${componentFiles.length} 个组件文件`);

    // 按分类整理组件
    const componentsByCategory = {};
    const processedComponents = [];

    componentFiles.forEach(filePath => {
        const componentInfo = extractComponentInfo(filePath, componentsDir);

        // 确保分类存在
        if (!componentsByCategory[componentInfo.category]) {
            componentsByCategory[componentInfo.category] = [];
        }

        // 将组件添加到分类中
        componentsByCategory[componentInfo.category].push(componentInfo);
        processedComponents.push(componentInfo);

        // 创建与源文件相同的目录结构
        const outputDirPath = componentInfo.relativeDirPath
            ? path.join(outputDir, componentInfo.relativeDirPath)
            : outputDir;

        ensureDirectoryExists(outputDirPath);

        // 计算故事文件路径
        const storyFilePath = path.join(outputDirPath, `${componentInfo.name}.stories.tsx`);

        // 计算组件文件相对于故事文件的路径
        const relativeComponentPath = path.relative(
            path.dirname(storyFilePath),
            filePath
        ).replace(/\\/g, '/').replace(/\.tsx$/, '');

        // 生成故事文件内容
        const storyContent = generateStoryFileContent(componentInfo, relativeComponentPath);

        // 写入故事文件
        fs.writeFileSync(storyFilePath, storyContent);

        console.log(`已生成: ${componentInfo.relativeDirPath ? componentInfo.relativeDirPath + '/' : ''}${componentInfo.name}.stories.tsx`);
    });

    // 输出统计信息
    console.log('\n生成完成!');
    console.log(`总共处理了 ${processedComponents.length} 个组件`);
    console.log(`分类数量: ${Object.keys(componentsByCategory).length}`);
    Object.entries(componentsByCategory).forEach(([category, components]) => {
        console.log(`  - ${category}: ${components.length} 个组件`);
    });
}

// 运行主函数
main();
