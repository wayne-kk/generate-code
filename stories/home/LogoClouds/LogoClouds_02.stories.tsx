// 自动生成的故事文件 - 请勿手动修改
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import LogoClouds_02 from '../../../aigcode-components/home/LogoClouds/LogoClouds_02';

const meta = {
  title: '组件/home/LogoClouds/LogoClouds_02',
  component: LogoClouds_02,
  parameters: {
    layout: 'fullscreen',
    componentSubtitle: 'home 类别的组件',
  },
} satisfies Meta<typeof LogoClouds_02>;

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
      <LogoClouds_02 />
    </div>
  ),
};
