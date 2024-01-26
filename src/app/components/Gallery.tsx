// FullScreenSlider.js
import React, { useRef, useState } from 'react'
import Slider, { Settings } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Dot } from 'lucide-react'
import { cn } from '@/app/lib/utils'
import { IconGalleryItem } from '../config/siteConfig'

export const PhotoGallery = ({
  images,
  customSettings,
}: {
  images: string[]
  customSettings?: Settings
}) => {
  const sliderRef = useRef<Slider>(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const defaultSettings = {
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    beforeChange: (current: any, next: React.SetStateAction<number>) => {
      setActiveSlide(next)
    },
  }
  const settings = customSettings ? customSettings : defaultSettings
  const goToSlide = (index: number): void => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index)
    }
  }
  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext()
    }
  }

  const goToPrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev()
    }
  }
  return (
    <div className="full-screen-slider h-full ">
      <Slider {...settings} ref={sliderRef}>
        {images.map((image, index) => (
          <div className="relative slide h-full w-full bg-black" key={index}>
            <div className="absolute h-full w-full top-0 left-0 bg-gradient-to-b from-transparent from-75% to-100% to-primary"></div>
            <Image
              src={image}
              width={1000}
              height={1000}
              alt={image}
              className="h-full w-full object-cover object-top"
            />
          </div>
        ))}
      </Slider>
      <div className="absolute bottom-2 text-white w-full flex flex-row justify-center gap-2 px-2 sm:gap-5">
        <ChevronLeft
          className="bg-white bg-opacity-50 p-1 cursor-pointer hover:bg-opacity-25 rounded-full"
          onClick={goToPrevSlide}
        />
        <div className="flex flex-row justify-center items-center gap-2 px-2 sm:gap-5">
          {images.map((i, index) => (
            <Dot
              color="white"
              key={i + index}
              className={cn(
                'bg-white rounded-full w-[4px] h-[4px] cursor-pointer',
                activeSlide === index && 'w-[6px] h-[6px]',
              )}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
        <ChevronRight
          className="bg-white bg-opacity-50 p-1 cursor-pointer hover:bg-opacity-25 active:bg-opacity-25 rounded-full"
          onClick={goToNextSlide}
        />
      </div>
    </div>
  )
}

export const IconGallery = ({ items }: { items: IconGalleryItem[] }) => {
  const sliderRef = useRef<Slider>(null)
  const settings = {
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
  }
  return (
    <div className="rounded-full w-full h-full">
      <Slider {...settings} ref={sliderRef}>
        {items.map((ico, index) => (
          <a
            key={index}
            target="_target"
            href={ico.url}
            rel="noopener noreferrer"
            className="h-full"
          >
            <div className={cn('p-4 h-full', ico.className)} key={index}>
              <ico.icon className="text-white object-cover w-full h-full" />
            </div>
          </a>
        ))}
      </Slider>
    </div>
  )
}
