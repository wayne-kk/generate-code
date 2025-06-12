// 自动生成的故事文件 - 请勿手动修改
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import BlogGrid_02 from '../../../aigcode-components/home/BlogGrid/BlogGrid_02';

const meta = {
  title: '组件/home/BlogGrid/BlogGrid_02',
  component: BlogGrid_02,
  parameters: {
    layout: 'fullscreen',
    componentSubtitle: 'home 类别的组件',
  },
} satisfies Meta<typeof BlogGrid_02>;

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
      <BlogGrid_02 />
    </div>
  ),
};
