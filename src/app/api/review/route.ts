import { NextResponse } from 'next/server';
import customer from "/public/logo/man.jpg";
import product1 from '/public/product/product.png';
import product2 from '/public/product/product2.png';
import product3 from '/public/product/product3.png';
import product4 from '/public/product/product4.png';
import product5 from '/public/product/product5.png';


export const GET = async () => {
  const reviews = [
    {
      id: 1,
      name: "Md Mahfuj",
      rating: 5,
      comment: "Outstanding product! I love this Moringa powder. Very helpful and authentic, especially from this shop.",
      img:customer,
      customerType:"Regular Customer",
      imgs:[product1,product2,product3,product4,product5]
    },
    {
      id: 2,
      name: "Sharmin Akter",
      rating: 4,
      comment: "Very good quality. Natural and effective. Slightly delayed delivery but worth it.",
          img:customer,
             customerType:"Normal Customer",
      imgs:[product1,product2,product3,product4,product5]

    },
    {
      id: 3,
      name: "Rafiul Islam",
      rating: 5,
      comment: "Authentic Moringa powder. I’ve been using it for 2 months now. Highly recommended!",
          img:customer,
             customerType:"Regular Customer",
      imgs:[product1,product2,product3,product4,product5]

    },
    {
      id: 4,
      name: "Tasnia Alam",
      rating: 4,
      comment: "Good product, fresh smell and nice packaging. Will order again.",
          // img:customer,
             customerType:"Eregular Customer",
      imgs:[product1,product2,product3,product4,product5]

    },
    {
      id: 5,
      name: "Kabir Hossain",
      rating: 5,
      comment: "This powder improved my digestion and energy levels. Very happy with the purchase!",
          img:customer,
             customerType:"Monthly Customer",
      imgs:[product1,product2,product3,product4,product5]

    },
  ];

  return NextResponse.json(reviews);
};