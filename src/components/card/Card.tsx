'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import MaxWidthWrapper from '../MaxWidthWrapper';

import Link from 'next/link';
import { FaTrashAlt } from 'react-icons/fa';
import { useGetCardsQuery } from '@/redux/features/api/cardApi';

const Card: React.FC = () => {
  const { data: cards = [], isLoading } = useGetCardsQuery();
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [deletedIds, setDeletedIds] = useState<number[]>([]); // NEW STATE

  if (isLoading) return <p>Loading...</p>;

  // Filter out deleted cards
  const visibleCards = cards.filter((card) => !deletedIds.includes(card.id));

  // Calculate subtotal
  const subtotal = visibleCards.reduce((sum, card) => {
    const qty = quantities[card.id] || 0;
    const base = card.basePrice || 0;
    return sum + base * qty;
  }, 0);

  const taxRate = 0.1;
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  const handleQuantity = (id: number, action: 'inc' | 'dec') => {
    setQuantities((prev) => {
      const current = prev[id] || 0;
      const updated = action === 'inc' ? current + 1 : Math.max(current - 1, 0);
      return { ...prev, [id]: updated };
    });
  };

  const handleDelete = (id: number) => {
    setDeletedIds((prev) => [...prev, id]);
  };

  return (
    <MaxWidthWrapper>
      <div className="flex flex-col gap-6">
        <h3 className="text-center text-2xl font-bold text-gray-700 mt-3">Product List</h3>

        {visibleCards.map((card) => {
          const qty = quantities[card.id] || 0;
          const price = (card.basePrice || 0) * qty;

          return (
            <div
              key={card.id}
              className="relative flex items-center gap-4 border border-gray-200 rounded-xl p-4 bg-white shadow-sm"
            >
              {/* Delete Button */}
              <button
                onClick={() => handleDelete(card.id)}
                className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                title="Remove Item"
              >
                <FaTrashAlt size={18} />
              </button>

              {/* Image */}
              <div className="relative w-24 h-24 rounded overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col flex-1">
                <h2 className="text-lg font-semibold text-gray-800">{card.name}</h2>
                <div className="flex items-center gap-3 mt-2">
                  <button
                    onClick={() => handleQuantity(card.id, 'dec')}
                    className="bg-gray-200 px-2 rounded hover:bg-gray-300"
                  >
                    −
                  </button>
                  <span className="text-gray-700">{qty}</span>
                  <button
                    onClick={() => handleQuantity(card.id, 'inc')}
                    className="bg-gray-200 px-2 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Price */}
              <div className="text-right">
                <p className="text-base text-gray-700 font-medium">
                  ${price.toFixed(2)}
                </p>
              </div>
            </div>
          );
        })}

        {/* Summary Section */}
        {visibleCards.length > 0 ? (
          <div className="border-t pt-4 mt-4">
            <div className="flex justify-between text-gray-700 text-base mb-2">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-700 text-base mb-2">
              <span>Tax (10%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-bold text-gray-900">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-5">No products in cart.</p>
        )}

        {/* Buttons */}
        <div className="mt-5 space-y-3">
          <Link
            href="#"
            className="relative overflow-hidden text-xl font-bold text-white bg-[var(--btn-bg)] px-6 py-3 rounded-md w-full block text-center group"
          >
            <span className="relative z-10">Checkout</span>
            <span className="absolute top-0 left-0 w-full h-full bg-white opacity-10 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </Link>

          <Link
            href="/"
            className="relative overflow-hidden text-xl font-bold text-white bg-[var(--btn-bg)] px-6 py-3 rounded-md w-full block text-center group"
          >
            <span className="relative z-10">Go Home</span>
            <span className="absolute top-0 left-0 w-full h-full bg-white opacity-10 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </Link>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Card;