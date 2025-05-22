"use client";

import React, { useEffect, useState } from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { FaStar } from "react-icons/fa6";
import { useGetReviewQuery } from "@/redux/features/api/reviewApi";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const CustomerReview = () => {
  const { data: reviews = [], isLoading } = useGetReviewQuery();
  const [api, setApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);

  // listen for slide changes
  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrentIndex(api.selectedScrollSnap());
    api.on("select", onSelect);
    onSelect(); // init
    return () => void api.off("select", onSelect);
  }, [api]);

  const dotCount = 4;
  const groupSize = Math.ceil(reviews.length / dotCount);
  const dotIndices = Array.from({ length: dotCount }).map((_, i) =>
    Math.min(i * groupSize, reviews.length - 1)
  );
  const activeDot = Math.min(
    Math.floor(currentIndex / groupSize),
    dotCount - 1
  );

  if (isLoading) return <p>Loading…</p>;

  return (
    <MaxWidthWrapper>
      <h2 className="text-2xl font-semibold text-center my-5 text-gray-800">
        Customer Reviews
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5 relative">
        <Carousel setApi={setApi} opts={{ loop: true }}>
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
        </Carousel>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {dotIndices.map((targetIndex, i) => (
            <button
              key={i}
              className={`
                h-2 w-2 rounded-full transition-transform
                ${activeDot === i ? "bg-blue-600 scale-125" : "bg-gray-300"}
              `}
              aria-label={`Go to group ${i + 1}`}
              onClick={() => api?.scrollTo(targetIndex)}
            />
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default CustomerReview;
