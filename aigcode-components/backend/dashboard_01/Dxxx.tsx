import React from 'react';
import { RadialBar, RadialBarChart, Legend } from "recharts";
import { WifiIcon } from 'lucide-react';
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from '@ui/chart'

interface ChartDataItem {
    desktop: number;
    mobile: number;
    email: number;
    messageger: number;
    wechat: number;
    [key: string]: number; // 允许其他动态属性
}

interface PricingComponentProps {
    title?: string;
    totalTickets?: number;
}

const chartData: [ChartDataItem] = [
    { desktop: 1260, mobile: 570, email: 300, messageger: 150, wechat: 100 },
];

const barKeys = [
    { key: 'desktop', color: '#1a56db', label: 'Desktop' },
    { key: 'mobile', color: '#22d3ee', label: 'Mobile' },
    { key: 'email', color: '#f97316', label: 'Email' },
    { key: 'messageger', color: '#f59e0b', label: 'Messageger' },
    { key: 'wechat', color: '#84cc16', label: 'Wechat' },
];

export default function PricingComponent({ title = 'Ticket By Channels', totalTickets }: PricingComponentProps) {
    // 统计总数
    const totalVisitors = chartData.reduce((sum, item) => sum + item.desktop + item.mobile, 0);
    // 控制每个bar的显示/隐藏
    const [visible, setVisible] = React.useState(() => barKeys.map(() => true));

    // 处理legend点击
    const handleLegendClick = (e: any) => {
        const idx = barKeys.findIndex(bar => bar.label === e.value);
        if (idx !== -1) {
            setVisible(prev => {
                const next = [...prev];
                next[idx] = !next[idx];
                return next;
            });
        }
    };

    return (
        <div className="max-w-8xl mx-auto w-full px-6 tablet:px-10 desktop:px-14 py-4 laptop:col-span-1 bg-white">
            <section className="flex h-full flex-col gap-2 ju">
                <h2 className="text-base flex items-center text-[#020817] font-medium">
                    <WifiIcon className="w-[24px] h-[24px] mr-2 text-[#1a56db]" />
                    {title}
                </h2>
                <div className="relative flex min-h-64 flex-grow flex-col justify-center">
                    <ChartContainer
                        config={{}}
                        className='w-full h-[250px]'
                    >
                        <RadialBarChart
                            data={chartData}
                            cx="50%"
                            cy="100%"
                            innerRadius={120}
                            outerRadius={180}
                            barSize={16}
                            startAngle={180}
                            endAngle={0}
                        >
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent hideLabel />}
                            />
                            {barKeys.map((bar, idx) => visible[idx] && (
                                <RadialBar
                                    key={bar.key}
                                    dataKey={bar.key}
                                    stackId="a"
                                    cornerRadius={5}
                                    fill={bar.color}
                                    className="stroke-transparent stroke-2"
                                />
                            ))}

                        </RadialBarChart>
                    </ChartContainer>
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-0 flex flex-col items-center pointer-events-none">
                        <p className="text-[#64748b] text-sm font-normal">Total Visitors</p>
                        <p className="text-[#020817] text-3xl font-semibold mt-1">{totalVisitors.toLocaleString()}</p>
                    </div >
                    <Legend
                        layout="horizontal"
                        iconType="circle"
                        verticalAlign="bottom"
                        align="center"
                        iconSize={10}
                        wrapperStyle={{ cursor: 'pointer', bottom: '-60px', left: '50%', translate: 'calc(calc(1/2 * 100%) /* 50% */ * -1) 0' }}
                        onClick={handleLegendClick}
                        payload={barKeys.map((bar, idx) => ({
                            value: bar.label,
                            type: 'circle',
                            color: bar.color,
                            id: bar.key,
                            inactive: !visible[idx],
                        }))}
                        formatter={(value: string, entry: any, idx: number) => (
                            <span
                                className={`text-x font-medium select-none ${!visible[idx] ? 'text-gray-400 ' : 'text-[#1a56db]'}`}
                                style={{ userSelect: 'none', cursor: 'pointer' }}
                            >
                                {value}
                            </span>
                        )}
                    />
                </div>
            </section >
        </div >
    );
}
