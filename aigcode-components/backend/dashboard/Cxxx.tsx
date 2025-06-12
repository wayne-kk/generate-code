import React, { useState } from 'react';
import { Card, CardContent } from '@ui/card';
import { PieChart, Pie, ResponsiveContainer, Cell, Tooltip } from 'recharts';

interface PricingComponentProps {
    title?: string;
    amount?: string;
    percentageChange?: string;
    comparisonText?: string;
    pieChartData?: Array<{ name: string; value: number }>;
}

const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm shadow-lg">
                <span className="font-medium text-gray-800">{payload[0].name}</span>
                <span className="ml-2 text-gray-600">{payload[0].value}</span>
            </div>
        );
    }
    return null;
};

function PricingComponent({
    title = '年度分析',
    amount = '¥36,358',
    percentageChange = '+9%',
    comparisonText = '较去年',
    pieChartData = [
        { name: '2023年', value: 3800 },
        { name: '2024年', value: 4999 },
        { name: '2025年', value: 36358 },
    ],
}: PricingComponentProps) {
    const COLORS = ['#3B82F6', '#60A5FA', '#93C5FD'];
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <Card className="shadow-lg rounded-xl bg-white w-full max-w-md hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
                <div className="mb-6">
                    <h5 className="text-lg font-semibold text-gray-800">{title}</h5>
                </div>
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-7">
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">{amount}</h3>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="bg-emerald-50 rounded-full p-1.5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#10B981"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M7 7l10 10"></path>
                                    <path d="M16 7l-9 0l0 9"></path>
                                </svg>
                            </div>
                            <span className="text-sm font-medium text-emerald-600">{percentageChange}</span>
                            <span className="text-sm text-gray-500">{comparisonText}</span>
                        </div>
                        <div className="flex flex-col gap-3">
                            {pieChartData.map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className={`rounded-full w-4 h-4 ${activeIndex === index ? 'ring-2 ring-offset-2 ring-blue-500' : ''}`} 
                                         style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                                    <span className="text-sm text-gray-600">{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-span-5 flex items-center justify-center">
                        <div className="w-full h-[120px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={pieChartData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={30}
                                        outerRadius={45}
                                        paddingAngle={2}
                                        dataKey="value"
                                        stroke="none"
                                        activeIndex={activeIndex ?? undefined}
                                        onMouseEnter={(_, index) => setActiveIndex(index)}
                                        onMouseLeave={() => setActiveIndex(null)}
                                    >
                                        {pieChartData.map((_, index) => (
                                            <Cell
                                                key={`cell-${index}`}
                                                fill={COLORS[index % COLORS.length]}
                                                className="transition-all duration-300"
                                                style={{
                                                    filter: activeIndex === index ? 'brightness(1.1)' : 'none',
                                                    transform: activeIndex === index ? 'scale(1.05)' : 'scale(1)',
                                                }}
                                            />
                                        ))}
                                    </Pie>
                                    <Tooltip content={<CustomTooltip />} />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export default PricingComponent;