import { NextResponse } from 'next/server';

export const POST = async (req: Request) => {
  const body = await req.json();

  // Simulate saving to database
  console.log("Received Order:", body);

  return NextResponse.json({ message: "Order received successfully!" }, { status: 201 });
};
