import React from 'react';
import { Card, CardContent } from '@ui/card';
import { Button } from '@ui/button';
import { ShoppingBasket } from 'lucide-react';

type ProductItem = {
  id: string;
  name: string;
  currentPrice: number;
  originalPrice: number;
  rating: number;
  imageSrc: string;
  link: string;
};

type PricingComponentProps = {
  products?: ProductItem[];
};

export default function PricingComponent({
  products = [
    {
      id: '1',
      name: 'Boat Headphone',
      currentPrice: 285,
      originalPrice: 375,
      rating: 4,
      imageSrc: 'https://modernize-nextjs-free.vercel.app/images/products/s4.jpg',
      link: 'https://modernize-nextjs-free.vercel.app/',
    },
    {
      id: '2',
      name: 'MacBook Air Pro',
      currentPrice: 900,
      originalPrice: 650,
      rating: 5,
      imageSrc: 'https://modernize-nextjs-free.vercel.app/images/products/s5.jpg',
      link: 'https://modernize-nextjs-free.vercel.app/',
    },
    {
      id: '3',
      name: 'Red Valvet Dress',
      currentPrice: 200,
      originalPrice: 150,
      rating: 3,
      imageSrc: 'https://modernize-nextjs-free.vercel.app/images/products/s7.jpg',
      link: 'https://modernize-nextjs-free.vercel.app/',
    },
    {
      id: '4',
      name: 'Cute Soft Teddybear',
      currentPrice: 345,
      originalPrice: 285,
      rating: 2,
      imageSrc: 'https://modernize-nextjs-free.vercel.app/images/products/s11.jpg',
      link: 'https://modernize-nextjs-free.vercel.app/',
    },
  ],
}: PricingComponentProps) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="col-span-1">
            <Card className="relative rounded-lg overflow-hidden bg-white">
              <a href={product.link} className="block relative">
                <div className="aspect-square w-full">
                  <img src={product.imageSrc} alt={product.name} className="w-full h-full object-cover" />
                </div>
              </a>
              <Button
                size="icon"
                className="absolute bottom-[100px] right-4 h-12 w-12 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-md"
                aria-label="Add To Cart"
              >
                <ShoppingBasket className="h-5 w-5" />
              </Button>
              <div className="p-4 pt-3">
                <h6 className="text-base font-medium text-gray-800 mb-1">{product.name}</h6>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-base font-medium text-gray-800">${product.currentPrice}</span>
                    <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < product.rating ? 'text-amber-400' : 'text-gray-300'}>
                        <svg className="w-4 h-4" viewBox="0 0 24 24">
                          {i < product.rating ? (
                            <path
                              fill="currentColor"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                            />
                          ) : (
                            <path
                              fill="currentColor"
                              d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                            />
                          )}
                        </svg>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}