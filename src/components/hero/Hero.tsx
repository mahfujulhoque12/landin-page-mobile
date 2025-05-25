'use client'
import React, { useState, useEffect } from 'react'
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { useGetBannersQuery } from '@/redux/features/api/bannerApi'
import Image from 'next/image'
import MaxWidthWrapper from '../MaxWidthWrapper'

const Hero = () => {
  const { data: banners = [], isLoading } = useGetBannersQuery()
  const [api, setApi] = useState<CarouselApi>()
  const [currentIndex, setCurrentIndex] = useState(0)

  // listen for slide changes
  useEffect(() => {
    if (!api) return
    const onSelect = () => setCurrentIndex(api.selectedScrollSnap())
    api.on('select', onSelect)
    onSelect() // init
    return () => void api.off('select', onSelect)
  }, [api])

  if (isLoading) return <p>Loading…</p>

  // always 4 dots
  const dotCount = 4
  const groupSize = Math.ceil(banners.length / dotCount)
  const dotIndices = Array.from({ length: dotCount }).map((_, i) =>
    Math.min(i * groupSize, banners.length - 1)
  )
  const activeDot = Math.min(Math.floor(currentIndex / groupSize), dotCount - 1)

  return (
    <MaxWidthWrapper>
      {/* Make this the positioned container */}
      <div className="relative h-[200px] overflow-hidden">
        <Carousel setApi={setApi} opts={{ loop: true }}>
          <CarouselContent>
            {banners.map((b) => (
              <CarouselItem key={b.id}>
                <Image
                  src={b.image}
                  alt={b.title}
                  width={800}
                  height={500}
                  className="rounded-md"
                />
              </CarouselItem>
            ))}
          </CarouselContent>

     
        </Carousel>

        {/* Dots are now absolutely positioned relative to the <div className="relative"> */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {dotIndices.map((targetIndex, i) => (
            <button
              key={i}
              className={`
                h-2 w-2 rounded-full transition-transform
                ${activeDot === i ? 'bg-white scale-125' : 'bg-gray-300'}
              `}
              aria-label={`Go to group ${i + 1}`}
              onClick={() => api?.scrollTo(targetIndex)}
            />
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

export default Hero
