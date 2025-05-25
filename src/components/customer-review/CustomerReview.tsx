"use client";

import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { FaStar } from "react-icons/fa6";
import { useGetReviewQuery } from "@/redux/features/api/reviewApi";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CustomerReview = () => {
  const { data: reviews = [], isLoading } = useGetReviewQuery();



  if (isLoading) return <p>Loading…</p>;

  return (
    <MaxWidthWrapper>
      <h2 className="text-2xl font-semibold text-center my-5 text-gray-800">
        Customer Reviews
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5 relative">
        <Carousel>
          <CarouselContent>
            {reviews.map((review) => (
              <CarouselItem key={review.id}>
                <div className="p-4 rounded-md border border-gray-200 shadow-sm hover:shadow-md transition">
                  {/* Name */}
                  <h3 className="text-lg font-semibold text-gray-800 mt-2">
                    {review.name}
                  </h3>

                  {/* Star rating */}
                  <p className="text-green-500 flex gap-1">
                    {Array.from({ length: review.rating }, (_, i) => (
                      <FaStar key={i} size={20} />
                    ))}
                  </p>

                  {/* Comment */}
                  <p className="text-sm font-normal text-gray-600 mt-2">
                    {review.comment}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
               <CarouselPrevious />
                    <CarouselNext />
        </Carousel>
      </div>
    </MaxWidthWrapper>
  );
};

export default CustomerReview;
