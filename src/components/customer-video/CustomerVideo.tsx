"use client";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import { IoClose } from "react-icons/io5";
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
// Define the video data type

const CustomerVideo: React.FC = () => {
  const { data: videoData = [], isLoading } = useGetCustomerVideoQuery();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

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
  const groupSize = Math.ceil(videoData.length / dotCount);
  const dotIndices = Array.from({ length: dotCount }).map((_, i) =>
    Math.min(i * groupSize, videoData.length - 1)
  );
  const activeDot = Math.min(
    Math.floor(currentIndex / groupSize),
    dotCount - 1
  );

  const openModal = (videoUrl: string) => {
    setActiveVideoUrl(videoUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setActiveVideoUrl(null);
    setIsModalOpen(false);
  };

  if (isLoading) return <p>Loagin...</p>;

  return (
    <section className="mt-5">
      <MaxWidthWrapper>
        <h2 className="text-gray-700 text-xl  font-bold text-center pb-5">
          What Say Our Customer
        </h2>
        <div className="relative">
          <Carousel className="gap-4" setApi={setApi} opts={{ loop: true }}>
            <CarouselContent className="gap-5">
              {videoData.map(({ url, thumbnail, title }, index) => (
                <CarouselItem
                  key={index}
                  className="p-4 relative shadow-md z-10 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300 mb-2 cursor-pointer"
                  onClick={() => openModal(url)}
                >
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
                  <h3 className="text-gray-600 py-1 text-lg font-semibold">
                    {title}
                  </h3>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Dots are now absolutely positioned relative to the <div className="relative"> */}
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
        {isModalOpen && activeVideoUrl && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex justify-center items-center px-4"
            onClick={closeModal}
          >
            <div
              className="relative bg-white p-2 sm:p-4 rounded-lg shadow-xl w-full max-w-3xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-gray-800 hover:text-red-500 z-10 text-2xl"
                onClick={closeModal}
              >
                <IoClose />
              </button>
              <iframe
                className="w-full h-full rounded-lg"
                src={activeVideoUrl}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}

        <div className="mt-5">
          <Link
            href="#"
            className="relative overflow-hidden text-xl font-bold text-white bg-green-500 px-6 py-3 rounded-md w-full block text-center group"
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
