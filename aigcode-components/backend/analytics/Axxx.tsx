import React from 'react';
import { Card, CardHeader, CardContent } from '@ui/card';
import { Badge } from '@ui/badge';

interface AnalyticsItem {
    value: string;
    label: string;
}

interface WebsiteAnalyticsProps {
    title?: string;
    description?: string;
    analyticsItems?: AnalyticsItem[];
}

const WebsiteAnalytics: React.FC<WebsiteAnalyticsProps> = ({
    title = 'Website Analytics',
    description = 'Total 28.5% Conversion Rate',
    analyticsItems = [
        { value: '432', label: 'Direct' },
        { value: '216', label: 'Organic' },
        { value: '29%', label: 'Sessions' },
        { value: '2.3K', label: 'Page Views' },
        { value: '1.6K', label: 'Leads' },
        { value: '8%', label: 'Conversions' },
    ],
}) => {
    return (
        <div className="lg:col-span-4 w-full max-w-[533px]">
            <Card className="flex flex-col gap-4 py-6 h-full rounded-xl border border-gray-200 bg-white shadow-sm">
                <CardHeader className="px-6 pb-0 space-y-1">
                    <h3 className="font-semibold text-[16px] leading-tight text-gray-900">{title}</h3>
                    <p className="text-gray-500 text-sm font-normal">{description}</p>
                </CardHeader>
                <CardContent className="px-6 pt-2">
                    <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                        {analyticsItems.map((item, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <Badge
                                    variant="secondary"
                                    className="w-12 h-6 flex items-center justify-center rounded-md bg-gray-200 text-gray-700 font-medium text-xs border-0 px-2 py-1"
                                >
                                    {item.value}
                                </Badge>
                                <span className="text-gray-700 text-sm">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default WebsiteAnalytics