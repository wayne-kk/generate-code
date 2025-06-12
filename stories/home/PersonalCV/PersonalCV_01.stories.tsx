// 自动生成的故事文件 - 请勿手动修改
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import PersonalCV_01 from '../../../aigcode-components/home/PersonalCV/PersonalCV_01';

const meta = {
  title: '组件/home/PersonalCV/PersonalCV_01',
  component: PersonalCV_01,
  parameters: {
    layout: 'fullscreen',
    componentSubtitle: 'home 类别的组件',
  },
} satisfies Meta<typeof PersonalCV_01>;

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
      <PersonalCV_01 />
    </div>
  ),
};
