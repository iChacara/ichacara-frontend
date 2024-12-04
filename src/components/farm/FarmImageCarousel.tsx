"use client";

import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";
import IconArrowBack from "@material-design-icons/svg/outlined/arrow_back.svg";
import IconFavorite from "@material-design-icons/svg/outlined/favorite.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

import "swiper/css";
import "swiper/css/pagination";
interface FarmImageCarouselProps {
  images: string[];
}

export default function FarmImageCarousel({ images }: FarmImageCarouselProps) {
  const router = useRouter();

  const updatePaginationCounter = (
    swiper: any,
    element: HTMLElement | null
  ) => {
    if (element) {
      element.textContent = `${swiper.activeIndex + 1}/${images.length}`;
    }
  };

  return (
    <div className="relative w-full h-80">
      <Swiper
        className="h-full w-full"
        modules={[Pagination]}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 5,
          renderBullet: (index, className) =>
            `<span class="${className}" style="background-color: #ffffff; transition: all 0.2s ease-in-out"></span>`,
        }}
        onSwiper={(swiper) => {
          const paginationCounter = document.querySelector(
            ".swiper-pagination-count"
          ) as HTMLElement | null;
          updatePaginationCounter(swiper, paginationCounter);
        }}
        onSlideChange={(swiper) => {
          const paginationCounter = document.querySelector(
            ".swiper-pagination-count"
          ) as HTMLElement | null;
          updatePaginationCounter(swiper, paginationCounter);
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} aria-label={`Slide ${index + 1}`}>
            <div className="relative h-full w-full">
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <p className="swiper-pagination-count min-w-[3.375rem] font-inter text-sm font-medium absolute bottom-7 left-0 right-0 m-auto z-10 text-light-primary bg-[#F4FBF9] flex items-center justify-center w-fit py-2 px-3 rounded-lg">
        1/{images.length}
      </p>

      <div className="absolute z-10 top-2 left-0 right-0 w-full max-w-[calc(100%-1rem)] m-auto flex justify-between">
        <button
          onClick={() => router.back()}
          className="bg-light-on-primary-container p-2 rounded-full shadow-lg hover:bg-light-primary transition duration-200"
        >
          <IconArrowBack className="fill-white" width={16} height={16} />
        </button>

        <button
          onClick={() => console.log("Favoritos")}
          className="bg-light-on-primary-container p-2 rounded-full shadow-lg hover:bg-light-primary transition duration-200"
        >
          <IconFavorite
            className="stroke-white fill-transparent"
            width={16}
            height={16}
          />
        </button>
      </div>
    </div>
  );
}
