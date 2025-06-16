import type { Preview } from '@storybook/nextjs-vite'
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { withThemeByDataAttribute } from '@storybook/addon-themes';
// .storybook/preview.js
import '../app/globals.css'; // 导入包含 Tailwind 指令的主 CSS 文件

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  // BrowserRouter 装饰器，为所有 stories 提供路由上下文
  (Story: any) => (
    <BrowserRouter>
    <Story />
    </BrowserRouter>
  ),
  withThemeByDataAttribute({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
    attributeName: 'data-theme',
  }),
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;