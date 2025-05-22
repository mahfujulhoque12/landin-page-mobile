import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { useGetbadgeQuery } from "@/redux/features/api/badgeApi";
import Image from "next/image";
import Link from "next/link";

const Badge = () => {
  const { data: badges = [], isLoading } = useGetbadgeQuery();
  if (isLoading) return <p>Loading…</p>;

  return (
    <MaxWidthWrapper>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {badges.map((badge) => (
          <div
            key={badge.id}
            className="p-3 rounded-md shadow-sm border border-gray-200 bg-white"
          >
            <div className="flex justify-center items-center">
              <Image
                src={badge.image}
                alt="img"
                width={200}
                height={200}
                className="w-36 h-36 "
              />
            </div>
            <h3 className="text-center font-semibold text-gray-700 text-lg">
              {badge.title}
            </h3>
          </div>
        ))}
      </div>

      <div className="mt-5">
        <Link
          href="#"
          className="relative overflow-hidden text-xl font-bold text-white bg-green-500 px-6 py-3 rounded-md w-full block text-center group"
        >
          <span className="relative z-10">Buy Now</span>
          <span className="absolute top-0 left-0 w-full h-full bg-white opacity-10 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
        </Link>
      </div>
    </MaxWidthWrapper>
  );
};

export default Badge;
