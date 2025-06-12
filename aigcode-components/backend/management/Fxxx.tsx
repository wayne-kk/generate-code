import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@ui/card';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@ui/select';
import { PieChart, Pie, Cell, ResponsiveContainer, Sector, Tooltip } from 'recharts';

interface ChartData {
  name: string;
  value: number;
  color: string;
}

interface PricingComponentProps {
  title?: string;
  description?: string;
  visitorCount?: number;
  visitorLabel?: string;
  chartData?: ChartData[];
  onMonthChange?: (month: string) => void;
}

export default function PricingComponent({
  title = 'Project Efficiency',
  description = 'January - June 2026',
  visitorCount = 186,
  visitorLabel = 'Visitors',
  chartData = [
    { name: 'january', value: 30, color: '#000000' },
    { name: 'february', value: 25, color: '#333333' },
    { name: 'march', value: 20, color: '#4D4D4D' },
    { name: 'april', value: 15, color: '#666666' },
    { name: 'may', value: 10, color: '#AAAAAA' },
  ],
  onMonthChange = () => { },
}: PricingComponentProps) {
  const [selectedMonth, setSelectedMonth] = useState('february');
  const [activeIndex, setActiveIndex] = useState(
    chartData.findIndex((item) => item.name === selectedMonth)
  );

  useEffect(() => {
    setSelectedMonth(selectedMonth);
    const idx = chartData.findIndex((item) => item.name === selectedMonth);
    if (idx !== -1) setActiveIndex(idx);
  }, [chartData]);

  const handleMonthChange = (month: string) => {
    setSelectedMonth(month);
    const idx = chartData.findIndex((item) => item.name === month);
    if (idx !== -1) setActiveIndex(idx);
    onMonthChange(month);
  };

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  const renderActiveShape = (props: any) => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props;
    return (
      <g>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
          stroke="#fff"
          strokeWidth={5}
        />
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={outerRadius + 5}
          outerRadius={outerRadius + 20}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
          stroke="#fff"
          strokeWidth={5}
        />
      </g>
    );
  };

  // 自定义 Tooltip 内容
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const { name, value, color } = payload[0].payload;
      return (
        <div className="bg-white border border-gray-200 rounded px-3 py-2 text-xs shadow text-gray-800 flex items-center gap-2">
          <span className="inline-block w-3 h-3 rounded-sm" style={{ backgroundColor: color }} />
          <span className="font-medium">{name.charAt(0).toUpperCase() + name.slice(1)}</span>
          <span className="ml-2 text-gray-500">{value}</span>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="flex flex-col gap-6 py-6 rounded-xl border border-gray-100 bg-white w-full max-w-[396px] h-[383px]">
      <CardHeader className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-[data-slot=card-action]:grid-cols-[1fr_auto]">
        <CardDescription className="text-sm text-gray-500 font-normal">{description}</CardDescription>
        <CardTitle className="font-semibold text-xl text-gray-900">{title}</CardTitle>
        <div className="col-start-2 row-span-2 row-start-1 self-start justify-self-end">
          <Select value={selectedMonth} onValueChange={handleMonthChange}>
            <SelectTrigger className="ml-auto w-fit border border-gray-200 rounded-md bg-white px-3 py-2 text-sm shadow-sm hover:border-gray-300 focus:ring-2 focus:ring-gray-200 focus:border-gray-300">
              <SelectValue>
                <div className="flex items-center gap-2 text-xs">
                  <span
                    className="flex h-3 w-3 shrink-0 rounded-sm"
                    style={{ backgroundColor: chartData.find((item) => item.name === selectedMonth)?.color }}
                  ></span>
                  {selectedMonth.charAt(0).toUpperCase() + selectedMonth.slice(1)}
                </div>
              </SelectValue>
            </SelectTrigger>
            <SelectContent className="bg-white border border-gray-200 rounded-md shadow-md">
              {chartData.map((item) => (
                <SelectItem key={item.name} value={item.name} className="text-sm hover:bg-gray-100 focus:bg-gray-100">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="flex h-3 w-3 shrink-0 rounded-sm" style={{ backgroundColor: item.color }}></span>
                    {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="px-6 flex flex-1 justify-center pb-0">
        <div className="mx-auto aspect-square w-full max-w-[230px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                activeIndex={activeIndex}
                activeShape={renderActiveShape}
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={45}
                outerRadius={88}
                dataKey="value"
                onMouseEnter={onPieEnter}
                stroke="#fff"
                strokeWidth={5}
                animationBegin={0}
                animationDuration={500}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} cursor="pointer" />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
                <tspan x="50%" y="50%" className="fill-gray-900 text-3xl font-bold">
                  {visitorCount}
                </tspan>
                <tspan x="50%" y="60%" className="fill-gray-500 text-sm">
                  {visitorLabel}
                </tspan>
              </text>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}