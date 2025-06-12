import React from 'react';
import { Card, CardContent } from '@ui/card';
import { Button } from '@ui/button';
import { Avatar } from '@ui/avatar';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowUpRight } from 'lucide-react';

interface PricingComponentProps {
    title?: string;
    amount?: string;
    percentage?: string;
    timeframe?: string;
    chartData?: Array<{ value: number }>;
}

const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm shadow-lg">
                <span className="font-medium text-gray-800">数值：</span>
                <span className="ml-2 text-gray-600">{payload[0].value.toFixed(2)}</span>
            </div>
        );
    }
    return null;
};

function PricingComponent({
    title = '月度收入',
    amount = '¥6,820',
    percentage = '+9%',
    timeframe = '较去年',
    chartData = [
        { value: 43.5 },
        { value: 19.72 },
        { value: 46.4 },
        { value: 34.8 },
        { value: 51.04 },
        { value: 24.36 },
        { value: 46.4 },
    ],
}: PricingComponentProps) {
    return (
        <div className="w-full max-w-[368px]">
            <Card className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                        <div>
                            <h5 className="text-gray-800 text-lg font-semibold">{title}</h5>
                        </div>
                        <Button
                            variant="secondary"
                            size="icon"
                            className="rounded-full bg-blue-500 hover:bg-blue-600 text-white h-10 w-10 shadow-md transition-colors duration-200"
                            aria-label="货币"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2"></path>
                                <path d="M12 3v3m0 12v3"></path>
                            </svg>
                        </Button>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">{amount}</h3>
                    <div className="flex items-center gap-2 mb-4">
                        <Avatar className="bg-emerald-50 h-7 w-7 rounded-full flex items-center justify-center">
                            <ArrowUpRight className="h-4 w-4 text-emerald-600" />
                        </Avatar>
                        <h6 className="text-sm font-medium text-emerald-600">{percentage}</h6>
                        <h6 className="text-sm text-gray-500">{timeframe}</h6>
                    </div>
                </CardContent>
                <div className="h-20 px-4 pb-4">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={chartData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                            <defs>
                                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.2} />
                                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="name" hide={true} />
                            <YAxis hide={true} />
                            <Tooltip content={<CustomTooltip />} />
                            <Line
                                type="monotone"
                                dataKey="value"
                                stroke="#3B82F6"
                                strokeWidth={2}
                                dot={false}
                                activeDot={{
                                    r: 4,
                                    strokeWidth: 2,
                                    fill: "#fff",
                                    stroke: "#3B82F6"
                                }}
                                isAnimationActive={true}
                                animationDuration={1500}
                            />
                            <Line
                                type="monotone"
                                dataKey="value"
                                stroke="transparent"
                                fillOpacity={1}
                                fill="url(#colorValue)"
                                isAnimationActive={true}
                                animationDuration={1500}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </Card>
        </div>
    );
}

export default PricingComponent;