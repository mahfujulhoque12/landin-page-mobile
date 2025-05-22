// File: src/app/api/videos/route.ts
import { NextResponse } from 'next/server';

export const GET = async () => {
  const videoData = [
    {
        id:1,
      url: "https://www.youtube.com/embed/bgprf5SS2Gk",
      thumbnail: "/product/product.png",
      title: "Moringa Powder",
      des: "Promo Product Video",
    },

  ];

  return NextResponse.json(videoData);
};
