import React from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader } from '@ui/card';
import { Badge } from '@ui/badge';

interface PricingComponentProps {
    totalEarning?: string;
    percentage?: string;
    percentageValue?: string;
    chartData?: Array<{
        name: string;
        desktop: number;
        mobile: number;
    }>;
    totalRevenue?: string;
    totalRevenueSubtitle?: string;
    totalRevenueAmount?: string;
    totalSales?: string;
    totalSalesSubtitle?: string;
    totalSalesAmount?: string;
}

function PricingComponent({
    totalEarning = 'Total Earning',
    percentage = '83%',
    percentageValue = '24.2%',
    chartData = [
        { name: 'Jan', desktop: 54.87, mobile: 23.6 },
        { name: 'Feb', desktop: 89.98, mobile: 59 },
        { name: 'Mar', desktop: 69.92, mobile: 35.4 },
        { name: 'Apr', desktop: 21.53, mobile: 56.05 },
        { name: 'May', desktop: 61.66, mobile: 38.35 },
        { name: 'Jun', desktop: 63.13, mobile: 41.3 },
    ],
    totalRevenue = 'Total Revenue',
    totalRevenueSubtitle = 'Client Payment',
    totalRevenueAmount = '+$126',
    totalSales = 'Total Sales',
    totalSalesSubtitle = 'Refund',
    totalSalesAmount = '-$98',
}: PricingComponentProps) {
    return (
        <div className='w-[400px]'>
            <Card className="flex flex-col gap-6 py-6 h-full bg-white dark:bg-gray-950 shadow-sm rounded-xl">
                <CardHeader className="grid grid-cols-[1fr_auto] items-start gap-1.5 px-6 pb-0">
                    <div className="text-muted-foreground text-sm">{totalEarning}</div>
                    <div className="self-start justify-self-end">
                        <Badge
                            variant="outline"
                            className="text-green-600 flex items-center gap-0.5 px-2 py-0.5 font-medium bg-transparent border border-green-100 rounded-md"
                        >
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
                                className="size-3"
                            >
                                <path d="m18 15-6-6-6 6"></path>
                            </svg>
                            {percentageValue}
                        </Badge>
                    </div>
                    <div className="flex items-center mt-0.5">
                        <div className="text-4xl font-bold text-gray-900 dark:text-gray-100">{percentage}</div>
                    </div>
                </CardHeader>
                <CardContent className="px-6 pt-4">
                    <div className="w-full aspect-[21/9] mb-2">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={chartData} margin={{ top: 0, right: 0, left: 0, bottom: 5 }}>
                                <XAxis
                                    dataKey="name"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fill: '#6b7280', fontSize: 12 }}
                                    dy={8}
                                />
                                <Tooltip
                                    cursor={{ fill: 'rgba(229, 231, 235, 0.3)' }}
                                    contentStyle={{
                                        backgroundColor: 'white',
                                        border: '1px solid #e5e7eb',
                                        borderRadius: '6px',
                                        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                                    }}
                                />
                                <Bar dataKey="desktop" fill="#1f2937" radius={[0, 0, 5, 5]} stackId="stack" barSize={50} />
                                <Bar dataKey="mobile" fill="#4b5563" radius={[5, 5, 0, 0]} stackId="stack" barSize={50} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="mt-6 space-y-3">
                        <div className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                            <div className="bg-gray-100 dark:bg-gray-800 flex size-10 items-center justify-center rounded-md border border-gray-200 dark:border-gray-700">
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
                                    className="size-4 text-gray-600 dark:text-gray-400"
                                >
                                    <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"></path>
                                    <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"></path>
                                    <path d="m2 16 6 6"></path>
                                    <circle cx="16" cy="9" r="2.9"></circle>
                                    <circle cx="6" cy="5" r="3"></circle>
                                </svg>
                            </div>
                            <div>
                                <div className="font-medium text-gray-900 dark:text-gray-100">{totalRevenue}</div>
                                <div className="text-muted-foreground text-xs">{totalRevenueSubtitle}</div>
                            </div>
                            <div className="ms-auto text-sm font-medium text-green-600">{totalRevenueAmount}</div>
                        </div>
                        <div className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                            <div className="bg-gray-100 dark:bg-gray-800 flex size-10 items-center justify-center rounded-md border border-gray-200 dark:border-gray-700">
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
                                    className="size-4 text-gray-600 dark:text-gray-400"
                                >
                                    <line x1="12" x2="12" y1="2" y2="22"></line>
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                </svg>
                            </div>
                            <div>
                                <div className="font-medium text-gray-900 dark:text-gray-100">{totalSales}</div>
                                <div className="text-muted-foreground text-xs">{totalSalesSubtitle}</div>
                            </div>
                            <div className="ms-auto text-sm font-medium text-red-600">{totalSalesAmount}</div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default PricingComponent;