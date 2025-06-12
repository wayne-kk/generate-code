// 自动生成的故事文件 - 请勿手动修改
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import LogoClouds_01 from '../../../aigcode-components/home/LogoClouds/LogoClouds_01';

const meta = {
  title: '组件/home/LogoClouds/LogoClouds_01',
  component: LogoClouds_01,
  parameters: {
    layout: 'fullscreen',
    componentSubtitle: 'home 类别的组件',
  },
} satisfies Meta<typeof LogoClouds_01>;

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
      <LogoClouds_01 />
    </div>
  ),
};
