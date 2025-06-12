import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@ui/card';
import { LineChart, Line, Tooltip, ResponsiveContainer } from 'recharts';

interface PricingComponentProps {
  title?: string;
  amount?: string;
  percentChange?: string;
  isPositive?: boolean;
  comparisonText?: string;
  chartData?: Array<{ name: string; visitors: number }>;
}

function PricingComponent({
  title = 'Total Revenue',
  amount = '$15,231.89',
  percentChange = '+20.1%',
  isPositive = true,
  comparisonText = 'from last month',
  chartData = [
    { name: 'Jan', visitors: 35 },
    { name: 'Feb', visitors: 70 },
    { name: 'Mar', visitors: 53 },
    { name: 'Apr', visitors: 88 },
    { name: 'May', visitors: 39 },
  ],
}: PricingComponentProps) {
  return (
    <Card className="flex flex-col gap-4 py-6 rounded-xl border border-gray-100 bg-white shadow-none w-full max-w-[533px]">
      <CardHeader className="px-6 pb-0 space-y-0">
        <CardTitle className="text-base font-medium text-gray-900">{title}</CardTitle>
      </CardHeader>
      <CardContent className="px-6 pt-0 space-y-4">
        <div>
          <div className="font-semibold text-[28px] leading-tight text-gray-900 mt-4">{amount}</div>
          <p className="text-xs mt-1">
            <span className={isPositive ? 'text-green-500' : 'text-red-500'}>{percentChange}</span>{' '}
            <span className="text-gray-500">{comparisonText}</span>
          </p>
        </div>
        <div className="h-[100px] w-full mt-2">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
              <Line
                type="monotone"
                dataKey="visitors"
                stroke="#000"
                strokeWidth={1.5}
                dot={{ r: 4, fill: 'white', stroke: '#000', strokeWidth: 1.5 }}
                activeDot={{ r: 4, fill: 'white', stroke: '#000', strokeWidth: 1.5 }}
              />
              <Tooltip
                cursor={false}
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e2e8f0',
                  borderRadius: '0.375rem',
                  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                  padding: '8px',
                }}
                labelStyle={{ color: '#4b5563', marginBottom: '4px' }}
                itemStyle={{ color: '#000', padding: '0' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

export default PricingComponent;
