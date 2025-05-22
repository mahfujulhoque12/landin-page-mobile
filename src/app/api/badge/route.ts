import { NextResponse } from 'next/server'

export const GET = async () => {
  const badge = [
    { id: 1, title: 'Best Quality ', image: '/badge/badge1.png' },
    { id: 2, title: 'Granted Product', image: '/badge/badge2.png' },
    { id: 3, title: 'Authorized Product', image: '/badge/badge3.png' },
    { id: 4, title: '100% Orginal', image: '/badge/badge4.png' },
  ]

  return NextResponse.json(badge)
}
