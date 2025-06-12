import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@ui/card';
import { RadialBarChart, RadialBar, PolarGrid, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { Users, Briefcase, Wallet } from 'lucide-react';

type StatCard = {
    label: string;
    value: string | number;
    growth: string;
    isGrowthPositive: boolean;
    icon: React.ReactNode;
};

type PricingComponentProps = {
    targetPercentage?: number;
    statCards?: StatCard[];
};

const defaultStatCards: StatCard[] = [
    {
        label: 'Total Customers',
        value: 1890,
        growth: '+10.4%',
        isGrowthPositive: true,
        icon: <Users className="size-5 text-gray-500 dark:text-gray-400" />,
    },
    {
        label: 'Total Deals',
        value: '1,02,890',
        growth: '-0.8%',
        isGrowthPositive: false,
        icon: <Briefcase className="size-5 text-gray-500 dark:text-gray-400" />,
    },
    {
        label: 'Total Revenue',
        value: '$435,578',
        growth: '+20.1%',
        isGrowthPositive: true,
        icon: <Wallet className="size-5 text-gray-500 dark:text-gray-400" />,
    },
];

const PricingComponent: React.FC<PricingComponentProps> = ({
    targetPercentage = 48,
    statCards = defaultStatCards,
}) => {
    const data = [
        {
            name: 'Target',
            value: targetPercentage,
            fill: 'var(--primary)',
        },
    ];

    return (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 w-full">
            {/* 目标卡片 */}
            <Card className="flex flex-col rounded-xl border border-gray-200 shadow-none bg-white dark:bg-card dark:border-gray-800">
                <CardHeader className="px-6 py-4 pb-0">
                    <CardTitle className="font-semibold font-display text-xl text-gray-900 dark:text-gray-100">
                        Your target is incomplete
                    </CardTitle>
                </CardHeader>
                <CardContent className="px-6 py-4">
                    <div className="flex items-center gap-3">
                        <div className="flex-shrink-0">
                            <div className="w-14 h-14 relative">
                                <ResponsiveContainer width="100%" height="100%">
                                    <RadialBarChart
                                        cx="50%"
                                        cy="50%"
                                        innerRadius="80%"
                                        outerRadius="100%"
                                        data={data}
                                        startAngle={0}
                                        endAngle={360}
                                    >
                                        <PolarGrid />
                                        <PolarRadiusAxis tick={false} axisLine={false} />
                                        <RadialBar background dataKey="value" cornerRadius={30} fill="var(--primary)" />
                                        <text
                                            x="50%"
                                            y="50%"
                                            textAnchor="middle"
                                            dominantBaseline="middle"
                                            className="fill-foreground font-bold text-xs"
                                        >
                                            %{targetPercentage}
                                        </text>
                                    </RadialBarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                        <p className="text-muted-foreground text-sm">
                            You have completed <span className="text-orange-500 font-normal">{targetPercentage}%</span> of the given
                            target, you can also check your status
                        </p>
                    </div>
                </CardContent>
            </Card>
            {/* 统计卡片循环渲染 */}
            {statCards.map((card, idx) => (
                <Card
                    key={card.label}
                    className="flex flex-col rounded-xl border border-gray-200 shadow-none bg-white dark:bg-card dark:border-gray-800"
                >
                    <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                            <div className="flex flex-col gap-2">
                                <p className="text-muted-foreground text-sm mb-1">{card.label}</p>
                                <h4 className="font-display text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-1">
                                    {card.value}
                                </h4>
                                <div className="text-muted-foreground text-sm">
                                    <span className={card.isGrowthPositive ? 'text-green-600 font-normal' : 'text-red-600 font-normal'}>
                                        {card.growth}
                                    </span>{' '}
                                    from last month
                                </div>
                            </div>
                            <div className="flex-shrink-0">
                                <div className="bg-gray-100 dark:bg-gray-800 flex size-12 items-center justify-center rounded-full border border-gray-200 dark:border-gray-700">
                                    {card.icon}
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default PricingComponent;