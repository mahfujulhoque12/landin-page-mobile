"use client";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import { FaPlay } from "react-icons/fa6";
import MaxWidthWrapper from "../MaxWidthWrapper";

import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Link from "next/link";
import { useGetCustomerVideoQuery } from "@/redux/features/api/customerVideo";

const CustomerVideo: React.FC = () => {
  const { data: videoData = [], isLoading } = useGetCustomerVideoQuery();

  const [api, setApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null);

  // listen for slide changes
  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrentIndex(api.selectedScrollSnap());
    api.on("select", onSelect);
    onSelect(); // init
    return () => void api.off("select", onSelect);
  }, [api]);

  const dotCount = 4;
  const groupSize = Math.ceil(videoData.length / dotCount);
  const dotIndices = Array.from({ length: dotCount }).map((_, i) =>
    Math.min(i * groupSize, videoData.length - 1)
  );
  const activeDot = Math.min(Math.floor(currentIndex / groupSize), dotCount - 1);

  if (isLoading) return <p>Loading...</p>;

  return (
    <section className="mt-5">
      <MaxWidthWrapper>
        <h2 className="text-gray-700 text-2xl font-bold text-center pb-5">
          What Say Our Customer
        </h2>
        <div className="relative">
          <Carousel className="gap-4" setApi={setApi} opts={{ loop: true }}>
            <CarouselContent className="gap-5">
              {videoData.map(({ url, thumbnail, title }, index) => {
                const embedUrl = `${url.includes("youtube.com") ? url.replace("watch?v=", "embed/") : url}?autoplay=1`;

                return (
                  <CarouselItem
                    key={index}
                    className="p-4 relative shadow-md z-10 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300 mb-2 cursor-pointer"
                    onClick={() => setActiveVideoIndex(index)}
                  >
                    {activeVideoIndex === index ? (
                      <iframe
                        className="rounded-md object-cover h-[250px] w-full"
                        src={embedUrl}
                        title={`Customer Video ${index + 1}`}
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                      />
                    ) : (
                      <>
                        <Image
                          src={thumbnail}
                          alt={`Video thumbnail ${index + 1}`}
                          width={700}
                          height={300}
                          className="rounded-md object-cover h-[250px] w-full"
                        />
                        <div className="absolute top-[45%] left-[45%] w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                          <FaPlay className="text-white" size={24} />
                        </div>
                      </>
                    )}
                    <h3 className="text-gray-600 py-1 text-lg font-semibold">
                      {title}
                    </h3>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {dotIndices.map((targetIndex, i) => (
              <button
                key={i}
                className={`
                  h-2 w-2 rounded-full transition-transform
                  ${activeDot === i ? "bg-green-600 scale-125" : "bg-gray-300"}
                `}
                aria-label={`Go to group ${i + 1}`}
                onClick={() => api?.scrollTo(targetIndex)}
              />
            ))}
          </div>
        </div>

        <div className="mt-5">
          <Link
            href="#order"
            className="relative overflow-hidden text-xl font-bold text-white bg-[var(--btn-bg)] px-6 py-3 rounded-md w-full block text-center group"
          >
            <span className="relative z-10">Get Your Product</span>
            <span className="absolute top-0 left-0 w-full h-full bg-white opacity-10 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </Link>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default CustomerVideo;