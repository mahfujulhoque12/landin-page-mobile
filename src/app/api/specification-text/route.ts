import { NextResponse } from 'next/server';

export const GET = async () => {
  const specification = {
    title: "Moringa Powder Product Specifications",
    specs: [
      "Product Name: Moringa Powder",
      "Scientific Name: Moringa Oleifera",
      "Origin: Bangladesh",
      "Processing Method: Shade-dried and finely ground",
      "Purity: 100% natural, no additives or preservatives",
      "Color: Bright green",
      "Moisture Content: Less than 8%",
      "Shelf Life: 24 months from the date of packaging",
      "Packaging Type: Foil pouch with zip lock",
      "Recommended Usage: Add 1 tsp to smoothies, soups, or water daily"
    ]
  };

  return NextResponse.json(specification);
};
