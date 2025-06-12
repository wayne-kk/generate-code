import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@ui/card';
import { ToggleGroup, ToggleGroupItem } from '@ui/toggle-group';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@ui/select';
import { ChevronDown } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface TooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
}

interface ProjectsOverviewProps {
  title?: string;
  description?: string;
  timeRanges?: string[];
  selectedTimeRange?: string;
  chartData?: Array<{
    date: string;
    mobile: number;
    desktop: number;
  }>;
}

export default function ProjectsOverview({
  title = 'Projects Overview',
  description = 'Total for the last 3 months',
  timeRanges = ['Last 3 months', 'Last 30 days', 'Last 7 days'],
  selectedTimeRange = 'Last 3 months',
  chartData = [
    { date: 'Mar 19', mobile: 45, desktop: 120 },
    { date: 'Mar 24', mobile: 76, desktop: 350 },
    { date: 'Mar 26', mobile: 35, desktop: 190 },
    { date: 'Apr 1', mobile: 60, desktop: 230 },
    { date: 'Apr 7', mobile: 40, desktop: 180 },
    { date: 'Apr 13', mobile: 50, desktop: 250 },
    { date: 'Apr 19', mobile: 65, desktop: 270 },
    { date: 'Apr 26', mobile: 30, desktop: 190 },
    { date: 'May 2', mobile: 45, desktop: 240 },
    { date: 'May 8', mobile: 70, desktop: 320 },
    { date: 'May 15', mobile: 55, desktop: 280 },
    { date: 'May 22', mobile: 60, desktop: 250 },
    { date: 'May 29', mobile: 40, desktop: 220 },
    { date: 'Jun 4', mobile: 50, desktop: 290 },
    { date: 'Jun 11', mobile: 75, desktop: 340 },
  ],
}: ProjectsOverviewProps) {
  const [timeRange, setTimeRange] = React.useState(selectedTimeRange);

  const handleTimeRangeChange = (value: string) => {
    if (value) setTimeRange(value);
  };

  const CustomTooltip = ({ active, payload }: TooltipProps) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-gray-800 p-3 border border-gray-200 dark:border-gray-700 rounded-md shadow-sm">
          <p className="font-medium text-sm mb-1">{payload[0].payload.date}</p>
          <div className="space-y-1">
            <p className="text-xs flex items-center">
              <span className="inline-block w-3 h-3 bg-black rounded-sm mr-2"></span>
              Mobile: {payload[0].value}
            </p>
            <p className="text-xs flex items-center">
              <span className="inline-block w-3 h-3 bg-gray-200 rounded-sm mr-2"></span>
              Desktop: {payload[1].value}
            </p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="w-full bg-white dark:bg-gray-950 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
      <CardHeader className="flex flex-row items-start justify-between p-6 space-y-0">
        <div>
          <CardTitle className="text-xl font-semibold text-gray-900 dark:text-gray-100 leading-none">{title}</CardTitle>
          <CardDescription className="text-sm text-gray-500 dark:text-gray-400 mt-1.5">{description}</CardDescription>
        </div>
        <div className="flex items-center">
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={handleTimeRangeChange}
            variant="outline"
            className="hidden md:flex rounded-md border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-800/20"
            aria-label="Time range"
          >
            {timeRanges.map((range) => (
              <ToggleGroupItem
                key={range}
                value={range}
                aria-label={range}
                className="px-4 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 data-[state=on]:bg-white data-[state=on]:dark:bg-gray-800 data-[state=on]:shadow-sm rounded-md"
              >
                {range}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
          <Select defaultValue={timeRange} onValueChange={handleTimeRangeChange}>
            <SelectTrigger
              className="md:hidden w-40 h-9 px-3 text-sm border border-gray-200 dark:border-gray-800 rounded-md bg-white dark:bg-gray-950"
              aria-label="Select time range"
            >
              <SelectValue>{timeRange}</SelectValue>
              <ChevronDown className="h-4 w-4 opacity-50" />
            </SelectTrigger>
            <SelectContent>
              {timeRanges.map((range) => (
                <SelectItem key={range} value={range}>
                  {range}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="px-6 pt-0 pb-6">
        <div className="w-full h-[280px] mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
              <defs>
                <linearGradient id="colorDesktop" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f3f4f6" stopOpacity={0.9} />
                  <stop offset="95%" stopColor="#f3f4f6" stopOpacity={0.1} />
                </linearGradient>
                <linearGradient id="colorMobile" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4b5563" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#4b5563" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
              <XAxis
                dataKey="date"
                tick={{ fontSize: 11, fill: '#6b7280' }}
                tickLine={false}
                axisLine={{ stroke: '#e5e7eb' }}
                padding={{ left: 10, right: 10 }}
              />
              <YAxis hide={true} />
              <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#e5e7eb', strokeWidth: 1 }} />
              <Area
                type="monotone"
                dataKey="desktop"
                stroke="#d1d5db"
                fillOpacity={1}
                fill="url(#colorDesktop)"
                strokeWidth={1.5}
                activeDot={false}
              />
              <Area
                type="monotone"
                dataKey="mobile"
                stroke="#1f2937"
                fillOpacity={1}
                fill="url(#colorMobile)"
                strokeWidth={1.5}
                activeDot={{ r: 4, stroke: '#1f2937', strokeWidth: 1, fill: '#fff' }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}