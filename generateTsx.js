const fs = require('fs');
const path = require('path');

// 模拟接收多个组件函数字符串
const functionStrings = [];


// 固定的导入语句
const fixedImports = {
  React: `import React from 'react'`,
  EditableText: `import EditableText from '../@base/EditableText'`,
  EditableButton: `import EditableButton from '../@base/EditableButton'`,
  EditableImg: `import EditableImg from '../@base/EditableImg'`,
  EditableIcon: `import EditableIcon from '../@base/EditableIcon'`,
  Marquee: `import Marquee from '../@base/Marquee'`,
  Overflow: `import Overflow from '../@base/Overflow'`,
  Carousel: `import Carousel from '../@base/Carousel'`,
  motion: `import { motion } from 'framer-motion'`,
  AnimatePresence: `import { AnimatePresence } from 'framer-motion'`,
  throttle: `import throttle from 'lodash.throttle'`,
  AnimateInView: `import AnimateInView from '../@base/AnimateInView'`,
}


// 根据传入的默认值生成类型接口
function generateTypeFromDefaultValue(defaultValue) {
  if (Array.isArray(defaultValue)) {
    if (defaultValue.length > 0 && typeof defaultValue[0] === 'object') {
      // 递归生成数组元素的类型
      const itemType = generateTypeFromDefaultValue(defaultValue[0]);
      return `${itemType}[]`;
    }
    return `${typeof defaultValue[0]}[]`;
  }

  if (typeof defaultValue === 'object' && defaultValue !== null) {
    const fields = Object.keys(defaultValue).map(key => {
      return `${key}: ${generateTypeFromDefaultValue(defaultValue[key])}`;
    }).join('; ');

    return `{ ${fields} }`;
  }

  return typeof defaultValue;
}

// 自动生成类型接口
function generateInterface(funcStr, props) {
  const funcName = funcStr.match(/function (\w+)/)[1].split('_')[0]; // 提取函数名
  const typeInterfaces = Object.keys(props).map(key => {
    const type = generateTypeFromDefaultValue(props[key]);
    return `  ${key}: ${type};`;
  }).join('\n');

  const interfaceName = `I${funcName}Props`;

  return `
export interface ${interfaceName} {
${typeInterfaces}
}
  `;
}

// 批量生成 TSX 文件
async function generateFiles() {
  // 请求接口获取函数字符串
  const functionStrings = []
  const nameList = []
  const fetchBlocks = async () => {
    try {
      const res = await fetch(`https://wayne.beer/api/aigcode-blocks`);
      const data = await res.json();
      if (res.ok) {
        for (const block of data.data) {
          functionStrings.push(block.code)
          nameList.push(block.name)
        }
      }
    } catch (err) {
      console.log('Error fetching blocks:', err);
    }
  };
  await fetchBlocks();
  functionStrings.forEach((funcStr, index) => {
    // 生成类型接口

    // 生成TSX文件内容
    const blockName = nameList[index];
    const fileName = `${blockName}.tsx`;
    const dirName = blockName.split('_')[0];

    const fileContent = funcStr;
    // 将内容写入文件
    // 获取文件路径
    const dirPath = path.join(__dirname, 'office_web_components', dirName);
    const filePath = path.join(dirPath, fileName);

    // 确保文件所在目录存在
    fs.mkdirSync(dirPath, { recursive: true });
    fs.writeFileSync(filePath, fileContent, 'utf8');
    console.log(`File ${fileName} generated.`);
  });
}

// 执行批量生成
generateFiles();
