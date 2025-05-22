'use client';
import React, { useState } from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Image from "next/image";
import { useGetGalleryQuery } from "@/redux/features/api/galleryApi";
import { IoClose } from "react-icons/io5";
import Link from "next/link";


const Gallery = () => {
  const { data: gallerys = [], isLoading } = useGetGalleryQuery();
  const [modalImage, setModalImage] = useState<string | null>(null);

  if (isLoading) return <p>Loading...</p>;

  const openModal = (image: string) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <MaxWidthWrapper>
        <h1 className="text-gray-700 text-xl  font-bold text-center my-5">Gallery Images</h1>
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {gallerys.map((img) => (
          <div key={img.id}>
            <Image
              src={img.image}
              width={400}
              height={400}
              alt={img.title}
              className="rounded-md cursor-pointer"
              onClick={() => openModal(img.image)}
            />
          </div>
        ))}
      </div>
    <div className="mt-5">
        <Link
           href="#order"
          className="relative overflow-hidden text-xl font-bold text-white bg-green-500 px-6 py-3 rounded-md w-full block text-center group"
        >
          <span className="relative z-10">Bye Now</span>
          <span className="absolute top-0 left-0 w-full h-full bg-white opacity-10 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
        </Link>
      </div>
      {/* Modal */}
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



     
    </MaxWidthWrapper>
  );
};

export default Gallery;
