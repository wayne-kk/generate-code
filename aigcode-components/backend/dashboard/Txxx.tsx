import React from 'react';
import { Card, CardContent } from '@ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@ui/select';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface MonthChartData {
  month: string;
  chartData: Array<Record<string, any>>;
}

interface BarConfigItem {
  key: string;
  name: string;
  color: string;
}

interface PricingComponentProps {
  title?: string;
  data?: MonthChartData[];
  barConfig?: BarConfigItem[];
}

function getBarKeysFromData(data: MonthChartData[]): string[] {
  // 获取所有chartData的key，排除date
  const keys = new Set<string>();
  data.forEach(month =>
    month.chartData.forEach(item =>
      Object.keys(item).forEach(k => {
        if (k !== 'date') keys.add(k);
      })
    )
  );
  return Array.from(keys);
}

const defaultBarColors = [
  '#7986cb', // sales
  '#4fc3f7', // returns
  '#81c784', // extra1
  '#ffb74d', // extra2
  '#e57373', // extra3
];

function PricingComponent({
  title = 'Sales Overview',
  data = [
    {
      month: 'March 2025',
      chartData: [
        { date: '16/08', sales: 340, returns: 270, aa: 120, bb: 240 },
        { date: '17/08', sales: 380, returns: 240, aa: 120, bb: 240 },
        { date: '18/08', sales: 290, returns: 320, aa: 120, bb: 240 },
        { date: '19/08', sales: 340, returns: 210, aa: 120, bb: 240 },
        { date: '20/08', sales: 380, returns: 240, aa: 120, bb: 240 },
        { date: '21/08', sales: 170, returns: 300, aa: 120, bb: 240 },
        { date: '22/08', sales: 350, returns: 270, aa: 120, bb: 240 },
        { date: '23/08', sales: 380, returns: 240, aa: 120, bb: 240 },
        { date: '24/08', sales: 320, returns: 220, aa: 120, bb: 240 },
        { date: '25/08', sales: 480, returns: 340, aa: 120, bb: 240 },
      ],
    },
    {
      month: 'April 2025',
      chartData: [
        { date: '16/08', sales: 300, returns: 200, bb: 220, aa: 155 },
        { date: '17/08', sales: 320, returns: 210, bb: 220, aa: 155 },
        { date: '18/08', sales: 250, returns: 260, bb: 220, aa: 155 },
        { date: '19/08', sales: 310, returns: 180, bb: 220, aa: 155 },
        { date: '20/08', sales: 350, returns: 200, bb: 220, aa: 155 },
        { date: '21/08', sales: 150, returns: 250, bb: 220, aa: 155 },
        { date: '22/08', sales: 320, returns: 220, bb: 220, aa: 155 },
        { date: '23/08', sales: 340, returns: 210, bb: 220, aa: 155 },
      ],
    },
  ],
  barConfig,
}: PricingComponentProps) {
  const [selectedMonth, setSelectedMonth] = React.useState(data[0]?.month || '');

  // 动态生成 bar 配置
  const barKeys = barConfig
    ? barConfig
    : getBarKeysFromData(data).map((key, idx) => ({
      key,
      name: key.charAt(0).toUpperCase() + key.slice(1),
      color: defaultBarColors[idx % defaultBarColors.length],
    }));

  // 控制每个 bar 的显示/隐藏
  const [visible, setVisible] = React.useState<boolean[]>(() => barKeys.map(() => true));

  // 处理 legend 点击
  const handleLegendClick = (e: any) => {
    const idx = barKeys.findIndex(bar => bar.name === e.value);
    if (idx !== -1) {
      setVisible(prev => {
        const next = [...prev];
        next[idx] = !next[idx];
        return next;
      });
    }
  };

  const currentData = data.find((item) => item.month === selectedMonth)?.chartData || [];

  return (
    <Card className="w-full bg-white shadow-none border-0 h-full">
      <CardContent className="p-6 md:p-8 flex flex-col h-full">
        <div className="flex justify-between items-center mb-8">
          <h5 className="text-[18px] font-medium text-[#2a3547] m-0">{title}</h5>
          <Select value={selectedMonth} onValueChange={setSelectedMonth}>
            <SelectTrigger className="w-[140px] h-9 border border-gray-200 rounded-md bg-white text-sm font-normal text-gray-700">
              <SelectValue placeholder="Select month" />
            </SelectTrigger>
            <SelectContent>
              {data.map((item) => (
                <SelectItem key={item.month} value={item.month}>{item.month}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex-1 flex items-center justify-center w-full h-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={currentData}
              margin={{
                top: 20,
                right: 30,
                left: 0,
                bottom: 20,
              }}
              barGap={8}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f0f0f0" />
              <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fill: '#888', fontSize: 12 }} dy={10} />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#888', fontSize: 12 }}
              />
              <Tooltip
                cursor={{ fill: 'transparent' }}
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #f0f0f0',
                  borderRadius: '4px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                }}
              />
              <Legend
                wrapperStyle={{ bottom: -10 }}
                iconType="circle"
                iconSize={8}
                onClick={handleLegendClick}
                payload={barKeys.map((bar, idx) => ({
                  value: bar.name,
                  type: 'circle',
                  color: bar.color,
                  id: bar.key,
                  inactive: !visible[idx],
                }))}
              />
              {barKeys.map((bar, idx) =>
                visible[idx] ? (
                  <Bar
                    key={bar.key}
                    dataKey={bar.key}
                    name={bar.name}
                    fill={bar.color}
                    radius={[4, 4, 0, 0]}
                    barSize={20}
                  />
                ) : null
              )}
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

export default PricingComponent;