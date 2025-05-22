import { NextResponse } from 'next/server';

export const GET = async () => {
  const whyClientsBuy = {
    title: "Why Clients Love Our Moringa Powder",
    reasons: [
      "✅ 100% pure and natural – free from additives or preservatives.",
      "🌿 Sourced directly from Bangladesh – known for rich, fertile soil ideal for Moringa cultivation.",
      "🌞 Shade-dried and finely ground – retains maximum nutrients, color, and aroma.",
      "🟢 Bright green color – a clear indicator of premium quality.",
      "💧 Low moisture content (<8%) – ensures longer shelf life and freshness.",
      "📦 Hygienically packed in zip-lock foil pouches – easy to store and reseal.",
      "🧬 Scientifically known as Moringa Oleifera – a superfood trusted worldwide.",
      "📅 24-month shelf life – stays fresh and effective longer.",
      "🥄 Easy daily use – just 1 tsp in smoothies, water, or soups for a powerful health boost.",
      "💪 Backed by repeat customers who trust our quality and consistency."
    ]
  };

  return NextResponse.json(whyClientsBuy);
};
