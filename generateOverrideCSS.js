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

  // 添加 CSS 变量
  colorScales.forEach(scale => {
    const colorValue = skyColorDefaults[scale];
    css += `  --ai-theme-color-${scale}: ${colorValue};\n`;
  });

  // 添加字体变量
  css += `--custom-heading-font:  Lato, "ui-sans-serif", "system-ui", "-apple-system", "blinkmacsystemfont", "Segoe UI", "roboto", "Helvetica Neue", arial, "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n`;
  css += `--custom-body-font: Audiowide, "ui-sans-serif", "system-ui", "-apple-system", "blinkmacsystemfont", "Segoe UI", "roboto", "Helvetica Neue", arial, "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n`;

  css += '}\n';

  const colorSeries = ['red', 'sky', 'blue', 'green', 'yellow', 'purple', 'pink', 'orange', 'teal', 'indigo', 'cyan', 'lime', 'amber', 'rose'];

  colorSeries.forEach(color => {
    colorScales.forEach(scale => {
      // 背景色
      css += `.bg-${color}-${scale} { background-color: var(--ai-theme-color-${scale}) !important; }\n`;
      // 文本色
      css += `.text-${color}-${scale} { color: var(--ai-theme-color-${scale}) !important; }\n`;
      // 边框色
      css += `.border-${color}-${scale} { border-color: var(--ai-theme-color-${scale}) !important; }\n`;
    });
  });
  const colorSeries2 = [...colorSeries, 'gray']
  colorSeries2.forEach(color => {
    colorScales.forEach(scale => {
      // 渐变起点
      css += `.from-${color}-${scale} { --tw-gradient-from: var(--ai-theme-color-${scale}) !important; }\n`;
      // 渐变终点
      css += `.to-${color}-${scale} { --tw-gradient-to: var(--ai-theme-color-${scale}) !important; }\n`;
    });
  });

  fs.writeFileSync('app/custom-styles.css', css, 'utf8');
  console.log('Custom override CSS with from/to classes generated successfully!');
};

generateCSS();
