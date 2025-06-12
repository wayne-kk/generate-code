import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@ui/card';
import { BarChart, Bar, Tooltip, ResponsiveContainer, LabelList } from 'recharts';

interface PricingComponentProps {
  title?: string;
  value?: string;
  percentChange?: string;
  isPositive?: boolean;
  chartData?: Array<{
    value: number;
    name: string;
  }>;
}

function PricingComponent({
  title = 'Subscriptions',
  value = '+4850',
  percentChange = '+180.1%',
  isPositive = true,
  chartData = [
    { value: 240, name: 'Jan' },
    { value: 300, name: 'Feb' },
    { value: 200, name: 'Mar' },
    { value: 278, name: 'Apr' },
    { value: 189, name: 'May' },
    { value: 239, name: 'Jun' },
    { value: 278, name: 'Jul' },
    { value: 189, name: 'Aug' },
  ],
}: PricingComponentProps) {
  return (
    <Card className="flex flex-col gap-6 py-6 rounded-xl border border-[#e5e7eb] bg-white shadow-none w-full max-w-[533px]">
      <CardHeader className="px-6 pb-0 space-y-0">
        <CardTitle className="text-base font-semibold leading-none text-[#111827]">{title}</CardTitle>
      </CardHeader>
      <CardContent className="px-6 pt-0">
        <div className="font-bold text-3xl leading-tight text-[#111827] mt-4">{value}</div>
        <p className="text-[#6b7280] mt-1 text-xs">
          <span className={isPositive ? 'text-green-500' : 'text-red-500'}>{percentChange}</span> from last month
        </p>
        <div className="mt-6 h-[100px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 20, right: 0, left: 0, bottom: 0 }} barGap={8}>
              <Bar dataKey="value" fill="#000000" radius={5} barSize={48}>
                <LabelList
                  dataKey="value"
                  position="top"
                  fill="#6b7280"
                  fontSize={12}
                  offset={12}
                  formatter={(value: number) => `${value}`}
                />
              </Bar>
              <Tooltip
                cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '0.375rem',
                  padding: '0.5rem',
                }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

export default PricingComponent