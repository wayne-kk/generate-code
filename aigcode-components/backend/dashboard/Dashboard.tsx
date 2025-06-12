import React from 'react';
import Axxx from './Axxx';
import Bxxx from './Bxxx';
import Cxxx from './Cxxx';
import Dxxx from './Dxxx';
import Txxx from './Txxx';
import Wxxx from './Wxxx';

// 子组件 props 类型定义
export type TxxxProps = {
  title?: string;
  data?: {
    month: string;
    chartData: { date: string; sales: number; returns: number }[];
  }[];
};

export type CxxxProps = {
  title?: string;
  amount?: string;
  percentageChange?: string;
  comparisonText?: string;
  pieChartData?: { name: string; value: number }[];
};

export type WxxxProps = {
  title?: string;
  amount?: string;
  percentage?: string;
  timeframe?: string;
  chartData?: { value: number }[];
};

export type AxxxProps = {
  title?: string;
  transactions?: {
    time: string;
    content: string;
    link?: { text: string; href: string };
    dotColor: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  }[];
};

export type BxxxProps = {
  title?: string;
  products?: {
    id: string;
    assignee: { name: string; role: string };
    productName: string;
    priority: 'Low' | 'Medium' | 'High' | 'Critical';
    budget: string;
  }[];
};

// Dashboard 组件 props 类型
export type DashboardProps = {
  txxxProps?: TxxxProps;
  cxxxProps?: CxxxProps;
  wxxxProps?: WxxxProps;
  axxxProps?: AxxxProps;
  bxxxProps?: BxxxProps;
};

// Txxx 默认 props
const defaultTxxxProps: TxxxProps = {
  title: 'Sales Overview1',
  data: [
    {
      month: 'March 2025',
      chartData: [
        { date: '16/08', sales: 340, returns: 270 },
        { date: '17/08', sales: 380, returns: 240 },
        { date: '18/08', sales: 290, returns: 320 },
        { date: '19/08', sales: 340, returns: 210 },
        { date: '20/08', sales: 380, returns: 240 },
        { date: '21/08', sales: 170, returns: 300 },
        { date: '22/08', sales: 350, returns: 270 },
        { date: '23/08', sales: 380, returns: 240 },
        { date: '24/08', sales: 320, returns: 340 },
        { date: '25/08', sales: 480, returns: 240 },

      ],
    },
    {
      month: 'April 2025',
      chartData: [
        { date: '16/08', sales: 300, returns: 200 },
        { date: '17/08', sales: 320, returns: 210 },
        { date: '18/08', sales: 250, returns: 260 },
        { date: '19/08', sales: 310, returns: 180 },
        { date: '20/08', sales: 350, returns: 200 },
        { date: '21/08', sales: 150, returns: 250 },
        { date: '22/08', sales: 320, returns: 220 },
        { date: '23/08', sales: 340, returns: 210 },
      ],
    },
  ],
};

// Cxxx 默认 props
const defaultCxxxProps: CxxxProps = {
  title: '年度分析',
  amount: '¥36,358',
  percentageChange: '+9%',
  comparisonText: '较去年',
  pieChartData: [
    { name: '2023', value: 3800 },
    { name: '2024', value: 4999 },
    { name: '2025', value: 36358 },
  ],
};

// Wxxx 默认 props
const defaultWxxxProps: WxxxProps = {
  title: '月度收入',
  amount: '¥6,820',
  percentage: '+9%',
  timeframe: '较去年',
  chartData: [
    { value: 43.5 },
    { value: 19.72 },
    { value: 46.4 },
    { value: 34.8 },
    { value: 51.04 },
    { value: 24.36 },
    { value: 46.4 },
  ],
};

// Axxx 默认 props
const defaultAxxxProps: AxxxProps = {
  title: 'Recent Transactions',
  transactions: [
    {
      time: '09:30 am',
      content: 'Payment received from John Doe of $385.90',
      dotColor: 'primary',
    },
    {
      time: '10:00 am',
      content: 'New sale recorded',
      link: {
        text: '#ML-3467',
        href: 'https://modernize-nextjs-free.vercel.app/',
      },
      dotColor: 'secondary',
    },
    {
      time: '12:00 am',
      content: 'Payment was made of $64.95 to Michael',
      dotColor: 'success',
    },
    {
      time: '09:30 am',
      content: 'New sale recorded',
      link: {
        text: '#ML-3467',
        href: 'https://modernize-nextjs-free.vercel.app/',
      },
      dotColor: 'warning',
    },
    {
      time: '09:30 am',
      content: 'New arrival recorded',
      dotColor: 'error',
    },
    {
      time: '12:00 am',
      content: 'Payment Received',
      dotColor: 'success',
    },
  ],
};

// Bxxx 默认 props
const defaultBxxxProps: BxxxProps = {
  title: 'Product Performance',
  products: [
    {
      id: '1',
      assignee: {
        name: 'Sunil Joshi',
        role: 'Web Designer',
      },
      productName: 'Elite Admin',
      priority: 'Low',
      budget: '$3.9k',
    },
    {
      id: '2',
      assignee: {
        name: 'Andrew McDownland',
        role: 'Project Manager',
      },
      productName: 'Real Homes WP Theme',
      priority: 'Medium',
      budget: '$24.5k',
    },
    {
      id: '3',
      assignee: {
        name: 'Christopher Jamil',
        role: 'Project Manager',
      },
      productName: 'MedicalPro WP Theme',
      priority: 'High',
      budget: '$12.8k',
    },
    {
      id: '4',
      assignee: {
        name: 'Nirav Joshi',
        role: 'Frontend Engineer',
      },
      productName: 'Hosting Press HTML',
      priority: 'Critical',
      budget: '$2.4k',
    },
  ],
};

function Dashboard({
  txxxProps = defaultTxxxProps,
  cxxxProps = defaultCxxxProps,
  wxxxProps = defaultWxxxProps,
  axxxProps = defaultAxxxProps,
  bxxxProps = defaultBxxxProps,
}: DashboardProps) {
  return (
    <div className="w-full min-h-screen bg-[#f8fafc] p-4 flex flex-col gap-4">
      {/* 上半部分 */}
      <div className="flex flex-col lg:flex-row gap-4 items-stretch">
        {/* 左侧大图表 */}
        <div className="flex-1 min-w-0 flex flex-col">
          <Txxx {...txxxProps} />
        </div>
        {/* 右侧上下两个小卡片 */}
        <div className="flex flex-col justify-center items-center gap-4 w-full max-w-[360px] min-w-[300px] flex-shrink-0">
          <Cxxx {...cxxxProps} />
          <Wxxx {...wxxxProps} />
        </div>
      </div>
      {/* 中间部分 */}
      <div className="flex flex-col flex-grow lg:flex-row gap-4 justify-between ">
        <div className="flex flex-col flex-grow max-w-[420px] w-full flex-shrink-0">
          <Axxx {...axxxProps} />
        </div>
        <div className="flex flex-col h-full min-w-0 w-full">
          <Bxxx {...bxxxProps} />
        </div>
      </div>
      {/* 下半部分 */}
      <div>
        <Dxxx />
      </div>
    </div>
  );
}

export default Dashboard; 