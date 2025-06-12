import React from 'react';
import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardHeader } from '@ui/card';

interface PricingComponentProps {
  averageDailySales?: string;
  salesAmount?: string;
  isTrendingDown?: boolean;
  chartData?: Array<{
    name: string;
    mobile: number;
  }>;
}

function PricingComponent({
  averageDailySales = 'Average Daily Sales',
  salesAmount = '$28,450',
  isTrendingDown = true,
  chartData = [
    { name: 'Jan', mobile: 68.333 },
    { name: 'Feb', mobile: 20.833 },
    { name: 'Mar', mobile: 52.5 },
    { name: 'Apr', mobile: 24.792 },
    { name: 'May', mobile: 48.542 },
    { name: 'Jun', mobile: 5 },
  ],
}: PricingComponentProps) {
  return (
    <div className="lg:col-span-4 w-full max-w-[533px]">
      <Card className="flex flex-col py-6 h-[228px] overflow-hidden pb-0 rounded-xl bg-white shadow-sm border border-gray-100">
        <CardHeader className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1 px-6 pb-0">
          <div className="text-gray-500 text-sm font-normal">{averageDailySales}</div>
          <div className="font-semibold mt-1 mb-6 text-3xl text-gray-900">{salesAmount}</div>
          <div className="col-start-2 row-span-2 row-start-1 self-start justify-self-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4 text-red-600"
            >
              <polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline>
              <polyline points="16 17 22 17 22 11"></polyline>
            </svg>
          </div>
        </CardHeader>
        <div className="flex justify-center text-xs aspect-auto h-[120px] w-full mt-auto">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#f0f0f0" stopOpacity="1" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="mobile"
                stroke="#d1d1d1"
                strokeWidth={1.5}
                fillOpacity={1}
                fill="url(#fillMobile)"
              />
              <Tooltip contentStyle={{ display: 'none' }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
}

export default PricingComponent;
