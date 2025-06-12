import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@ui/card';
import { Input } from '@ui/input';
import { Button } from '@ui/button';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@ui/table';
import { Checkbox } from '@ui/checkbox';
import { Avatar, AvatarImage } from '@ui/avatar';
import { Badge } from '@ui/badge';
import { ChevronDown, ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  client: {
    name: string;
    avatar: string;
  };
  startDate: string;
  deadline: string;
  status: 'active' | 'cancel' | 'completed' | 'pending';
  progress: number;
}

interface PricingComponentProps {
  projects?: Project[];
}

export default function PricingComponent({
  projects = [
    {
      id: '1',
      name: 'Product Development',
      client: {
        name: 'Kevin Heal',
        avatar: 'https://bundui-images.netlify.app/avatars/01.png',
      },
      startDate: '20/03/2024',
      deadline: '05/04/2024',
      status: 'active',
      progress: 30,
    },
    {
      id: '2',
      name: 'New Office Building',
      client: {
        name: 'Sarah Johnson',
        avatar: 'https://bundui-images.netlify.app/avatars/02.png',
      },
      startDate: '15/03/2024',
      deadline: '10/04/2024',
      status: 'cancel',
      progress: 60,
    },
    {
      id: '3',
      name: 'Mobile app design',
      client: {
        name: 'Michael Chen',
        avatar: 'https://bundui-images.netlify.app/avatars/03.png',
      },
      startDate: '10/03/2024',
      deadline: '01/04/2024',
      status: 'completed',
      progress: 100,
    },
    {
      id: '4',
      name: 'Website & Blog',
      client: {
        name: 'Emily Rodriguez',
        avatar: 'https://bundui-images.netlify.app/avatars/04.png',
      },
      startDate: '05/03/2024',
      deadline: '20/03/2024',
      status: 'pending',
      progress: 50,
    },
    {
      id: '5',
      name: 'Marketing Campaign',
      client: {
        name: 'David Wilson',
        avatar: 'https://bundui-images.netlify.app/avatars/05.png',
      },
      startDate: '01/03/2024',
      deadline: '15/04/2024',
      status: 'active',
      progress: 45,
    },
    {
      id: '6',
      name: 'E-commerce Platform',
      client: {
        name: 'Jessica Lee',
        avatar: 'https://bundui-images.netlify.app/avatars/06.png',
      },
      startDate: '25/02/2024',
      deadline: '10/05/2024',
      status: 'pending',
      progress: 20,
    },
  ],
}: PricingComponentProps) {
  const [filter, setFilter] = React.useState('');
  const [selectedRows, setSelectedRows] = React.useState<string[]>([]);
  const [selectAll, setSelectAll] = React.useState(false);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      setSelectedRows(projects.map((project) => project.id));
    }
    setSelectAll(!selectAll);
  };

  const handleSelectRow = (id: string) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'cancel':
        return 'bg-red-100 text-red-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return '';
    }
  };

  return (
    <Card className="bg-white text-gray-900 flex flex-col gap-0 rounded-lg border border-gray-200 py-0 mt-0 shadow-none">
      <CardHeader className="px-6 py-4 pb-0">
        <CardTitle className="text-base font-medium">Recent Projects</CardTitle>
      </CardHeader>
      <CardContent className="px-6 pt-4">
        <div className="mb-4 flex items-center gap-4">
          <Input
            className="h-9 max-w-sm border border-gray-200 rounded-md text-sm"
            placeholder="Filter projects..."
            value={filter}
            onChange={handleFilterChange}
          />
          <Button
            variant="outline"
            className="ml-auto h-9 px-4 py-2 border border-gray-200 bg-white text-gray-900 hover:bg-gray-50 text-sm font-medium rounded-md"
          >
            Columns <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="rounded-md border border-gray-200">
          <div className="relative w-full overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-gray-200 hover:bg-gray-50">
                  <TableHead className="h-10 px-4 py-2 text-left font-medium text-gray-500 text-sm">
                    <Checkbox
                      checked={selectAll}
                      onCheckedChange={handleSelectAll}
                      aria-label="Select all"
                      className="border-gray-300 rounded-sm"
                    />
                  </TableHead>
                  <TableHead className="h-10 px-4 py-2 text-left font-medium text-gray-500 text-sm">
                    Project Name
                  </TableHead>
                  <TableHead className="h-10 px-4 py-2 text-left font-medium text-gray-500 text-sm">
                    Client Name
                  </TableHead>
                  <TableHead className="h-10 px-4 py-2 text-left font-medium text-gray-500 text-sm">
                    Start Date
                  </TableHead>
                  <TableHead className="h-10 px-4 py-2 text-left font-medium text-gray-500 text-sm">Deadline</TableHead>
                  <TableHead className="h-10 px-4 py-2 text-left font-medium text-gray-500 text-sm">Status</TableHead>
                  <TableHead className="h-10 px-4 py-2 text-left font-medium text-gray-500 text-sm">Progress</TableHead>
                  <TableHead className="h-10 px-4 py-2 text-left font-medium text-gray-500 text-sm"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {projects.map((project) => (
                  <TableRow key={project.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <TableCell className="p-4">
                      <Checkbox
                        checked={selectedRows.includes(project.id)}
                        onCheckedChange={() => handleSelectRow(project.id)}
                        aria-label="Select row"
                        className="border-gray-300 rounded-sm"
                      />
                    </TableCell>
                    <TableCell className="p-4">{project.name}</TableCell>
                    <TableCell className="p-4">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage
                            src={project.client.avatar}
                            alt={project.client.name}
                            className="aspect-square h-full w-full"
                          />
                        </Avatar>
                        {project.client.name}
                      </div>
                    </TableCell>
                    <TableCell className="p-4">{project.startDate}</TableCell>
                    <TableCell className="p-4">{project.deadline}</TableCell>
                    <TableCell className="p-4">
                      <Badge
                        className={`capitalize px-2 py-0.5 text-xs font-medium rounded-md border-0 ${getStatusColor(project.status)}`}
                      >
                        {project.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="p-4">
                      <div className="flex items-center gap-2">
                        <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="absolute h-full bg-black transition-all"
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-gray-500 text-sm">%{project.progress}</span>
                      </div>
                    </TableCell>
                    <TableCell className="p-4">
                      <div className="text-right">
                        <Button variant="ghost" size="icon" className="h-8 w-8 p-0 hover:bg-gray-100 rounded-md">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
        <div className="flex items-center justify-between space-x-2 pt-4">
          <div className="text-gray-500 text-sm">
            {selectedRows.length} of {projects.length} row(s) selected.
          </div>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="icon"
              disabled
              className="h-9 w-9 border border-gray-200 bg-white text-gray-400 rounded-md"
              aria-label="Previous page"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9 border border-gray-200 bg-white text-gray-900 hover:bg-gray-50 rounded-md"
              aria-label="Next page"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
