import React from 'react';
import { Card, CardContent } from '@ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@ui/table';
import { Badge } from '@ui/badge';

export interface ProductData {
  id: string;
  assignee: {
    name: string;
    role: string;
  };
  productName: string;
  priority: 'Low' | 'Medium' | 'High' | 'Critical';
  budget: string;
}

interface PricingComponentProps {
  products?: ProductData[];
  title?: string;
}

function PricingComponent({
  title = 'Product Performance',
  products = [
    {
      id: '1',
      assignee: {
        name: 'Sunil Joshi',
        role: 'Web Designer',
      },
      productName: 'Elite Admin',
      priority: 'Low' as const,
      budget: '$3.9k',
    },
    {
      id: '2',
      assignee: {
        name: 'Andrew McDownland',
        role: 'Project Manager',
      },
      productName: 'Real Homes WP Theme',
      priority: 'Medium' as const,
      budget: '$24.5k',
    },
    {
      id: '3',
      assignee: {
        name: 'Christopher Jamil',
        role: 'Project Manager',
      },
      productName: 'MedicalPro WP Theme',
      priority: 'High' as const,
      budget: '$12.8k',
    },
    {
      id: '4',
      assignee: {
        name: 'Nirav Joshi',
        role: 'Frontend Engineer',
      },
      productName: 'Hosting Press HTML',
      priority: 'Critical' as const,
      budget: '$2.4k',
    },
  ],
}: PricingComponentProps) {
  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'Low':
        return <Badge className="bg-blue-500 text-white rounded-full px-5 py-0.5 text-xs font-normal">Low</Badge>;
      case 'Medium':
        return <Badge className="bg-sky-400 text-white rounded-full px-5 py-0.5 text-xs font-normal">Medium</Badge>;
      case 'High':
        return <Badge className="bg-orange-400 text-white rounded-full px-5 py-0.5 text-xs font-normal">High</Badge>;
      case 'Critical':
        return (
          <Badge className="bg-emerald-400 text-white rounded-full px-5 py-0.5 text-xs font-normal">Critical</Badge>
        );
      default:
        return (
          <Badge className="bg-gray-400 text-white rounded-full px-5 py-0.5 text-xs font-normal">{priority}</Badge>
        );
    }
  };

  return (
    <div className="w-full flex">
      <Card className="bg-white rounded-lg shadow-md border border-gray-100 flex-1">
        <CardContent className="p-6">
          <div className="mb-8">
            <h5 className="text-lg font-medium text-gray-800">{title}</h5>
          </div>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-gray-200">
                  <TableCell className="py-4 pl-0 pr-4 text-left">
                    <h6 className="text-sm font-medium text-gray-600">Id</h6>
                  </TableCell>
                  <TableCell className="py-4 px-4 text-left">
                    <h6 className="text-sm font-medium text-gray-600">Assigned</h6>
                  </TableCell>
                  <TableCell className="py-4 px-4 text-left">
                    <h6 className="text-sm font-medium text-gray-600">Name</h6>
                  </TableCell>
                  <TableCell className="py-4 px-4 text-left">
                    <h6 className="text-sm font-medium text-gray-600">Priority</h6>
                  </TableCell>
                  <TableCell className="py-4 pl-4 pr-0 text-right">
                    <h6 className="text-sm font-medium text-gray-600">Budget</h6>
                  </TableCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id} className="border-b border-gray-100">
                    <TableCell className="py-5 pl-0 pr-4">
                      <p className="text-gray-700">{product.id}</p>
                    </TableCell>
                    <TableCell className="py-5 px-4">
                      <div>
                        <h6 className="text-sm font-medium text-gray-800">{product.assignee.name}</h6>
                        <p className="text-xs text-gray-500 mt-0.5">{product.assignee.role}</p>
                      </div>
                    </TableCell>
                    <TableCell className="py-5 px-4">
                      <h6 className="text-sm font-medium text-blue-600">{product.productName}</h6>
                    </TableCell>
                    <TableCell className="py-5 px-4">{getPriorityBadge(product.priority)}</TableCell>
                    <TableCell className="py-5 pl-4 pr-0 text-right">
                      <h6 className="text-base font-medium text-gray-800">{product.budget}</h6>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default PricingComponent;