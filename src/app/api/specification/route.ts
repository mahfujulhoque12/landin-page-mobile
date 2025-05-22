import { NextResponse } from 'next/server'

export const GET = async () => {
  const specification = [
    { id: 1, title: 'specification ', image: '/product/product.png' },
  
  ]

  return NextResponse.json(specification)
}
