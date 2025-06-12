import React from 'react';
import { Card, CardContent, CardFooter } from '@ui/card';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';

interface PricingComponentProps {
  completionPercentage?: number;
  newTickets?: number;
  openTickets?: number;
  responseTime?: string;
}

function PricingComponent({
  completionPercentage = 88,
  newTickets = 40,
  openTickets = 25,
  responseTime = '1 Day',
}: PricingComponentProps) {
  const chartData = [
    { name: 'completed', value: completionPercentage, fill: '#000000' },
    { name: 'remaining', value: 100 - completionPercentage, fill: '#5D5D6D' },
  ];

  return (
    <div className="w-full max-w-[534px] mx-auto rounded-xl border border-gray-200 shadow-sm overflow-hidden bg-white">
      <Card className="flex flex-col h-full shadow-none border-0">
        <CardContent className="p-8 pb-16 flex justify-center items-center">
          <div className="w-full max-w-[200px] aspect-square">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={80}
                  dataKey="value"
                  stroke="none"
                  startAngle={90}
                  endAngle={-270}
                />
                <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central">
                  <tspan x="50%" y="45%" className="text-2xl font-medium">
                    {completionPercentage}%
                  </tspan>
                  <tspan x="50%" y="65%" className="text-xs text-gray-500">
                    Completed
                  </tspan>
                </text>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
        <CardFooter className="px-6 py-5 border-t border-gray-200 flex flex-row justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 border border-green-200">
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
                className="text-green-600"
              >
                <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
                <path d="M13 5v2"></path>
                <path d="M13 17v2"></path>
                <path d="M13 11v2"></path>
              </svg>
            </div>
            <div>
              <div className="text-sm font-medium">New Tickets</div>
              <div className="text-sm text-gray-500">{newTickets}</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 border border-amber-200">
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
                className="text-amber-600"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <div>
              <div className="text-sm font-medium">Open Tickets</div>
              <div className="text-sm text-gray-500">{openTickets}</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100 border border-cyan-200">
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
                className="text-cyan-600"
              >
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                <path d="m10 15-3-3 3-3"></path>
                <path d="M7 12h7a2 2 0 0 1 2 2v1"></path>
              </svg>
            </div>
            <div>
              <div className="text-sm font-medium">Response Time</div>
              <div className="text-sm text-gray-500">{responseTime}</div>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default PricingComponent;