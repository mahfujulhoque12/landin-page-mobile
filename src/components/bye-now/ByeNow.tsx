'use client';

import React, { useState } from 'react';
import MaxWidthWrapper from '../MaxWidthWrapper';
import { useForm } from 'react-hook-form';
import { usePlaceOrderMutation } from '@/redux/features/api/orderApi';

type BuyNowFormValues = {
  name: string;
  email: string;
  phone: string;
  quantity: number;
  address: string;
};

const ByeNow = () => {
  const [submitted, setSubmitted] = useState(false);
    const [placeOrder, { isLoading,  isError }] = usePlaceOrderMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BuyNowFormValues>();


  const onSubmit = async (data: BuyNowFormValues) => {
     console.log("📨 Submitted form data:", data);
    try {
         const response=await placeOrder(data).unwrap()
             console.log("📦 Order response from API:", response)
          setSubmitted(true);
          reset()
              // 🔁 Hide the success message after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
    } catch (error) {
        console.error("Failed to submit order:", error);
    }


    
  };

  return (
    <section id='order'>

    <MaxWidthWrapper>
      <div className="my-10 max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md border border-gray-300">
        <h2 className="text-2xl font-bold mb-4 text-center text-green-700">Buy Moringa Powder</h2>

           {submitted && (
          <p className="text-green-600 font-semibold text-center mb-4">
            ✅ Thank you! Your order has been submitted.
          </p>
        )}
        {isError && (
          <p className="text-red-500 text-center mb-4">Try again.</p>
        )}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Full Name</label>
            <input
              type="text"
              {...register('name', { required: 'Name is required' })}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              {...register('email', { required: 'Email is required' })}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              {...register('phone', { required: 'Phone number is required' })}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Quantity (in packs)</label>
            <input
              type="number"
              {...register('quantity', {
                required: 'Quantity is required',
                min: { value: 1, message: 'Minimum 1 pack required' },
              })}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            {errors.quantity && (
              <p className="text-red-500 text-sm mt-1">{errors.quantity.message}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Delivery Address</label>
            <textarea
              {...register('address', { required: 'Address is required' })}
              rows={4}
              className="w-full p-2 border border-gray-300 rounded-md"
            ></textarea>
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="relative overflow-hidden text-xl font-bold text-white bg-green-500 px-6 py-3 rounded-md w-full block text-center group"
          >
             <span className="relative z-10">  {isLoading ? 'Placing Order...' : ' Order Now'}</span>
            <span className="absolute top-0 left-0 w-full h-full bg-white opacity-10 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          
          </button>
        </form>
      </div>
    </MaxWidthWrapper>
    </section>
  );
};

export default ByeNow;
