const fs = require('fs');

// 色阶
const colorScales = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

// sky 色系的 OKLCH 默认值
const skyColorDefaults = {
  50: 'oklch(0.977 0.013 236.62)',
  100: 'oklch(0.951 0.026 236.824)',
  200: 'oklch(0.901 0.058 230.902)',
  300: 'oklch(0.828 0.111 230.318)',
  400: 'oklch(0.746 0.16 232.661)',
  500: 'oklch(0.685 0.169 237.323)',
  600: 'oklch(0.588 0.158 241.966)',
  700: 'oklch(0.5 0.134 242.749)',
  800: 'oklch(0.443 0.11 240.79)',
  900: 'oklch(0.391 0.09 240.876)',
  950: 'oklch(0.293 0.066 243.157)',
};

const generateCSS = () => {
  let css = ':root {\n';

  // 为每个色阶生成统一的 CSS 变量 --ai-theme-color-{scale}，这里以 sky 系列为例
  colorScales.forEach(scale => {
    const colorValue = skyColorDefaults[scale]; // 获取默认的 OKLCH 颜色
    css += `  --ai-theme-color-${scale}: ${colorValue};\n`; // 使用默认 OKLCH 颜色并加上 !important
  });

  css += '}\n';

  // 为每个颜色系列生成相应的背景色类、文本色类和边框色类，所有的色阶都指向统一的颜色变量
  ['red', 'sky', 'blue', 'green', 'yellow', 'purple', 'pink', 'orange', 'teal', 'indigo', 'cyan', 'lime', 'amber', 'rose'].forEach(color => {
    colorScales.forEach(scale => {
      // 为每个颜色系列的每个色阶生成对应的 Tailwind 背景色类
      css += `.bg-${color}-${scale} { background-color: var(--ai-theme-color-${scale}) !important; }\n`;
      // 为每个颜色系列的每个色阶生成对应的文本色类
      css += `.text-${color}-${scale} { color: var(--ai-theme-color-${scale}) !important; }\n`;
      // 为每个颜色系列的每个色阶生成对应的边框色类
      css += `.border-${color}-${scale} { border-color: var(--ai-theme-color-${scale}) !important; }\n`;
    });
  });

  // 将生成的 CSS 写入文件
  fs.writeFileSync('app/custom-styles.css', css, 'utf8');
  console.log('Custom override CSS generated successfully!');
};

generateCSS();
