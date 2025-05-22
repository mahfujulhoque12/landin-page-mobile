import { NextResponse } from 'next/server';

export const GET = async () => {
  const reviews = [
    {
      id: 1,
      name: "Md Mahfuj",
      rating: 5,
      comment: "Outstanding product! I love this Moringa powder. Very helpful and authentic, especially from this shop.",
    },
    {
      id: 2,
      name: "Sharmin Akter",
      rating: 4,
      comment: "Very good quality. Natural and effective. Slightly delayed delivery but worth it.",
    },
    {
      id: 3,
      name: "Rafiul Islam",
      rating: 5,
      comment: "Authentic Moringa powder. I’ve been using it for 2 months now. Highly recommended!",
    },
    {
      id: 4,
      name: "Tasnia Alam",
      rating: 4,
      comment: "Good product, fresh smell and nice packaging. Will order again.",
    },
    {
      id: 5,
      name: "Kabir Hossain",
      rating: 5,
      comment: "This powder improved my digestion and energy levels. Very happy with the purchase!",
    },
  ];

  return NextResponse.json(reviews);
};
