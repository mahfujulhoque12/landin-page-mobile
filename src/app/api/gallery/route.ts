import { NextResponse } from 'next/server';

export const GET = async () => {
  const gallery = [
    { id: 1, title: 'Gallery 1', image: '/product/product.png' },
    { id: 2, title: 'Gallery 2', image: '/product/product2.png' },
    { id: 3, title: 'Gallery 3', image: '/product/product3.png' },
    { id: 4, title: 'Gallery 4', image: '/product/product4.png' },
    { id: 5, title: 'Gallery 5', image: '/product/product5.png' },
    { id: 6, title: 'Gallery 6', image: '/product/product6.png' },
    { id: 7, title: 'Gallery 7', image: '/product/product7.png' },
    { id: 8, title: 'Gallery 8', image: '/product/product8.png' },
  ];

  return NextResponse.json(gallery);
};
