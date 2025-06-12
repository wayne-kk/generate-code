import React from 'react';
import { Card, CardHeader, CardContent } from '@ui/card';
import { Badge } from '@ui/badge';

interface PricingComponentProps {
  description?: string;
  totalSales?: string;
  orderPercentage?: string;
  visitPercentage?: string;
  orderLabel?: string;
  visitLabel?: string;
  orderBarPercentage?: number;
  visitBarPercentage?: number;
}

function PricingComponent({
  description = 'Sales Overview',
  totalSales = '$42.5K',
  orderPercentage = '62.2%',
  visitPercentage = '25.5%',
  orderLabel = 'Orders',
  visitLabel = 'Visits',
  orderBarPercentage = 70,
  visitBarPercentage = 30,
}: PricingComponentProps) {
  return (
    <div className="w-full max-w-[534px]">
      <Card className="bg-white shadow-sm rounded-xl border border-gray-100">
        <CardHeader className="px-6 pt-6 pb-0 flex justify-between items-start space-y-0">
          <div className="space-y-1">
            <p className="text-gray-500 text-sm font-normal">{description}</p>
            <h2 className="text-[28px] font-semibold text-gray-900 mt-1">{totalSales}</h2>
          </div>
          <div className="text-green-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-5"
            >
              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
              <polyline points="16 7 22 7 22 13"></polyline>
            </svg>
          </div>
        </CardHeader>
        <CardContent className="px-6 pt-8 pb-6">
          <div className="grid grid-cols-2 gap-4 divide-x divide-gray-200 mb-5">
            <div className="flex items-center gap-3 text-sm">
              <Badge className="bg-gray-200 text-gray-700 rounded-md px-2 py-0.5 font-medium text-xs border-0">
                {orderPercentage}
              </Badge>
              <span className="text-gray-700">{orderLabel}</span>
            </div>
            <div className="flex items-center justify-end gap-3 text-sm pl-4">
              <Badge className="bg-gray-200 text-gray-700 rounded-md px-2 py-0.5 font-medium text-xs border-0">
                {visitPercentage}
              </Badge>
              <span className="text-gray-700">{visitLabel}</span>
            </div>
          </div>
          <div className="flex h-4 overflow-hidden rounded-md">
            <span className="bg-orange-500 h-full" style={{ width: `${orderBarPercentage}%` }}></span>
            <span className="bg-green-500 h-full" style={{ width: `${visitBarPercentage}%` }}></span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default PricingComponent