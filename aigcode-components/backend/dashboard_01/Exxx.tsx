import React from 'react';
import { Progress } from '@ui/progress';
import { Smile, Meh, Frown } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@ui/tooltip";

type CustomerSatisfactionData = {
    positive: number;
    neutral: number;
    negative: number;
    totalResponses: number;
};

type PricingComponentProps = {
    satisfactionData?: CustomerSatisfactionData;
};

function PricingComponent({
    satisfactionData = {
        positive: 80,
        neutral: 15,
        negative: 5,
        totalResponses: 156,
    },
}: PricingComponentProps) {
    return (
        <div className="max-w-8xl mx-auto w-full px-6 py-6 bg-white rounded-lg">
            <TooltipProvider>
                <section className="flex h-full flex-col">
                    <h2 className="text-base flex items-center text-gray-900 font-medium mb-8">
                        <Smile className="text-blue-600 mr-2 shrink-0 w-5 h-5" />
                        Customer Satisfication
                    </h2>
                    <div className="grid grid-cols-2 gap-x-16 gap-y-8">
                        <div className="flex flex-col items-start justify-center">
                            <div className="text-xs text-blue-600 font-medium mb-1">Responses Received</div>
                            <div className="text-3xl font-bold text-gray-900">{satisfactionData.totalResponses} Customers</div>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <Smile className="h-6 w-6 text-green-500" />
                            <div className="flex-1">
                                <div className="flex justify-between mb-1">
                                    <div className="text-xs text-blue-600 font-medium">Positive</div>
                                    <div className="text-xs text-gray-500 font-medium">{satisfactionData.positive}%</div>
                                </div>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <div>
                                            <Progress value={satisfactionData.positive} className="h-2 bg-gray-100" />
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        正向反馈：{satisfactionData.positive}%
                                    </TooltipContent>
                                </Tooltip>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <Meh className="h-6 w-6 text-yellow-400" />
                            <div className="flex-1">
                                <div className="flex justify-between mb-1">
                                    <div className="text-xs text-blue-600 font-medium">Neutral</div>
                                    <div className="text-xs text-gray-500 font-medium">{satisfactionData.neutral}%</div>
                                </div>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <div>
                                            <Progress value={satisfactionData.neutral} className="h-2 bg-gray-100" />
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        中性反馈：{satisfactionData.neutral}%
                                    </TooltipContent>
                                </Tooltip>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <Frown className="h-6 w-6 text-red-500" />
                            <div className="flex-1">
                                <div className="flex justify-between mb-1">
                                    <div className="text-xs text-blue-600 font-medium">Negative</div>
                                    <div className="text-xs text-gray-500 font-medium">{satisfactionData.negative}%</div>
                                </div>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <div>
                                            <Progress value={satisfactionData.negative} className="h-2 bg-gray-100" />
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        负向反馈：{satisfactionData.negative}%
                                    </TooltipContent>
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                </section>
            </TooltipProvider>
        </div>
    );
}

export default PricingComponent;
