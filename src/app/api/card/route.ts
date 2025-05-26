import { NextResponse } from 'next/server';

const products = [
  {
    id: 1,
    name: 'Organic Honey Jar',
    basePrice: 50,
    taxRate: 0.1,
    size: '500ml',
    color: '#F564A9', // Golden color
    image: '/product/product.png',
  },
  {
    id: 2,
    name: 'Natural Soap',
    basePrice: 15,
    taxRate: 0.1,
    size: '100g',
    color: '#FF0B55', // Beige
    image: '/product/product2.png',
  },
  {
    id: 3,
    name: 'Bee Wax Candle',
    basePrice: 25,
    taxRate: 0.07,
    size: 'Medium',
    color: '#AC1754', // Yellow
    image: '/product/product3.png',
  },
];


export const GET = async () => {
  return NextResponse.json(products);
};
