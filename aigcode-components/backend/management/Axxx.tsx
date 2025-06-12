import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@ui/card';
import { DollarSign, Briefcase, Award, FileClock } from 'lucide-react';

interface CardData {
  title: string;
  description: string;
  value: string;
  change: {
    value: string;
    isPositive: boolean;
  };
  icon: React.ReactNode;
}

interface PricingComponentProps {
  cards?: CardData[];
}

export default function PricingComponent({
  cards = [
    {
      title: 'Total Revenue',
      description: 'from last month',
      value: '$45,231.89',
      change: {
        value: '+20.1%',
        isPositive: true,
      },
      icon: <DollarSign className="text-gray-400/50 size-5" />,
    },
    {
      title: 'Active Projects',
      description: 'from last month',
      value: '1.423',
      change: {
        value: '+5.02%',
        isPositive: true,
      },
      icon: <Briefcase className="text-gray-400/50 size-5" />,
    },
    {
      title: 'New Leads',
      description: 'from last month',
      value: '3.500',
      change: {
        value: '-3.58%',
        isPositive: false,
      },
      icon: <Award className="text-gray-400/50 size-5" />,
    },
    {
      title: 'Time Spent',
      description: 'from last month',
      value: '168h 40m',
      change: {
        value: '-3.58%',
        isPositive: false,
      },
      icon: <FileClock className="text-gray-400/50 size-5" />,
    },
  ],
}: PricingComponentProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 w-full">
      {cards.map((card, index) => (
        <Card key={index} className="flex flex-col py-5 bg-white rounded-xl border border-gray-200 shadow-sm">
          <CardHeader className="grid grid-cols-[1fr_auto] items-start gap-1 px-6 pb-0 pt-0">
            <div className="space-y-1">
              <CardTitle className="text-base font-semibold text-gray-800">{card.title}</CardTitle>
              <CardDescription className="text-sm text-gray-500 font-normal">
                <span className={card.change.isPositive ? 'text-green-600' : 'text-red-600'}>{card.change.value} </span>
                {card.description}
              </CardDescription>
            </div>
            <div className="flex items-center justify-center">{card.icon}</div>
          </CardHeader>
          <CardContent className="px-6 pt-4">
            <div className="font-semibold text-3xl text-gray-900">{card.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}