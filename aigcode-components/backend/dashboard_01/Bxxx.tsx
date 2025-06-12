import React, { useState } from 'react';
import { Button } from '@ui/button';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Calendar } from '@ui/calendar';
import { TimerIcon } from 'lucide-react';

const allChartData = [
    { date: '2023-12-18', created: 3800, resolved: 2100, label: '2023-12-18' },
    { date: '2023-12-19', created: 3900, resolved: 2200, label: '2023-12-19' },
    { date: '2023-12-20', created: 4000, resolved: 2300, label: '2023-12-20' },
    { date: '2023-12-21', created: 3800, resolved: 2200, label: '2023-12-21' },
    { date: '2023-12-22', created: 3700, resolved: 2000, label: '2023-12-22' },
    { date: '2023-12-23', created: 3600, resolved: 2000, label: '2023-12-23' },
    { date: '2023-12-24', created: 3900, resolved: 2300, label: '2023-12-24' },
    { date: '2023-12-25', created: 4000, resolved: 2400, label: '2023-12-25' },
    { date: '2023-12-26', created: 4200, resolved: 2500, label: '2023-12-26' },
    { date: '2023-12-27', created: 4300, resolved: 2600, label: '2023-12-27' },
    { date: '2023-12-28', created: 4400, resolved: 2700, label: '2023-12-28' },
    { date: '2023-12-29', created: 4500, resolved: 2800, label: '2023-12-29' },
    { date: '2023-12-30', created: 4600, resolved: 2900, label: '2023-12-30' },
    { date: '2023-12-31', created: 4700, resolved: 3000, label: '2023-12-31' },
    { date: '2024-01-01', created: 4800, resolved: 3100, label: '2024-01-01' },
    { date: '2024-01-02', created: 4900, resolved: 3200, label: '2024-01-02' },
    { date: '2024-01-03', created: 5000, resolved: 3300, label: '2024-01-03' },
    { date: '2024-01-04', created: 5100, resolved: 3400, label: '2024-01-04' },
    { date: '2024-01-05', created: 5200, resolved: 3500, label: '2024-01-05' },
    { date: '2024-01-06', created: 5300, resolved: 3600, label: '2024-01-06' },
    { date: '2024-01-07', created: 5400, resolved: 3700, label: '2024-01-07' },
    { date: '2024-01-08', created: 4500, resolved: 3800, label: '2024-01-08' },
    { date: '2024-01-09', created: 4600, resolved: 3900, label: '2024-01-09' },
    { date: '2024-01-10', created: 4700, resolved: 4000, label: '2024-01-10' },
    { date: '2024-01-11', created: 5800, resolved: 4100, label: '2024-01-11' },
    { date: '2024-01-12', created: 5900, resolved: 4200, label: '2024-01-12' },
    { date: '2024-01-13', created: 3000, resolved: 4300, label: '2024-01-13' },
    { date: '2024-01-14', created: 6100, resolved: 4400, label: '2024-01-14' },
    { date: '2024-01-15', created: 6200, resolved: 4500, label: '2024-01-15' },
    { date: '2024-01-16', created: 6300, resolved: 4600, label: '2024-01-16' },
    { date: '2024-01-17', created: 3400, resolved: 4700, label: '2024-01-17' },
    { date: '2024-01-18', created: 3500, resolved: 4800, label: '2024-01-18' },
    { date: '2024-01-19', created: 3600, resolved: 4900, label: '2024-01-19' },
];

function formatDate(date: Date) {
    return date.toISOString().slice(0, 10);
}

function formatRangeLabel(start: Date | undefined, end: Date | undefined) {
    if (!start || !end) return "选择日期区间";
    return `${start.toLocaleDateString()} - ${end.toLocaleDateString()}`;
}

