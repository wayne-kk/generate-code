// 自动生成的故事文件 - 请勿手动修改
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Roadmap_05 from '../../../aigcode-components/home/Roadmap/Roadmap_05';

const meta = {
  title: '组件/home/Roadmap/Roadmap_05',
  component: Roadmap_05,
  parameters: {
    layout: 'fullscreen',
    componentSubtitle: 'home 类别的组件',
  },
} satisfies Meta<typeof Roadmap_05>;

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
      <Roadmap_05 />
    </div>
  ),
};
