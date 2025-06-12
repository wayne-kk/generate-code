import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@ui/card';
import { Button } from '@ui/button';
import { ChevronRight } from 'lucide-react';

interface ProductItem {
  id: string;
  name: string;
  image: string;
  soldCount: number;
}

interface BestSellingProductsProps {
  title?: string;
  description?: string;
  products?: ProductItem[];
  onViewMore?: () => void;
}

const BestSellingProducts: React.FC<BestSellingProductsProps> = ({
  title = 'Best Selling Product',
  description = 'Top-Selling Products at a Glance',
  products = [
    { id: '1', name: 'Sports Shoes', image: 'https://bundui-images.netlify.app/products/01.jpeg', soldCount: 316 },
    { id: '1', name: 'Black T-Shirt', image: 'https://bundui-images.netlify.app/products/02.jpeg', soldCount: 274 },
    { id: '1', name: 'Jeans', image: 'https://bundui-images.netlify.app/products/03.jpeg', soldCount: 195 },
    { id: '1', name: 'Red Sneakers', image: 'https://bundui-images.netlify.app/products/04.jpeg', soldCount: 402 },
    { id: '1', name: 'Red Scarf', image: 'https://bundui-images.netlify.app/products/05.jpeg', soldCount: 280 },
    { id: '1', name: 'Kitchen Accessory', image: 'https://bundui-images.netlify.app/products/06.jpeg', soldCount: 150 },
  ],
  onViewMore = () => {},
}) => {
  return (
    <div className="w-full max-w-[533px]">
      <Card className="bg-white border border-gray-200 rounded-xl shadow-sm">
        <CardHeader className="flex flex-row items-start justify-between p-6 pb-4 space-y-0">
          <div>
            <CardTitle className="text-lg font-semibold text-gray-900">{title}</CardTitle>
            <CardDescription className="text-sm text-gray-500 mt-1">{description}</CardDescription>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="h-9 w-9 rounded-md border border-gray-200 bg-white hover:bg-gray-50"
            onClick={onViewMore}
            aria-label="View more"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </CardHeader>
        <CardContent className="px-6 pb-6 pt-0 space-y-3">
          {products.map((product, index) => (
            <a
              key={index}
              className="flex items-center justify-between py-3 px-4 rounded-md border border-gray-200 hover:bg-gray-50 transition-colors"
              href={`https://shadcnuikit.com/dashboard/pages/products/${product.id}`}
            >
              <div className="flex items-center gap-4">
                <img
                  alt={product.name}
                  loading="lazy"
                  width="40"
                  height="40"
                  className="rounded-md object-cover"
                  src={product.image}
                />
                <div className="font-medium text-gray-900">{product.name}</div>
              </div>
              <div className="text-sm font-medium text-green-600">{product.soldCount} items sold</div>
            </a>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default BestSellingProducts;