function PricingComponent() {
    const [range, setRange] = useState<{ from: Date | undefined; to: Date | undefined }>({
        from: new Date('2023-12-18'),
        to: new Date('2023-12-24'),
    });
    const [showCalendar, setShowCalendar] = useState(false);

    // 过滤数据
    const chartData = allChartData.filter((item) => {
        const d = new Date(item.date);
        return (
            (!range.from || d >= range.from) &&
            (!range.to || d <= range.to)
        );
    });

    // 计算平均值
    const avgTicketsCreated =
        chartData.length > 0
            ? Math.round(chartData.reduce((sum, d) => sum + d.created, 0) / chartData.length)
            : 0;
    const avgTicketsResolved =
        chartData.length > 0
            ? Math.round(chartData.reduce((sum, d) => sum + d.resolved, 0) / chartData.length)
            : 0;

    return (
        <div className="max-w-8xl mx-auto w-full px-6 sm:px-10 lg:px-14 py-4 bg-white text-[#02081A]">
            <section className="flex h-full flex-col gap-2">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <h2 className="text-base flex items-center font-medium">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#1D4ED8"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mr-2 shrink-0"
                        >
                            <path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"></path>
                            <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                            <path d="M3 15h6"></path>
                            <path d="M6 12v6"></path>
                        </svg>
                        Average Tickets Created
                    </h2>
                    <div className="relative">
                        <Button
                            variant="outline"
                            className="h-10 px-4 py-2 w-[276px] justify-start text-left font-normal border border-gray-200 bg-white text-gray-800 hover:bg-gray-50 rounded-md"
                            aria-label="Select date range"
                            onClick={() => setShowCalendar((v) => !v)}
                        >
                            <TimerIcon />
                            {formatRangeLabel(range.from, range.to)}
                        </Button>
                        {showCalendar && (
                            <div
                                className="absolute z-10 mt-2 right-0"
                                onBlur={(e) => {
                                    // 如果失焦到日历面板外部，则关闭
                                    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                                        setShowCalendar(false);
                                    }
                                }}
                            >
                                <Calendar
                                    mode="range"
                                    selected={range}
                                    onSelect={(val) => {
                                        setRange(val as { from: Date | undefined; to: Date | undefined });
                                    }}
                                    numberOfMonths={2}
                                    defaultMonth={range.from ?? undefined}
                                />
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex flex-wrap">
                    <div className="my-4 flex w-52 shrink-0 flex-col justify-center gap-8 pr-6">
                        <section className="flex flex-col">
                            <div className="mb-1 flex items-center gap-2">
                                <div className="h-3 w-3 rounded-sm bg-[#60C2FB]"></div>
                                <h2 className="text-sm text-gray-500 font-normal">Avg. Tickets Created</h2>
                            </div>
                            <div className="pl-5 text-xl font-medium">{avgTicketsCreated.toLocaleString()}</div>
                        </section>
                        <section className="flex flex-col">
                            <div className="mb-1 flex items-center gap-2">
                                <div className="h-3 w-3 rounded-sm bg-[#3161F8]"></div>
                                <h2 className="text-sm text-gray-500 font-normal">Avg. Tickets Resolved</h2>
                            </div>
                            <div className="pl-5 text-xl font-medium">{avgTicketsResolved.toLocaleString()}</div>
                        </section>
                    </div>
                    <div className="relative h-96 min-w-[320px] flex-1">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }} barGap={0} barSize={40}>
                                <XAxis
                                    dataKey="label"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fontSize: 12, fill: '#6B7280' }}
                                    padding={{ left: 10, right: 10 }}
                                />
                                <YAxis
                                    domain={[0, 5000]}
                                    ticks={[0, 1000, 2000, 3000, 4000, 5000]}
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fontSize: 12, fill: '#6B7280' }}
                                    width={40}
                                />
                                <Tooltip
                                    cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
                                    contentStyle={{
                                        borderRadius: '4px',
                                        border: 'none',
                                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                                    }}
                                />
                                <Bar dataKey="created" fill="#60C2FB" radius={[4, 4, 0, 0]} stackId="stack" />
                                <Bar dataKey="resolved" fill="#3161F8" radius={[0, 0, 4, 4]} stackId="stack" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default PricingComponent;