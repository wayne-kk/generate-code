import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@ui/card';
import { Button } from '@ui/button';
import { Badge } from '@ui/badge';
import { CirclePlus, CircleCheck, ArrowRight } from 'lucide-react';

interface ReminderItem {
  priority: 'low' | 'medium' | 'high';
  completed: boolean;
  time: string;
  description: string;
  category: string;
}

interface ReminderComponentProps {
  reminders?: ReminderItem[];
  onAddReminder?: () => void;
  onShowMore?: () => void;
  onToggleComplete?: (index: number) => void;
}

export default function PricingComponent({
  reminders = [
    {
      priority: 'low',
      completed: false,
      time: 'Today, 12:30',
      description: 'Create a design training for beginners.',
      category: 'Design Education',
    },
    {
      priority: 'medium',
      completed: true,
      time: 'Today, 10:00',
      description: 'Have a meeting with the new design team.',
      category: 'Meeting',
    },
    {
      priority: 'high',
      completed: false,
      time: 'Tomorrow, 16:30',
      description: 'Respond to customer support emails.',
      category: 'Customer Support',
    },
  ],
  onAddReminder = () => { },
  onShowMore = () => { },
  onToggleComplete = () => { },
}: ReminderComponentProps) {
  const getPriorityColor = (priority: string): string => {
    switch (priority) {
      case 'low':
        return 'bg-gray-400';
      case 'medium':
        return 'bg-orange-500';
      case 'high':
        return 'bg-red-600';
      default:
        return 'bg-gray-400';
    }
  };

  const getPriorityDot = (priority: string): React.ReactNode => {
    const color = priority === 'low' ? 'text-gray-400' : priority === 'medium' ? 'text-orange-500' : 'text-red-600';

    return (
      <span className={`inline-block w-2 h-2 rounded-full ${color} mr-2`}>
        {priority === 'low' && '●'}
        {priority === 'medium' && '●'}
        {priority === 'high' && '●'}
      </span>
    );
  };

  return (
    <Card className="flex flex-col rounded-xl border border-gray-200 bg-white text-gray-900 w-full max-w-[808px] shadow-none">
      <CardHeader className="flex flex-row items-center justify-between px-6 pt-6 pb-0">
        <CardTitle className="text-lg font-semibold">Reminder</CardTitle>
        <Button
          variant="outline"
          className="h-9 px-4 py-2 flex items-center gap-2 rounded-md border border-gray-200 bg-white hover:bg-gray-50"
          onClick={onAddReminder}
          aria-label="Set Reminder"
        >
          <CirclePlus className="h-4 w-4" />
          Set Reminder
        </Button>
      </CardHeader>
      <CardContent className="px-6 pt-6">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {reminders.map((reminder, index) => (
            <Card key={index} className="flex flex-col p-5 rounded-lg border border-gray-200 bg-white shadow-none">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  {reminder.priority === 'low' && (
                    <span className="inline-block w-2 h-2 rounded-full bg-gray-400 mr-2"></span>
                  )}
                  {reminder.priority === 'medium' && (
                    <span className="inline-block w-2 h-2 rounded-full bg-orange-500 mr-2"></span>
                  )}
                  {reminder.priority === 'high' && (
                    <span className="inline-block w-2 h-2 rounded-full bg-red-600 mr-2"></span>
                  )}
                  <span className="text-base font-semibold capitalize">{reminder.priority}</span>
                </div>
                <button
                  className="flex items-center justify-center"
                  onClick={() => onToggleComplete(index)}
                  aria-label={`Mark as ${reminder.completed ? 'incomplete' : 'complete'}`}
                >
                  <CircleCheck className={`h-5 w-5 ${reminder.completed ? 'text-green-600' : 'text-gray-300'}`} />
                </button>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-gray-500">{reminder.time}</div>
                <div className="text-sm text-gray-900 mb-4">{reminder.description}</div>
                <Badge className="px-2.5 py-0.5 text-xs font-medium rounded-md bg-white border border-gray-200 text-gray-800 hover:bg-white">
                  {reminder.category}
                </Badge>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-4 text-right">
          <Button
            variant="link"
            className="text-gray-500 hover:text-gray-900 flex items-center gap-1 ml-auto font-normal"
            onClick={onShowMore}
            aria-label="Show more reminders"
          >
            Show the other 10 reminders
            <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}