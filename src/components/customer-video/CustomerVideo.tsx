"use client";
import React, { useState } from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Link from "next/link";
import Image from "next/image";
import { FaPlay } from "react-icons/fa6";
import { useGetCustomerVideoQuery } from "@/redux/features/api/customerVideo";

const CustomerVideo: React.FC = () => {
  const { data: videoData = [], isLoading } = useGetCustomerVideoQuery();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  if (isLoading) return <p>Loading...</p>;

  return (
    <section className="mt-5">
      <MaxWidthWrapper>
        <h2 className="text-gray-700 text-2xl font-bold  pb-5">
          What Say Our Customer
        </h2>

        <div className="relative space-y-8">
          {videoData.map(({ url, thumbnail }, index) => {
            const embedUrl = url.includes("watch?v=")
              ? url.replace("watch?v=", "embed/") + "?autoplay=1"
              : url;

            return (
              <div
                key={index}
                className="relative z-10 border border-gray-200 rounded-lg duration-300"
              >
                <div className="relative aspect-video w-full overflow-hidden rounded-md">
                  {activeIndex === index ? (
                    <iframe
                      className="w-full h-full"
                      src={embedUrl}
                      title={`Customer Video ${index + 1}`}
                      frameBorder="0"
                      allow="autoplay; encrypted-media; clipboard-write; fullscreen"
                      allowFullScreen
                      loading="lazy"
                    />
                  ) : (
                    <div
                      className="relative w-full h-full cursor-pointer"
                      onClick={() => setActiveIndex(index)}
                    >
                      <Image
                        src={thumbnail}
                        alt={`Video thumbnail ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      />
                      <div className="absolute inset-0  flex items-center justify-center">
                        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
                          <FaPlay className="text-red-600" size={24} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-5">
          <Link
            href="#order"
            className="relative overflow-hidden text-xl font-bold text-white bg-green-500 px-6 py-3 rounded-md w-full block text-center group"
          >
            <span className="relative z-10">Order Now</span>
            <span className="absolute top-0 left-0 w-full h-full bg-white opacity-10 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </Link>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default CustomerVideo;