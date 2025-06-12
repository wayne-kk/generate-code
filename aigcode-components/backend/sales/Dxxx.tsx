import React from 'react';
import { Button } from '@ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@ui/card';
import { Input } from '@ui/input';
import { Badge } from '@ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@ui/table';
import { FolderUp, ChevronUp, ChevronDown } from 'lucide-react';

interface OrderData {
  id: string;
  customerName: string;
  qtyItems: string;
  amount: string;
  paymentMethod: string;
  status: 'new order' | 'in progress' | 'on hold' | 'completed';
}

interface PricingComponentProps {
  newOrderCount?: number;
  onProgressCount?: number;
  completedCount?: number;
  returnCount?: number;
  newOrderPercentage?: number;
  onProgressPercentage?: number;
  completedPercentage?: number;
  returnPercentage?: number;
  orders?: OrderData[];
  totalRows?: number;
  selectedRows?: number;
}

const PricingComponent: React.FC<PricingComponentProps> = ({
  newOrderCount = 43,
  onProgressCount = 12,
  completedCount = 40,
  returnCount = 2,
  newOrderPercentage = 0.5,
  onProgressPercentage = -0.3,
  completedPercentage = 0.5,
  returnPercentage = -0.5,
  orders = [
    {
      id: '1083',
      customerName: 'Marvin Dekidis',
      qtyItems: '2 Items',
      amount: '$34.5',
      paymentMethod: 'E-Wallet',
      status: 'new order',
    },
    {
      id: '1082',
      customerName: 'Carter Lipshitz',
      qtyItems: '6 Items',
      amount: '$60.5',
      paymentMethod: 'Bank Transfer',
      status: 'in progress',
    },
    {
      id: '1081',
      customerName: 'Addison Philips',
      qtyItems: '3 Items',
      amount: '$47.5',
      paymentMethod: 'E-Wallet',
      status: 'new order',
    },
    {
      id: '1079',
      customerName: 'Craig Siphron',
      qtyItems: '15 Items',
      amount: '$89.8',
      paymentMethod: 'Bank Transfer',
      status: 'on hold',
    },
    {
      id: '1078',
      customerName: 'Emma Johnson',
      qtyItems: '4 Items',
      amount: '$120.75',
      paymentMethod: 'Credit Card',
      status: 'completed',
    },
    {
      id: '1077',
      customerName: 'Michael Smith',
      qtyItems: '8 Items',
      amount: '$210.5',
      paymentMethod: 'PayPal',
      status: 'completed',
    },
  ],
  totalRows = 16,
  selectedRows = 0,
}) => {
  const getStatusBadgeStyles = (status: string) => {
    switch (status) {
      case 'new order':
        return 'bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100';
      case 'in progress':
        return 'bg-orange-50 text-orange-700 border border-orange-200 hover:bg-orange-100';
      case 'on hold':
        return 'bg-orange-50 text-orange-700 border border-orange-200 hover:bg-orange-100';
      case 'completed':
        return 'bg-green-50 text-green-700 border border-green-200 hover:bg-green-100';
      default:
        return 'bg-gray-50 text-gray-700 border border-gray-200 hover:bg-gray-100';
    }
  };

  return (
    <div className="xl:col-span-2">
      <Card className="bg-white text-gray-800 flex flex-col gap-6 rounded-xl border border-gray-200 py-6 h-full shadow-sm">
        <CardHeader className="grid grid-cols-[1fr_auto] items-start gap-1.5 px-6 pb-0">
          <div>
            <CardTitle className="text-lg font-semibold text-gray-900 mb-1">Track Order Status</CardTitle>
            <CardDescription className="text-sm text-gray-500">
              Analyze growth and changes in visitor patterns
            </CardDescription>
          </div>
          <div className="self-start justify-self-end">
            <Button
              variant="outline"
              size="sm"
              className="h-9 px-4 py-2 text-sm font-medium border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 shadow-sm"
            >
              <FolderUp className="mr-2" size={18} />
              Export
            </Button>
          </div>
        </CardHeader>
        <CardContent className="px-6">
          <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2">
              <div className="text-2xl font-semibold text-gray-900">{newOrderCount}</div>
              <div className="flex items-center gap-2">
                <div className="text-sm text-gray-500">New Order</div>
                <div className="flex items-center gap-0.5 text-xs text-green-500 font-medium">
                  <ChevronUp className="size-3" />
                  {newOrderPercentage}%
                </div>
              </div>
              <div className="relative w-full overflow-hidden rounded-full h-2 bg-blue-100">
                <div className="h-full w-[43%] bg-blue-500 rounded-full"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-semibold text-gray-900">{onProgressCount}</div>
              <div className="flex items-center gap-2">
                <div className="text-sm text-gray-500">On Progress</div>
                <div className="flex items-center gap-0.5 text-xs text-red-500 font-medium">
                  <ChevronDown className="size-3" />
                  {Math.abs(onProgressPercentage)}%
                </div>
              </div>
              <div className="relative w-full overflow-hidden rounded-full h-2 bg-teal-100">
                <div className="h-full w-[25%] bg-teal-500 rounded-full"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-semibold text-gray-900">{completedCount}</div>
              <div className="flex items-center gap-2">
                <div className="text-sm text-gray-500">Completed</div>
                <div className="flex items-center gap-0.5 text-xs text-green-500 font-medium">
                  <ChevronUp className="size-3" />
                  {completedPercentage}%
                </div>
              </div>
              <div className="relative w-full overflow-hidden rounded-full h-2 bg-green-100">
                <div className="h-full w-[40%] bg-green-500 rounded-full"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-semibold text-gray-900">{returnCount}</div>
              <div className="flex items-center gap-2">
                <div className="text-sm text-gray-500">Return</div>
                <div className="flex items-center gap-0.5 text-xs text-red-500 font-medium">
                  <ChevronDown className="size-3" />
                  {Math.abs(returnPercentage)}%
                </div>
              </div>
              <div className="relative w-full overflow-hidden rounded-full h-2 bg-orange-100">
                <div className="h-full w-[48%] bg-orange-500 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Input
                className="h-10 px-3 py-2 text-sm border border-gray-200 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 max-w-sm"
                placeholder="Filter orders..."
              />
              <Button
                variant="outline"
                size="sm"
                className="h-10 px-4 py-2 ml-auto text-sm font-medium border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 shadow-sm"
              >
                Columns
                <ChevronDown className="ml-2" size={16} />
              </Button>
            </div>
            <div className="rounded-md border border-gray-200 overflow-hidden">
              <div className="relative w-full overflow-x-auto">
                <Table className="w-full text-sm">
                  <TableHeader>
                    <TableRow className="border-b border-gray-200 bg-gray-50">
                      <TableHead className="h-10 px-4 py-3 text-left font-medium text-gray-500">ID</TableHead>
                      <TableHead className="h-10 px-4 py-3 text-left font-medium text-gray-500">
                        Customer Name
                      </TableHead>
                      <TableHead className="h-10 px-4 py-3 text-left font-medium text-gray-500">Qty Items</TableHead>
                      <TableHead className="h-10 px-4 py-3 text-left font-medium text-gray-500">Amount</TableHead>
                      <TableHead className="h-10 px-4 py-3 text-left font-medium text-gray-500">
                        Payment Method
                      </TableHead>
                      <TableHead className="h-10 px-4 py-3 text-left font-medium text-gray-500">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {orders.map((order) => (
                      <TableRow key={order.id} className="border-b border-gray-200 hover:bg-gray-50">
                        <TableCell className="p-4 align-middle text-gray-900">{order.id}</TableCell>
                        <TableCell className="p-4 align-middle text-gray-900">{order.customerName}</TableCell>
                        <TableCell className="p-4 align-middle text-gray-900">{order.qtyItems}</TableCell>
                        <TableCell className="p-4 align-middle text-gray-900">{order.amount}</TableCell>
                        <TableCell className="p-4 align-middle text-gray-900">{order.paymentMethod}</TableCell>
                        <TableCell className="p-4 align-middle">
                          <Badge
                            className={`px-2.5 py-0.5 text-xs font-medium rounded-md capitalize ${getStatusBadgeStyles(order.status)}`}
                          >
                            {order.status === 'on hold' ? 'On Hold' : order.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
            <div className="flex items-center justify-between pt-2">
              <div className="text-sm text-gray-500">
                {selectedRows} of {totalRows} row(s) selected.
              </div>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-9 px-4 py-2 text-sm font-medium border border-gray-200 bg-white text-gray-400 cursor-not-allowed"
                  disabled
                >
                  Previous
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-9 px-4 py-2 text-sm font-medium border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 shadow-sm"
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PricingComponent;
