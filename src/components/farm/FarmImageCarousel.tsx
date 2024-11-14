"use client";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";

export default function FarmImageCarousel({ images }: { images: string[] }) {
  return (
    <Swiper
      className="h-80 max-h-80 w-full"
      modules={[Navigation]}
      navigation={true}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div>
            <Image src={image} alt="Faz o L" fill objectFit="cover" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
