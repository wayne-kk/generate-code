import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@ui/card';

interface SalesDeal {
  stage: string;
  count: number;
  value: number;
  percentage: number;
  color: string;
}

interface PricingComponentProps {
  title?: string;
  description?: string;
  deals?: SalesDeal[];
}

const PricingComponent: React.FC<PricingComponentProps> = ({
  title = 'Sales Pipeline',
  description = 'Current deals in your sales pipeline.',
  deals = [
    { stage: 'Lead', count: 235, value: 420500, percentage: 38, color: '#000000' },
    { stage: 'Qualified', count: 146, value: 267800, percentage: 24, color: '#4B4B4B' },
    { stage: 'Proposal', count: 84, value: 192400, percentage: 18, color: '#222222' },
    { stage: 'Negotiation', count: 52, value: 129600, percentage: 12, color: '#ADADAD' },
    { stage: 'Closed Won', count: 36, value: 87200, percentage: 8, color: '#E5E5E5' },
  ],
}) => {
  return (
    <Card className="w-full max-w-[533px] bg-white text-zinc-900 border border-zinc-200 rounded-xl shadow-none py-6">
      <CardHeader className="px-6 pb-0 space-y-1">
        <CardTitle className="text-base font-semibold leading-tight">{title}</CardTitle>
        <CardDescription className="text-sm text-zinc-500">{description}</CardDescription>
      </CardHeader>
      <CardContent className="px-6 pt-6">
        <div className="mb-6 flex h-4 w-full overflow-hidden rounded-full">
          {deals.map((deal, index) => (
            <div
              key={index}
              className="h-full"
              style={{ width: `${deal.percentage}%`, backgroundColor: deal.color }}
              aria-label={`${deal.stage}: ${deal.percentage}%`}
            />
          ))}
        </div>
        <div className="space-y-5">
          {deals.map((deal, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="h-3 w-3 rounded-full flex-shrink-0" style={{ backgroundColor: deal.color }}></div>
              <div className="flex flex-1 items-center justify-between">
                <div>
                  <p className="text-sm font-medium leading-tight">{deal.stage}</p>
                  <p className="text-xs text-zinc-500 mt-0.5">
                    {deal.count} deals · ${deal.value.toLocaleString()}
                  </p>
                </div>
                <div className="flex w-24 items-center gap-2">
                  <div className="bg-zinc-200 relative w-full overflow-hidden rounded-full h-2">
                    <div
                      className="h-full absolute left-0 top-0"
                      style={{
                        width: `${deal.percentage}%`,
                        backgroundColor: deal.color,
                      }}
                      role="progressbar"
                      aria-valuenow={deal.percentage}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                  <span className="text-zinc-500 w-10 text-right text-xs">{deal.percentage}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PricingComponent;
