import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@ui/card';
import { Button } from '@ui/button';
import { Avatar, AvatarImage } from '@ui/avatar';
import { ChevronDown } from 'lucide-react';

interface TeamMember {
    name: string;
    email: string;
    avatar: string;
    role: string;
}

interface PricingComponentProps {
    title?: string;
    description?: string;
    teamMembers?: TeamMember[];
}

function PricingComponent({
    title = 'Team Members',
    description = 'Invite your team members to collaborate.',
    teamMembers = [
        {
            name: 'Toby Belhome',
            email: 'contact@bundui.io',
            avatar: 'https://bundui-images.netlify.app/avatars/01.png',
            role: 'Viewer',
        },
        {
            name: 'Jackson Lee',
            email: 'pre@example.com',
            avatar: 'https://bundui-images.netlify.app/avatars/02.png',
            role: 'Developer',
        },
        {
            name: 'Hally Gray',
            email: 'hally@site.com',
            avatar: 'https://bundui-images.netlify.app/avatars/03.png',
            role: 'Viewer',
        },
    ],
}: PricingComponentProps) {
    return (
        <Card className="flex flex-col gap-6 py-6 bg-white border border-solid rounded-xl w-full max-w-[533px] shadow-none">
            <CardHeader className="px-6 pb-0 pt-0 space-y-1">
                <CardTitle className="text-base font-semibold">{title}</CardTitle>
                <CardDescription className="text-sm text-gray-500">{description}</CardDescription>
            </CardHeader>
            <CardContent className="px-6 grid gap-5">
                {teamMembers.map((member, index) => (
                    <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <Avatar className="h-8 w-8 rounded-full">
                                <AvatarImage src={member.avatar} alt={member.name} className="aspect-square" />
                            </Avatar>
                            <div>
                                <p className="text-sm font-medium leading-tight">{member.name}</p>
                                <p className="text-xs text-gray-500 mt-0.5">{member.email}</p>
                            </div>
                        </div>
                        <Button
                            variant="outline"
                            size="sm"
                            className="ml-auto h-8 px-4 py-0 text-sm font-normal bg-white border-gray-200 shadow-none hover:bg-gray-50"
                        >
                            {member.role}
                            <ChevronDown className="text-gray-400 ml-1.5 h-3.5 w-3.5" />
                        </Button>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}

export default PricingComponent;