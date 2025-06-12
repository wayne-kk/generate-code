import React from 'react';
import { Card } from '@ui/card';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface FinancialCardProps {
  title: string;
  amount: string;
  percentChange: string;
  isIncrease: boolean;
  comparisonText: string;
}

interface PricingComponentProps {
  data?: FinancialCardProps[];
}

const PricingComponent: React.FC<PricingComponentProps> = ({
  data = [
    {
      title: 'Total Balance',
      amount: '$103,045',
      percentChange: '3.6%',
      isIncrease: true,
      comparisonText: 'Compare from last month',
    },
    {
      title: 'Total Income',
      amount: '$78,000',
      percentChange: '2.5%',
      isIncrease: true,
      comparisonText: 'Compare from last month',
    },
    {
      title: 'Total Expense',
      amount: '$15,010',
      percentChange: '6.0%',
      isIncrease: false,
      comparisonText: 'Compare from last month',
    },
    {
      title: 'Total Sales Tax',
      amount: '$9,090',
      percentChange: '5.0%',
      isIncrease: true,
      comparisonText: 'Compare from last month',
    },
  ],
}) => {
  return (
    <div className="w-full max-w-[808px]">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {data.map((item, index) => (
          <Card key={index} className="p-6 bg-white shadow-none border border-gray-100 rounded-xl">
            <div className="space-y-4">
              <div className="text-gray-600 text-sm font-normal">{item.title}</div>
              <div className="text-[#1e293b] text-[28px] font-semibold leading-tight">{item.amount}</div>
              <div className="flex items-center text-xs">
                {item.isIncrease ? (
                  <ArrowUp className="mr-1 h-3 w-3 text-green-500" />
                ) : (
                  <ArrowDown className="mr-1 h-3 w-3 text-red-500" />
                )}
                <span className={`font-medium ${item.isIncrease ? 'text-green-500' : 'text-red-500'}`}>
                  {item.percentChange}
                </span>
                <span className="text-gray-500 ml-1">{item.comparisonText}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PricingComponent