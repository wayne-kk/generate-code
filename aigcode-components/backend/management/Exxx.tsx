import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@ui/card';
import { ResponsiveContainer, BarChart, Bar, Cell, LabelList } from 'recharts';

interface YearData {
  year: string;
  projects: number;
  width: number;
}

interface PricingComponentProps {
  title?: string;
  description?: string;
  yearData?: YearData[];
}

export default function PricingComponent({
  title = 'Achievement by Year',
  description = 'You completed more projects per day on average this year than last year.',
  yearData = [
    { year: '2024', projects: 57, width: 100 },
    { year: '2023', projects: 29, width: 80 },
    { year: '2022', projects: 35, width: 70 },
  ],
}: PricingComponentProps) {
  return (
    <Card className="flex flex-col gap-6 py-6 rounded-xl border border-solid border-gray-200 bg-white text-gray-900 w-full max-w-[396px] shadow-none">
      <CardHeader className="px-6 space-y-1 pb-0">
        <CardTitle className="text-lg font-semibold leading-tight">{title}</CardTitle>
        <CardDescription className="text-sm text-gray-500 leading-snug">{description}</CardDescription>
      </CardHeader>
      <CardContent className="px-6 grid gap-8">
        {yearData.map((data, index) => (
          <div key={data.year} className="grid gap-2">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-semibold tabular-nums leading-none">{data.projects}</span>
              <span className="text-xs text-gray-500 font-normal ml-1">projects</span>
            </div>
            <div className="h-8 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  width={346}
                  height={32}
                  data={[{ name: data.year, value: data.width }]}
                  margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                >
                  <Bar
                    dataKey="value"
                    radius={4}
                    fill={index === 0 ? '#000000' : index === 1 ? '#4B5563' : '#111827'}
                    isAnimationActive={false}
                  >
                    <LabelList
                      dataKey="name"
                      position="insideLeft"
                      fill="#FFFFFF"
                      offset={8}
                      fontSize={12}
                      fontWeight="normal"
                    />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}