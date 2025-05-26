"use client";
import React, { useEffect, useRef, useState } from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Link from "next/link";
import { useGetPromoVideoQuery } from "@/redux/features/api/promoVideoApi";

const PromoVideo: React.FC = () => {
  const { data: videoData = [], isLoading } = useGetPromoVideoQuery();
  const [visibleIndices, setVisibleIndices] = useState<number[]>([]);
  const videoRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleIndices((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
          }
        });
      },
      {
        threshold: 0.5, // 50% of the video must be visible
      }
    );

    videoRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      videoRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, [videoData]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <section className="mt-5">
      <MaxWidthWrapper>
        <h2 className="text-gray-700 text-2xl font-bold  pb-5">
          Promo Video
        </h2>
        <div className="relative space-y-8">
          {videoData.map(({ url }, index) => {
            const autoplayUrl = url.includes("?")
              ? `${url}&autoplay=1&mute=1`
              : `${url}?autoplay=1&mute=1`;

            return (
              <div
                key={index}
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                data-index={index}
                className=" relative shadow-md z-10 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative aspect-video w-full overflow-hidden rounded-md">
                  <iframe
                    className="w-full h-full"
                    src={visibleIndices.includes(index) ? autoplayUrl : url}
                    title={`Promo Video ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
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

export default PromoVideo;
