import React from 'react';

type StatItem = {
    title: string;
    value: string;
    percentage: number;
    isPositive: boolean;
};

type PricingComponentProps = {
    stats?: StatItem[];
};

function PricingComponent({
    stats = [
        {
            title: 'Created Tickets',
            value: '24,208',
            percentage: -5,
            isPositive: false,
        },
        {
            title: 'Unsolved Tickets',
            value: '4,564',
            percentage: 2,
            isPositive: true,
        },
        {
            title: 'Resolved Tickets',
            value: '18,208',
            percentage: 8,
            isPositive: true,
        },
        {
            title: 'Average First Time Reply',
            value: '12:01 min',
            percentage: 8,
            isPositive: true,
        },
        {
            title: 'Average First Time Reply',
            value: '12:01 min',
            percentage: 8,
            isPositive: true,
        },
    ],
}: PricingComponentProps) {

    return (
        <div
            className={`max-w-8xl mx-auto w-full px-6 tablet:px-10 desktop:px-14 grid gap-x-8 border-b border-gray-200 py-5 phone:grid-cols-2 laptop:grid-cols-${stats.length}`}
            style={{ gridTemplateColumns: `repeat(${stats.length}, minmax(0, 1fr))` }}
        >
            {stats.map((stat, index) => (
                <section key={index} className="flex flex-col">
                    <h2 className="text-sm font-normal text-gray-500 mb-1">{stat.title}</h2>
                    <div className="flex items-center gap-2">
                        <span className="text-xl font-medium text-gray-900 dark:text-gray-100">{stat.value}</span>
                        <span
                            className={`flex items-center rounded-sm px-1.5 py-0.5 text-xs font-medium ${stat.isPositive ? 'bg-green-50 text-green-600 dark:bg-green-950 dark:text-green-400' : 'bg-red-50 text-red-600 dark:bg-red-950 dark:text-red-400'}`}
                        >
                            {stat.isPositive ? '+' : ''}
                            {stat.percentage}%
                            {stat.isPositive ? (
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
                                    className="ml-0.5 inline-block h-3 w-3"
                                >
                                    <path d="M7 7h10v10"></path>
                                    <path d="M7 17 17 7"></path>
                                </svg>
                            ) : (
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
                                    className="ml-0.5 inline-block h-3 w-3"
                                >
                                    <path d="m7 7 10 10"></path>
                                    <path d="M17 7v10H7"></path>
                                </svg>
                            )}
                        </span>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Compare to last month</div>
                </section>
            ))}
        </div>
    );
}

export default PricingComponent;
