import React from 'react';
import { Card, CardContent } from '@ui/card';

type Transaction = {
  time: string;
  content: string;
  link?: {
    text: string;
    href: string;
  };
  dotColor: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
};

type RecentTransactionsProps = {
  title?: string;
  transactions?: Transaction[];
};

const dotColorMap: Record<string, string> = {
  primary: 'bg-blue-500',
  secondary: 'bg-blue-400',
  success: 'bg-teal-500',
  warning: 'bg-amber-500',
  error: 'bg-red-400',
};

function RecentTransactions({
  title = 'Recent Transactions',
  transactions = [
    {
      time: '09:30 am',
      content: 'Payment received from John Doe of $385.90',
      dotColor: 'primary',
    },
    {
      time: '10:00 am',
      content: 'New sale recorded',
      link: {
        text: '#ML-3467',
        href: 'https://modernize-nextjs-free.vercel.app/',
      },
      dotColor: 'secondary',
    },
    {
      time: '12:00 am',
      content: 'Payment was made of $64.95 to Michael',
      dotColor: 'success',
    },
    {
      time: '09:30 am',
      content: 'New sale recorded',
      link: {
        text: '#ML-3467',
        href: 'https://modernize-nextjs-free.vercel.app/',
      },
      dotColor: 'warning',
    },
    {
      time: '09:30 am',
      content: 'New arrival recorded',
      dotColor: 'error',
    },
    {
      time: '12:00 am',
      content: 'Payment Received',
      dotColor: 'success',
    },
  ],
}: RecentTransactionsProps) {
  return (
    <div className="w-full max-w-md h-full flex flex-1">
      <Card className="bg-white shadow-md rounded-lg flex-1 h-full flex flex-col">
        <CardContent className="p-6">
          <h5 className="text-xl font-medium text-gray-800 mb-8">{title}</h5>
          <ul>
            {transactions.map((transaction, index) => (
              <li key={index} className="flex items-start min-h-[48px] relative">
                {/* 时间列 */}
                <div className="w-20 text-xs text-gray-500 font-normal flex-shrink-0 flex items-center justify-end pt-0.5">{transaction.time}</div>
                {/* 圆点+连线列 */}
                <div className="relative flex flex-col items-center mx-4">
                  {/* 竖线（非最后一个才显示） */}
                  {index !== transactions.length - 1 && (
                    <span className="absolute top-5 left-1/2 -translate-x-1/2 w-0.5 h-full bg-gray-200 z-0"></span>
                  )}
                  {/* 圆点 */}
                  <span className={`relative z-10 w-3.5 h-3.5 rounded-full border-2 border-white shadow ${dotColorMap[transaction.dotColor]} mt-0.5`}></span>
                </div>
                {/* 内容列 */}
                <div className="flex-1">
                  <p className="text-gray-700 font-normal leading-relaxed mb-0.5">{transaction.content}</p>
                  {transaction.link && (
                    <a
                      href={transaction.link.href}
                      className={`text-sm no-underline inline-block mt-1 transition-colors hover:underline
                        ${
                          transaction.dotColor === 'secondary'
                            ? 'text-blue-400'
                            : transaction.dotColor === 'warning'
                              ? 'text-amber-500'
                              : 'text-blue-500'
                        }
                      `}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {transaction.link.text}
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

export default RecentTransactions;
