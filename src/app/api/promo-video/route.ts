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
    {
            id:2,
      url: "https://www.youtube.com/embed/tKjvVf0a50c",
      thumbnail: "/product/product2.png",
      title: "Moringa Powder",
      des: "Promo Product Video",
    },
    {
            id:3,
      url: "https://www.youtube.com/embed/w4BW5YqaKl0",
      thumbnail: "/product/product3.png",
      title: "Moringa Powder",
      des: "Promo Product Video",
    },
    {
            id:4,
      url: "https://www.youtube.com/embed/hzYtcVlgk5I",
      thumbnail: "/product/product4.png",
      title: "Moringa Powder",
      des: "Promo Product Video",
    },
  ];

  return NextResponse.json(videoData);
};
