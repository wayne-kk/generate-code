import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent } from '@ui/card';
import { Button } from '@ui/button';

interface RevenueData {
  date: string;
  desktop: number;
  mobile: number;
}

interface PricingComponentProps {
  title?: string;
  description?: string;
  desktopRevenue?: number;
  mobileRevenue?: number;
  chartData?: RevenueData[];
}

const PricingComponent: React.FC<PricingComponentProps> = ({
  title = 'Revenue Chart',
  description = 'Last 28 days',
  desktopRevenue = 13746,
  mobileRevenue = 13580,
  chartData = [
    { date: 'Apr 5', desktop: 57, mobile: 45 },
    { date: 'Apr 6', desktop: 32, mobile: 28 },
    { date: 'Apr 7', desktop: 45, mobile: 40 },
    { date: 'Apr 8', desktop: 65, mobile: 55 },
    { date: 'Apr 9', desktop: 48, mobile: 42 },
    { date: 'Apr 10', desktop: 25, mobile: 30 },
    { date: 'Apr 11', desktop: 38, mobile: 35 },
    { date: 'Apr 12', desktop: 42, mobile: 38 },
    { date: 'Apr 13', desktop: 18, mobile: 15 },
    { date: 'Apr 14', desktop: 22, mobile: 18 },
    { date: 'Apr 15', desktop: 43, mobile: 40 },
    { date: 'Apr 16', desktop: 68, mobile: 62 },
    { date: 'Apr 17', desktop: 35, mobile: 30 },
    { date: 'Apr 18', desktop: 28, mobile: 25 },
    { date: 'Apr 19', desktop: 45, mobile: 40 },
    { date: 'Apr 20', desktop: 63, mobile: 55 },
    { date: 'Apr 21', desktop: 35, mobile: 30 },
    { date: 'Apr 22', desktop: 28, mobile: 25 },
    { date: 'Apr 23', desktop: 42, mobile: 38 },
    { date: 'Apr 24', desktop: 55, mobile: 50 },
    { date: 'Apr 25', desktop: 97, mobile: 85 },
    { date: 'Apr 26', desktop: 45, mobile: 40 },
    { date: 'Apr 27', desktop: 58, mobile: 52 },
    { date: 'Apr 28', desktop: 75, mobile: 68 },
    { date: 'Apr 29', desktop: 42, mobile: 38 },
    { date: 'Apr 30', desktop: 78, mobile: 70 },
    { date: 'May 1', desktop: 55, mobile: 50 },
    { date: 'May 2', desktop: 68, mobile: 62 },
    { date: 'May 3', desktop: 82, mobile: 75 },
    { date: 'May 4', desktop: 75, mobile: 68 },
    { date: 'May 5', desktop: 64, mobile: 60 },
    { date: 'May 6', desktop: 48, mobile: 42 },
    { date: 'May 7', desktop: 58, mobile: 52 },
    { date: 'May 8', desktop: 72, mobile: 65 },
    { date: 'May 9', desktop: 85, mobile: 78 },
    { date: 'May 10', desktop: 106, mobile: 95 },
    { date: 'May 11', desktop: 75, mobile: 68 },
    { date: 'May 12', desktop: 62, mobile: 55 },
    { date: 'May 13', desktop: 48, mobile: 42 },
    { date: 'May 14', desktop: 35, mobile: 30 },
    { date: 'May 15', desktop: 15, mobile: 20 },
    { date: 'May 16', desktop: 68, mobile: 62 },
    { date: 'May 17', desktop: 82, mobile: 75 },
    { date: 'May 18', desktop: 75, mobile: 68 },
    { date: 'May 19', desktop: 58, mobile: 52 },
    { date: 'May 20', desktop: 42, mobile: 38 },
    { date: 'May 21', desktop: 35, mobile: 30 },
  ],
}) => {
  const [activeTab, setActiveTab] = React.useState<'desktop' | 'mobile'>('desktop');

  return (
    <Card className="w-full bg-white dark:bg-gray-950 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="flex flex-col p-6">
        <div className="flex justify-between items-start">
          <div className="mb-6">
            <h3 className="text-base font-medium text-gray-900 dark:text-gray-100">{title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{description}</p>
          </div>

          <div className="flex border border-gray-200 dark:border-gray-800 rounded-md overflow-hidden">
            <Button
              variant="ghost"
              onClick={() => setActiveTab('desktop')}
              className={`h-auto px-4 py-2 text-left rounded-none hover:bg-gray-50 dark:hover:bg-gray-900 ${activeTab === 'desktop' ? 'bg-gray-50 dark:bg-gray-900' : 'bg-white dark:bg-gray-950'}`}
            >
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 dark:text-gray-400">Desktop</span>
                <span className="text-xl font-medium text-gray-900 dark:text-gray-100">
                  {desktopRevenue.toLocaleString()}
                </span>
              </div>
            </Button>
            <Button
              variant="ghost"
              onClick={() => setActiveTab('mobile')}
              className={`h-auto px-4 py-2 text-left border-l border-gray-200 dark:border-gray-800 rounded-none hover:bg-gray-50 dark:hover:bg-gray-900 ${activeTab === 'mobile' ? 'bg-gray-50 dark:bg-gray-900' : 'bg-white dark:bg-gray-950'}`}
            >
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 dark:text-gray-400">Mobile</span>
                <span className="text-xl font-medium text-gray-900 dark:text-gray-100">
                  {mobileRevenue.toLocaleString()}
                </span>
              </div>
            </Button>
          </div>
        </div>

        <CardContent className="p-0 pt-2">
          <div className="h-[180px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 5, right: 0, bottom: 20, left: 0 }} barGap={1}>
                <XAxis
                  dataKey="date"
                  tick={{ fontSize: 11, fill: '#6B7280' }}
                  tickLine={false}
                  axisLine={false}
                  interval={4}
                  tickMargin={8}
                />
                <YAxis hide={true} />
                <Tooltip
                  cursor={{ fill: 'rgba(243, 244, 246, 0.5)' }}
                  contentStyle={{
                    borderRadius: '4px',
                    border: '1px solid #E5E7EB',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                    padding: '8px 12px',
                    backgroundColor: '#FFFFFF',
                  }}
                  formatter={(value) => [`${value}`, activeTab === 'desktop' ? 'Desktop' : 'Mobile']}
                  labelFormatter={(label) => label}
                />
                <Bar dataKey={activeTab} fill="#4B5563" radius={[4, 4, 0, 0]} barSize={20} animationDuration={300} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default PricingComponent;
