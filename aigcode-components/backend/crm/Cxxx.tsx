import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@ui/card';
import { Button } from '@ui/button';
import { Checkbox } from '@ui/checkbox';

type Task = {
    title: string;
    description: string;
    priority: 'High' | 'Medium' | 'Low';
    dueDate: string;
    completed: boolean;
};

type TasksComponentProps = {
    title?: string;
    description?: string;
    tasks?: Task[];
    onAddTask?: () => void;
};

function TasksComponent({
    title = 'Tasks',
    description = 'Track and manage your upcoming tasks.',
    tasks = [
        {
            title: 'Follow up with Acme Inc.',
            description: 'Send proposal and schedule meeting',
            priority: 'High',
            dueDate: 'Today',
            completed: false,
        },
        {
            title: 'Prepare quarterly report',
            description: 'Compile sales data and forecasts',
            priority: 'Medium',
            dueDate: 'Tomorrow',
            completed: false,
        },
        {
            title: 'Update customer profiles',
            description: 'Verify contact information and preferences',
            priority: 'Low',
            dueDate: 'Oct 15',
            completed: true,
        },
    ],
    onAddTask = () => { },
}: TasksComponentProps) {
    return (
        <Card className="flex flex-col w-full max-w-[534px] bg-white rounded-xl border border-gray-200 shadow-sm">
            <CardHeader className="px-6 pt-6 pb-0 flex flex-row justify-between items-start">
                <div>
                    <CardTitle className="text-lg font-semibold text-gray-900">{title}</CardTitle>
                    <CardDescription className="text-sm text-gray-500 mt-1">{description}</CardDescription>
                </div>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={onAddTask}
                    className="h-9 px-4 rounded-md border border-gray-200 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center gap-1.5"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-gray-500"
                    >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M8 12h8"></path>
                        <path d="M12 8v8"></path>
                    </svg>
                    Add Task
                </Button>
            </CardHeader>
            <CardContent className="px-6 py-6 space-y-4">
                {tasks.map((task, index) => (
                    <div
                        key={index}
                        className={`flex items-start space-x-3 rounded-md border border-gray-200 p-4 ${task.completed ? 'bg-gray-50' : 'bg-white'}`}
                    >
                        <Checkbox
                            checked={task.completed}
                            className="mt-0.5 h-5 w-5 rounded border-gray-300"
                            aria-label={`Mark ${task.title} as ${task.completed ? 'incomplete' : 'complete'}`}
                        />
                        <div className="space-y-1">
                            <p className={`text-sm font-medium ${task.completed ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
                                {task.title}
                            </p>
                            <p className={`text-sm text-gray-500 ${task.completed ? 'line-through' : ''}`}>{task.description}</p>
                            <div className="flex items-center pt-1.5">
                                <div
                                    className={`mr-2 rounded-full px-2.5 py-0.5 text-xs font-medium ${task.priority === 'High'
                                            ? 'bg-red-100 text-red-700'
                                            : task.priority === 'Medium'
                                                ? 'bg-amber-100 text-amber-700'
                                                : 'bg-green-100 text-green-700'
                                        }`}
                                >
                                    {task.priority}
                                </div>
                                <span className="text-xs text-gray-500">Due {task.dueDate}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}

export default TasksComponent;