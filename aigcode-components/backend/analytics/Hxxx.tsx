import React from 'react';
import { Card, CardHeader, CardContent } from '@ui/card';
import { Badge } from '@ui/badge';

interface CampaignStatItem {
  icon: React.ReactNode;
  label: string;
  value: string;
  percentage: string;
  isPositive: boolean;
}

interface MonthlyCampaignStatsProps {
  title?: string;
  description?: string;
  stats?: CampaignStatItem[];
}

function PricingComponent({
  title = 'Monthly Campaign State',
  description = '8.5K social visitors',
  stats = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-4"
        >
          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </svg>
      ),
      label: 'Emails',
      value: '1.503',
      percentage: '-0.3%',
      isPositive: false,
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-4"
        >
          <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
      ),
      label: 'Opened',
      value: '6.043',
      percentage: '2.1%',
      isPositive: true,
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-4"
        >
          <path d="M12.586 12.586 19 19"></path>
          <path d="M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z"></path>
        </svg>
      ),
      label: 'Clicked',
      value: '600',
      percentage: '-2.1%',
      isPositive: false,
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-4"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <line x1="19" x2="19" y1="8" y2="14"></line>
          <line x1="22" x2="16" y1="11" y2="11"></line>
        </svg>
      ),
      label: 'Subscribe',
      value: '490',
      percentage: '8.5%',
      isPositive: true,
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-4"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" x2="12" y1="8" y2="12"></line>
          <line x1="12" x2="12.01" y1="16" y2="16"></line>
        </svg>
      ),
      label: 'Complaints',
      value: '490',
      percentage: '4.5%',
      isPositive: true,
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-4"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <line x1="22" x2="16" y1="11" y2="11"></line>
        </svg>
      ),
      label: 'Unsubscribe',
      value: '1.2',
      percentage: '-0.5%',
      isPositive: false,
    },
  ],
}: MonthlyCampaignStatsProps) {
  return (
    <div className="w-full max-w-[534px]">
      <Card className="bg-white rounded-xl border border-gray-100 shadow-sm">
        <CardHeader className="px-6 pt-5 pb-2">
          <h3 className="text-base font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500 mt-0.5">{description}</p>
        </CardHeader>
        <CardContent className="px-6 pt-2 pb-5">
          <div className="space-y-3">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center py-1.5">
                <div className="bg-gray-50 flex items-center justify-center w-10 h-10 rounded-md border border-gray-200">
                  {stat.icon}
                </div>
                <div className="ml-4">
                  <p className="text-sm font-normal text-gray-700">{stat.label}</p>
                </div>
                <div className="ml-auto flex items-center space-x-3">
                  <span className="text-sm font-normal text-gray-900">{stat.value}</span>
                  <div className="w-14 text-right">
                    <Badge
                      variant="outline"
                      className={`text-xs px-2 py-0.5 font-normal ${
                        stat.isPositive ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {stat.percentage}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default PricingComponent;
