import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@ui/card';
import { Button } from '@ui/button';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';

interface LeadSource {
  name: string;
  value: number;
  color: string;
}

interface PricingComponentProps {
  title?: string;
  totalLeads?: number;
  leadSources?: LeadSource[];
}

const PricingComponent: React.FC<PricingComponentProps> = ({
  title = 'Leads by Source',
  totalLeads = 935,
  leadSources = [
    { name: 'SOCIAL', value: 275, color: '#000000' },
    { name: 'EMAIL', value: 200, color: '#4B4B4B' },
    { name: 'CALL', value: 287, color: '#2D2D2D' },
    { name: 'OTHERS', value: 173, color: '#ADADAD' },
  ],
}) => {
  return (
    <Card className="w-full max-w-[533px] bg-white rounded-xl border border-solid border-gray-200 shadow-none p-0">
      <CardHeader className="flex flex-row items-center justify-between px-6 py-4 border-b-0">
        <CardTitle className="text-base font-medium text-gray-900">{title}</CardTitle>
        <Button variant="outline" size="sm" className="h-9 px-4 py-2 text-sm font-medium bg-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2"
          >
            <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
            <path d="M12 10v6"></path>
            <path d="m9 13 3-3 3 3"></path>
          </svg>
          Export
        </Button>
      </CardHeader>
      <CardContent className="px-6 pb-6 pt-2">
        <div className="flex justify-center mb-8">
          <div className="w-44 h-44 relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={leadSources}
                  cx="50%"
                  cy="50%"
                  innerRadius={45}
                  outerRadius={70}
                  paddingAngle={0}
                  dataKey="value"
                  stroke="#fff"
                  strokeWidth={3}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-semibold text-gray-900">{totalLeads}</span>
              <span className="text-sm text-gray-500 mt-[-2px]">Leads</span>
            </div>
          </div>
        </div>

        <div className="flex justify-between px-4">
          {leadSources.map((source) => (
            <div key={source.name} className="flex flex-col items-start">
              <div className="flex items-center gap-2 mb-1">
                <span className="block w-2 h-2 rounded-full" style={{ backgroundColor: source.color }}></span>
                <span className="text-xs font-medium text-gray-600 uppercase">{source.name}</span>
              </div>
              <span className="text-lg font-semibold text-gray-900 ml-4">{source.value}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PricingComponent;
