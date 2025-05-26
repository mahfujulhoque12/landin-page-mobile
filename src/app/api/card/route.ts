import { NextResponse } from 'next/server';

const products = [
  {
    id: 1,
    name: 'Organic Honey Jar',
    basePrice: 50,
    taxRate: 0.1,
    image: '/product/product.png',
  },
  {
    id: 2,
    name: 'Natural Soap',
    basePrice: 15,
    taxRate: 0.1,
    image: '/product/product2.png',
  },
  {
    id: 3,
    name: 'Bee Wax Candle',
    basePrice: 25,
    taxRate: 0.07,
    image: '/product/product3.png',
  },
];

export const GET = async () => {
  return NextResponse.json(products);
};