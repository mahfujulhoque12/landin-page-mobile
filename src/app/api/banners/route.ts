// app/api/banners/route.ts
import { NextResponse } from 'next/server'

export const GET = async () => {
  const banners = [
    { id: 1, title: 'Banner 1', image: '/product/banner1.png' },
    { id: 2, title: 'Banner 2', image: '/product/banner2.png' },
    { id: 3, title: 'Banner 3', image: '/product/banner3.png' },
    { id: 4, title: 'Banner 4', image: '/product/banner4.png' },
    { id: 5, title: 'Banner 5', image: '/product/banner4.png' },
    { id: 6, title: 'Banner 6', image: '/product/banner4.png' },
  ]

  return NextResponse.json(banners)
}
