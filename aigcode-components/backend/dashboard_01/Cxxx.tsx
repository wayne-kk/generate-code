import React, { useState } from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Legend } from 'recharts';

interface PricingComponentProps {
    title?: string;
    salesCount?: number;
    salesLabel?: string;
    data?: Array<{
        name: string;
        value: number;
        color: string;
    }>;
}

function PricingComponent({
    title = 'Conversions',
    salesCount = 17220,
    salesLabel = 'Sales',
    data = [
        { name: 'Yogyakarta', value: 12320, color: '#1a56db' },
        { name: 'Bandung', value: 6260, color: '#06b6d4' },
        { name: 'Jakarta', value: 8320, color: '#f97316' },
        { name: 'Kebumen', value: 11320, color: '#10b981' },
        { name: 'Kebumen1', value: 11320, color: '#10b985' },
        { name: 'Kebumen2', value: 11320, color: '#10b985' }
    ],
}: PricingComponentProps) {
    // 控制每个数据项的显示/隐藏
    const [visible, setVisible] = useState(() => data.map(() => true));

    // Legend点击交互
    const handleLegendClick = (e: any) => {
        const idx = data.findIndex(item => item.name === e.value);
        if (idx !== -1) {
            setVisible(prev => {
                const next = [...prev];
                next[idx] = !next[idx];
                return next;
            });
        }
    };

    // 只显示被激活的数据
    const filteredData = data.map((item, idx) =>
        visible[idx] ? item : { ...item, value: 0 }
    );

    return (
        <div className="w-full bg-white p-6">
            <div className="flex flex-col h-full items-center">
                <h2 className="text-base font-medium flex items-center text-gray-900 mb-3">
                    <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center mr-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="m15 9-6 6"></path>
                            <path d="M9 9h.01"></path>
                            <path d="M15 15h.01"></path>
                        </svg>
                    </span>
                    {title}
                </h2>

                <div className="mb-5">
                    <span className="text-3xl font-bold text-gray-900 mr-2">{salesCount.toLocaleString()}</span>
                    <span className="text-gray-400">{salesLabel}</span>
                </div>

                <div className="relative h-72 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <RadarChart data={filteredData} cx="50%" cy="50%" outerRadius="80%">
                            <PolarGrid />
                            <PolarAngleAxis dataKey="name" />
                            <PolarRadiusAxis />
                            <Radar
                                name={title}
                                dataKey="value"
                                stroke="#1a56db"
                                fill="#1a56db"
                                fillOpacity={0.4}
                            />
                            <Legend
                                verticalAlign="bottom"
                                align="center"
                                iconType="circle"
                                iconSize={10}
                                onClick={handleLegendClick}
                                payload={data.map((item, idx) => ({
                                    value: item.name,
                                    type: 'circle',
                                    color: item.color,
                                    id: item.name,
                                    inactive: !visible[idx],
                                }))}
                            />
                        </RadarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}

export default PricingComponent;