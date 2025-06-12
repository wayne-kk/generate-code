import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@ui/card';
import { Input } from '@ui/input';
import { Button } from '@ui/button';
import { Checkbox } from '@ui/checkbox';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@ui/table';

interface Lead {
  status: string;
  email: string;
  amount: string;
}

interface PricingComponentProps {
  title?: string;
  leads?: Lead[];
}

export default function PricingComponent({
  title = 'Leads',
  leads = [
    { status: 'Success', email: 'ken99@yahoo.com', amount: '$316.00' },
    { status: 'Success', email: 'abe45@gmail.com', amount: '$242.00' },
    { status: 'Processing', email: 'monserrat44@gmail.com', amount: '$837.00' },
    { status: 'Success', email: 'silas22@gmail.com', amount: '$874.00' },
    { status: 'Failed', email: 'carmella@hotmail.com', amount: '$721.00' },
  ],
}: PricingComponentProps) {
  const [selectedRows, setSelectedRows] = React.useState<number[]>([]);
  const [filterValue, setFilterValue] = React.useState('');

  const handleSelectAll = () => {
    if (selectedRows.length === leads.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(leads.map((_, index) => index));
    }
  };

  const handleSelectRow = (index: number) => {
    if (selectedRows.includes(index)) {
      setSelectedRows(selectedRows.filter((i) => i !== index));
    } else {
      setSelectedRows([...selectedRows, index]);
    }
  };

  return (
    <Card className="bg-white text-[oklch(0.274_0.008_286.03)] flex flex-col gap-6 rounded-lg border border-[oklch(0.92_0.0053_286.32)] py-6 col-span-2 shadow-none">
      <CardHeader className="flex flex-row justify-between px-6 pb-0">
        <CardTitle className="text-base leading-none font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="px-6">
        <div className="mb-4 flex items-center gap-2">
          <Input
            className="h-9 w-full rounded-md border border-[oklch(0.92_0.0053_286.32)] bg-transparent px-3 py-2 text-sm shadow-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[oklch(0.5_0.12_286.03)] placeholder:text-[oklch(0.5_0.05_286.03)]"
            placeholder="Filter leads..."
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
          />
          <Button
            variant="outline"
            className="ml-auto h-9 rounded-md border border-[oklch(0.92_0.0053_286.32)] bg-white px-4 py-2 text-sm font-medium shadow-none hover:bg-[oklch(0.97_0.01_286.03)] hover:text-[oklch(0.274_0.008_286.03)]"
            type="button"
          >
            Columns{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2 h-4 w-4"
            >
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </Button>
        </div>

        <div className="rounded-md border border-[oklch(0.92_0.0053_286.32)]">
          <div className="relative w-full overflow-x-auto">
            <Table className="w-full text-sm">
              <TableHeader>
                <TableRow className="border-b border-[oklch(0.92_0.0053_286.32)] hover:bg-[oklch(0.97_0.01_286.03)]">
                  <TableHead className="h-10 px-2 text-left align-middle font-medium text-[oklch(0.5_0.05_286.03)] whitespace-nowrap">
                    <Checkbox
                      checked={selectedRows.length === leads.length && leads.length > 0}
                      onCheckedChange={handleSelectAll}
                      aria-label="Select all"
                      className="h-4 w-4 rounded border border-[oklch(0.92_0.0053_286.32)] shadow-none data-[state=checked]:bg-[oklch(0.5_0.12_286.03)] data-[state=checked]:text-white"
                    />
                  </TableHead>
                  <TableHead className="h-10 px-2 text-left align-middle font-medium text-[oklch(0.5_0.05_286.03)] whitespace-nowrap">
                    Status
                  </TableHead>
                  <TableHead className="h-10 px-2 text-left align-middle font-medium text-[oklch(0.5_0.05_286.03)] whitespace-nowrap">
                    <Button
                      variant="ghost"
                      className="p-0 h-auto font-medium text-[oklch(0.5_0.05_286.03)] hover:bg-transparent hover:text-[oklch(0.274_0.008_286.03)]"
                    >
                      Email
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-1 h-3 w-3"
                      >
                        <path d="m7 15 5 5 5-5"></path>
                        <path d="m7 9 5-5 5 5"></path>
                      </svg>
                    </Button>
                  </TableHead>
                  <TableHead className="h-10 px-2 text-right align-middle font-medium text-[oklch(0.5_0.05_286.03)] whitespace-nowrap">
                    Amount
                  </TableHead>
                  <TableHead className="h-10 px-2 text-left align-middle font-medium text-[oklch(0.5_0.05_286.03)] whitespace-nowrap"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leads.map((lead, index) => (
                  <TableRow
                    key={index}
                    className="border-b border-[oklch(0.92_0.0053_286.32)] hover:bg-[oklch(0.97_0.01_286.03)]"
                  >
                    <TableCell className="p-2 align-middle whitespace-nowrap">
                      <Checkbox
                        checked={selectedRows.includes(index)}
                        onCheckedChange={() => handleSelectRow(index)}
                        aria-label="Select row"
                        className="h-4 w-4 rounded border border-[oklch(0.92_0.0053_286.32)] shadow-none data-[state=checked]:bg-[oklch(0.5_0.12_286.03)] data-[state=checked]:text-white"
                      />
                    </TableCell>
                    <TableCell className="p-2 align-middle whitespace-nowrap">{lead.status}</TableCell>
                    <TableCell className="p-2 align-middle whitespace-nowrap">{lead.email}</TableCell>
                    <TableCell className="p-2 align-middle whitespace-nowrap text-right font-medium">
                      {lead.amount}
                    </TableCell>
                    <TableCell className="p-2 align-middle whitespace-nowrap text-right">
                      <Button variant="ghost" className="h-9 rounded-md px-2 py-2 hover:bg-[oklch(0.97_0.01_286.03)]">
                        <span className="sr-only">Open menu</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="19" cy="12" r="1"></circle>
                          <circle cx="5" cy="12" r="1"></circle>
                        </svg>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4">
          <div className="text-[oklch(0.5_0.05_286.03)] text-sm">
            {selectedRows.length} of {leads.length} row(s) selected.
          </div>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              className="h-8 rounded-md border border-[oklch(0.92_0.0053_286.32)] bg-white px-3 py-1 text-sm font-medium shadow-none hover:bg-[oklch(0.97_0.01_286.03)] disabled:opacity-50"
              disabled={true}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              className="h-8 rounded-md border border-[oklch(0.92_0.0053_286.32)] bg-white px-3 py-1 text-sm font-medium shadow-none hover:bg-[oklch(0.97_0.01_286.03)] disabled:opacity-50"
              disabled={true}
            >
              Next
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}