'use client'

import React from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'
import { useGetSpecImageQuery, useGetSpecTextQuery } from '@/redux/features/api/specificationApi'
import Image from 'next/image'
import Link from 'next/link'

const Specification = () => {
  const { data: specImg=[], isLoading, isError, error } = useGetSpecImageQuery()
  const { data: description = { title: '', specs: [] } } = useGetSpecTextQuery()


  if (isLoading) return <p>Loading…</p>
  if (isError) return <p>Error loading specifications: {String(error)}</p>

  return (
    <MaxWidthWrapper>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5'>
        {/* Specification Image */}
        <div>
      {specImg.length > 0 ? (
  <Image
    src={specImg[0].image}
    alt={specImg[0].title}
    width={600}
    height={400}
    className="rounded-md"
  />
) : (
  <p>No image found</p>
)}
        </div>

        {/* Specification Text */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-gray-800">{description.title}</h2>
          <ol className="list-decimal pl-6 space-y-1">
            {description.specs.map((item: string, index: number) => (
              <li className='text-base font-medium text-gray-600 my-2.5' key={index}>{item}</li>
            ))}
          </ol>
        </div>
      </div>

       <div className="mt-5">
        <Link
          href="#order"
          className="relative overflow-hidden text-xl font-bold text-white bg-green-500 px-6 py-3 rounded-md w-full block text-center group"
        >
          <span className="relative z-10">Shop Your Product</span>
          <span className="absolute top-0 left-0 w-full h-full bg-white opacity-10 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
        </Link>
      </div>
    </MaxWidthWrapper>
  )
}

export default Specification
