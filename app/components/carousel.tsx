'use client';

import Image from "next/image";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

interface CarouselImage {
  src: string;
  alt: string;
}

interface CarouselProps {
  images: CarouselImage[];
}

export function Carousel({ images }: CarouselProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      loop={true}
      className="w-full h-full"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Image 
            src={image.src}
            alt={image.alt}
            fill
            style={{ objectFit: 'contain' }}
            priority={index === 0}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
} 