import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@ui/card';
import { Input } from '@ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@ui/table';
import { Checkbox } from '@ui/checkbox';
import { Badge } from '@ui/badge';
import { Button } from '@ui/button';
import { DropdownMenu, DropdownMenuTrigger } from '@ui/dropdown-menu';
import { EllipsisIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

interface Payment {
  id: string;
  customer: {
    firstName: string;
    lastName: string;
  };
  email: string;
  amount: number;
  status: 'success' | 'processing' | 'failed';
}

interface PricingComponentProps {
  payments?: Payment[];
  selectedRows?: string[];
  onRowSelect?: (id: string) => void;
  onSelectAll?: () => void;
  onFilter?: (value: string) => void;
  onNextPage?: () => void;
  onPrevPage?: () => void;
  totalRows?: number;
}

function PricingComponent({
  payments = [
    {
      id: '1',
      customer: { firstName: 'Kenneth', lastName: 'Thompson' },
      email: 'ken99@yahoo.com',
      amount: 316,
      status: 'success',
    },
    {
      id: '2',
      customer: { firstName: 'Abraham', lastName: 'Lincoln' },
      email: 'abe45@gmail.com',
      amount: 242,
      status: 'success',
    },
    {
      id: '3',
      customer: { firstName: 'Monserrat', lastName: 'Rodriguez' },
      email: 'monserrat44@gmail.com',
      amount: 837,
      status: 'processing',
    },
    {
      id: '4',
      customer: { firstName: 'Silas', lastName: 'Johnson' },
      email: 'silas22@gmail.com',
      amount: 874,
      status: 'success',
    },
    {
      id: '5',
      customer: { firstName: 'Carmella', lastName: 'DeVito' },
      email: 'carmella@hotmail.com',
      amount: 721,
      status: 'failed',
    },
    {
      id: '6',
      customer: { firstName: 'Maria', lastName: 'Garcia' },
      email: 'maria@gmail.com',
      amount: 529,
      status: 'success',
    },
    {
      id: '7',
      customer: { firstName: 'James', lastName: 'Wilson' },
      email: 'james34@outlook.com',
      amount: 438,
      status: 'processing',
    },
    {
      id: '8',
      customer: { firstName: 'Sarah', lastName: 'Jones' },
      email: 'sarah.j@yahoo.com',
      amount: 692,
      status: 'success',
    },
  ],
  selectedRows = [],
  onRowSelect = () => {},
  onSelectAll = () => {},
  onFilter = () => {},
  onNextPage = () => {},
  onPrevPage = () => {},
  totalRows = 16,
}: PricingComponentProps) {
  const [filterValue, setFilterValue] = React.useState('');

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <div className="w-full max-w-[1082px] bg-white rounded-lg border border-gray-100 shadow-sm">
      <div className="p-6 pb-4">
        <h2 className="text-lg font-medium text-gray-900">Latest Payments</h2>
      </div>

      <div className="px-6 pb-4">
        <Input
          placeholder="Filter payments..."
          value={filterValue}
          onChange={handleFilterChange}
          className="w-full max-w-sm h-10 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm"
        />
      </div>

      <div className="px-6 pb-6">
        <div className="border rounded-md overflow-hidden">
          <Table className="w-full">
            <TableHeader>
              <TableRow className="bg-gray-50 border-b">
                <TableHead className="w-10 py-3 px-4">
                  <Checkbox
                    aria-label="Select all"
                    onCheckedChange={onSelectAll}
                    className="h-4 w-4 rounded border-gray-300"
                  />
                </TableHead>
                <TableHead className="py-3 px-4 text-sm font-medium text-gray-500">Customer</TableHead>
                <TableHead className="py-3 px-4 text-sm font-medium text-gray-500">Email</TableHead>
                <TableHead className="py-3 px-4 text-sm font-medium text-gray-500 text-right">Amount</TableHead>
                <TableHead className="py-3 px-4 text-sm font-medium text-gray-500">Status</TableHead>
                <TableHead className="w-10 py-3 px-4"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payments.map((payment) => (
                <TableRow key={payment.id} className="border-b hover:bg-gray-50">
                  <TableCell className="w-10 py-3 px-4">
                    <Checkbox
                      aria-label="Select row"
                      checked={selectedRows.includes(payment.id)}
                      onCheckedChange={() => onRowSelect(payment.id)}
                      className="h-4 w-4 rounded border-gray-300"
                    />
                  </TableCell>
                  <TableCell className="py-3 px-4 text-sm text-gray-900">
                    {payment.customer.firstName} {payment.customer.lastName}
                  </TableCell>
                  <TableCell className="py-3 px-4 text-sm text-gray-900">{payment.email}</TableCell>
                  <TableCell className="py-3 px-4 text-sm text-gray-900 text-right font-medium">
                    ${payment.amount.toFixed(2)}
                  </TableCell>
                  <TableCell className="py-3 px-4">
                    {payment.status === 'success' && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-800 border border-green-200">
                        Success
                      </span>
                    )}
                    {payment.status === 'processing' && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-800 border border-blue-200">
                        Processing
                      </span>
                    )}
                    {payment.status === 'failed' && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-50 text-red-800 border border-red-200">
                        Failed
                      </span>
                    )}
                  </TableCell>
                  <TableCell className="w-10 py-3 px-4 text-right">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <EllipsisIcon className="h-5 w-5 text-gray-500" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center justify-between mt-4">
          <p className="text-sm text-gray-500">
            {selectedRows.length} of {totalRows} row(s) selected.
          </p>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={onPrevPage}
              disabled={true}
              className="h-8 w-8 p-0 border border-gray-200 bg-white text-gray-400"
            >
              <ChevronLeftIcon className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={onNextPage}
              className="h-8 w-8 p-0 border border-gray-200 bg-white text-gray-500"
            >
              <ChevronRightIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingComponent;