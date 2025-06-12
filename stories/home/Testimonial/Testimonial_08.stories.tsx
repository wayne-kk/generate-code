// 自动生成的故事文件 - 请勿手动修改
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Testimonial_08 from '../../../aigcode-components/home/Testimonial/Testimonial_08';

const meta = {
  title: '组件/home/Testimonial/Testimonial_08',
  component: Testimonial_08,
  parameters: {
    layout: 'fullscreen',
    componentSubtitle: 'home 类别的组件',
  },
} satisfies Meta<typeof Testimonial_08>;

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
      <Testimonial_08 />
    </div>
  ),
};
