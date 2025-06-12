import React from 'react';
import { Button } from '@ui/button';
import { Card, CardHeader, CardContent } from '@ui/card';
import { Badge } from '@ui/badge';
import { BarChart, Bar, XAxis, ResponsiveContainer } from 'recharts';

interface EarningReportsProps {
    title?: string;
    description?: string;
    amount?: string;
    percentage?: string;
    isPositive?: boolean;
    chartData?: Array<{
        name: string;
        value: number;
    }>;
    earningsData?: {
        amount: string;
        percentage: number;
    };
    profitData?: {
        amount: string;
        percentage: number;
    };
    expenseData?: {
        amount: string;
        percentage: number;
    };
}

const PricingComponent: React.FC<EarningReportsProps> = ({
    title = 'Earning Reports',
    description = 'Last 28 days',
    amount = '$1.468',
    percentage = '+4.2%',
    isPositive = true,
    chartData = [
        { name: 'Mo', value: 80 },
        { name: 'Thu', value: 65 },
        { name: 'We', value: 85 },
        { name: 'Th', value: 40 },
        { name: 'Fr', value: 55 },
        { name: 'Sa', value: 70 },
        { name: 'Su', value: 90 },
    ],
    earningsData = {
        amount: '$545.69',
        percentage: 85,
    },
    profitData = {
        amount: '$256.34',
        percentage: 60,
    },
    expenseData = {
        amount: '$74.19',
        percentage: 95,
    },
}) => {
    return (
        <Card className="bg-white dark:bg-gray-950 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <CardHeader className="flex flex-row items-start justify-between p-6 pb-2">
                <div>
                    <h3 className="text-base font-medium text-gray-900 dark:text-gray-100">{title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{description}</p>
                </div>
                <Button variant="outline" size="sm" className="h-9 px-3 py-2 text-sm">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2"
                    >
                        <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                        <path d="M12 10v6"></path>
                        <path d="m9 13 3-3 3 3"></path>
                    </svg>
                    Export
                </Button>
            </CardHeader>
            <CardContent className="p-6 pt-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">{amount}</h2>
                            <Badge
                                className={`${isPositive ? 'bg-green-500' : 'bg-red-500'} text-white px-2 py-0.5 text-xs font-medium rounded`}
                            >
                                {percentage}
                            </Badge>
                        </div>
                        <div className="h-[180px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={chartData} margin={{ top: 0, right: 0, left: 0, bottom: 5 }}>
                                    <XAxis
                                        dataKey="name"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#9CA3AF', fontSize: 12 }}
                                        dy={10}
                                    />
                                    <Bar dataKey="value" fill="url(#barGradient)" radius={[4, 4, 0, 0]} barSize={30} />
                                    <defs>
                                        <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#4B5563" stopOpacity={1} />
                                            <stop offset="100%" stopColor="#111827" stopOpacity={1} />
                                        </linearGradient>
                                    </defs>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                            <div className="flex justify-between items-center mb-2">
                                <div className="flex items-center gap-2">
                                    <span className="inline-flex items-center justify-center w-6 h-6 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                                        $
                                    </span>
                                    <span className="text-gray-800 dark:text-gray-200">Earnings</span>
                                </div>
                                <span className="font-medium text-gray-900 dark:text-gray-100">{earningsData.amount}</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-2">
                                <div
                                    className="bg-black dark:bg-white h-1.5 rounded-full"
                                    style={{ width: `${earningsData.percentage}%` }}
                                ></div>
                            </div>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                            <div className="flex justify-between items-center mb-2">
                                <div className="flex items-center gap-2">
                                    <span className="inline-flex items-center justify-center w-6 h-6 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M3 3v18h18"></path>
                                            <path d="m19 9-5 5-4-4-3 3"></path>
                                        </svg>
                                    </span>
                                    <span className="text-gray-800 dark:text-gray-200">Profit</span>
                                </div>
                                <span className="font-medium text-gray-900 dark:text-gray-100">{profitData.amount}</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-2">
                                <div
                                    className="bg-black dark:bg-white h-1.5 rounded-full"
                                    style={{ width: `${profitData.percentage}%` }}
                                ></div>
                            </div>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                            <div className="flex justify-between items-center mb-2">
                                <div className="flex items-center gap-2">
                                    <span className="inline-flex items-center justify-center w-6 h-6 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                        </svg>
                                    </span>
                                    <span className="text-gray-800 dark:text-gray-200">Expense</span>
                                </div>
                                <span className="font-medium text-gray-900 dark:text-gray-100">{expenseData.amount}</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-2">
                                <div
                                    className="bg-black dark:bg-white h-1.5 rounded-full"
                                    style={{ width: `${expenseData.percentage}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default PricingComponent;