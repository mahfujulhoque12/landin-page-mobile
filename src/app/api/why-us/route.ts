import { NextResponse } from 'next/server'

export const GET = async () => {
  const whyUse = [
    { id: 1, title: 'whyUse ', image: '/product/product5.png' },
  
  ]

  return NextResponse.json(whyUse)
}
