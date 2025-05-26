"use client";

import React, { useState } from "react";
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
import Image, { StaticImageData } from "next/image";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const CustomerReview = () => {
  const { data: reviews = [], isLoading } = useGetReviewQuery();
    const [modalImage, setModalImage] = useState<string | StaticImageData | null>(null);

 const openModal = (image: string | StaticImageData) => {
  setModalImage(image);
};


  const closeModal = () => {
    setModalImage(null);
  };

  

  if (isLoading) return <p>Loading…</p>;

  return (
    <MaxWidthWrapper>
      <h2 className="text-2xl font-bold  my-5 text-gray-800">
        Customer Reviews
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5 relative">
        <Carousel>
          <CarouselContent>
            {reviews.map((review) => (
              <CarouselItem key={review.id}>
                <div className=" rounded-md border border-gray-100">
                  <div className="px-4 pt-4">
                    {/* Name style */}
                    <div className="flex items-center gap-3">
                      {review.img ?    <Image
                        src={review.img}
                        width={100}
                        height={100}
                        alt="img"
                        className="rounded-full h-16 w-16 object-cover"
                      /> :     <FaUserCircle size={50} color="#D84040"/>}
                  
                   
                  
                      <div>
                    
                        <h3 className="text-lg font-medium text-gray-800">
                          {review.name}
                        </h3>
                  
                        <p className="text-sm font-normal text-gray-600">
                      {review.customerType}
                        </p>
                                     <p className="text-green-500 flex gap-1 mt-1">
                      {Array.from({ length: review.rating }, (_, i) => (
                        <FaStar key={i} size={14} />
                      ))}
                    </p>
                      </div>
                    </div>
                    {/* Name style end */}

                    {/* arrow style */}
                    <div className="flex items-center relative">
                      <p className="h-[2px] w-[70%] bg-green-500 mt-3"></p>
                      <p className="text-green-500 absolute right-[26%] top-1 ">
                        <RiArrowRightDoubleFill size={18} />
                      </p>
                    </div>
                    {/* arrow style end*/}

                    {/* Comment */}
                    <p className="text-sm font-normal text-gray-600 mt-2">
                      {review.comment}
                    </p>
                    {/* Comment end */}
                  </div>
                  {/* Star rating */}
                  <div className="mt-3 bg-green-500/10 p-4">
                    <div className="w-full flex gap-2">
                      {review.imgs.map((img, index) => (
                        <Image key={index} src={img} width={100} height={100} alt="img" className="w-16 h-16 rounded-md cursor-pointer"  onClick={() => openModal(img)}/>
                      ))}
                    </div>
                  </div>
                  {/* Star end */}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hover:bg-green-500 hover:text-white border-gray-200"/>
          <CarouselNext  className="hover:bg-green-500 hover:text-white border-gray-200"/>
        </Carousel>
          {modalImage && (
                <div
                  className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
                  onClick={closeModal}
                >
                  <div
                    className="relative max-w-3xl w-full"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      className="absolute top-2 right-2 text-white text-2xl z-10"
                      onClick={closeModal}
                    >
                      <IoClose />
                    </button>
                    <Image
                      src={modalImage}
                      width={1200}
                      height={800}
                      alt="Preview"
                      className="rounded-lg w-full h-auto"
                    />
                  </div>
                </div>
              )}
        
      </div>
    </MaxWidthWrapper>
  );
};

export default CustomerReview;