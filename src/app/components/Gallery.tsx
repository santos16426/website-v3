// FullScreenSlider.js
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Dot } from 'lucide-react';
import { cn } from '@/app/lib/utils';
import { DigitalSpaceItem } from '../config/siteConfig';

export const PhotoGallery = ({ 
        images 
    }:{ 
        images: string[]
    }) => {
    const sliderRef = useRef<Slider>(null);
    const [activeSlide, setActiveSlide] = useState(0);
    const settings = {
        dots: false,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        beforeChange: (current: any, next: React.SetStateAction<number>) => {
            setActiveSlide(next);
        },
    };
    const goToSlide = (index: number): void => {
        if (sliderRef.current) {
          sliderRef.current.slickGoTo(index);
        }
      };
    const goToNextSlide = () => {
        if (sliderRef.current) {
          sliderRef.current.slickNext();
        }
      };
    
      const goToPrevSlide = () => {
        if (sliderRef.current) {
          sliderRef.current.slickPrev();
        }
      };
  return (
    <div className="full-screen-slider">
        <Slider {...settings} ref={sliderRef}>
            {images.map((image,index)=>(
                <div className="slide" key={index}>
                    <Image src={image} width={1000} height={1000} alt={image} className="object-cover h-full w-full" />
                </div>
            ))}
        </Slider>
        <div className='absolute bottom-2 text-white w-full flex flex-row justify-center gap-2 px-2 sm:gap-5'>
            <ChevronLeft className='bg-white bg-opacity-50 p-1 cursor-pointer hover:bg-opacity-25 rounded-full' onClick={goToPrevSlide}/>
            <div className='flex flex-row justify-center items-center gap-2 px-2 sm:gap-5'>
            {images.map((i,index)=>(
                <Dot 
                    color='white' 
                    key={i+index} 
                    className={cn('bg-white rounded-full w-[4px] h-[4px] cursor-pointer', activeSlide===index && 'w-[6px] h-[6px]')}
                    onClick={()=>goToSlide(index)}
                />
            ))}
            </div>
            <ChevronRight className='bg-white bg-opacity-50 p-1 cursor-pointer hover:bg-opacity-25 active:bg-opacity-25 rounded-full' onClick={goToNextSlide}/>
        </div>
    </div>
    );
};

export const IconGallery = ({items}:{items:DigitalSpaceItem[]}) =>{
    const sliderRef = useRef<Slider>(null);
    const settings = {
        dots: false,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 1,
    };
    return(
    <div className="rounded-full">
        <Slider {...settings} ref={sliderRef}>
            {items.map((ico,index)=>(
                <a key={index} target='_target' href={ico.url}>
                    <div className={cn('overflow-hidden',ico.className)} key={index}>
                        <ico.icon className='text-white p-6 mt-[-8px] h-full w-full'/>
                    </div>
                </a>
            ))}
        </Slider>
    </div>
)}