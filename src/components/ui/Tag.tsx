"use client";

import { Swiper, SwiperSlide } from "swiper/react";

export default function TagComponent({ services }: { services: string[] }) {
  return (
    <>
      <Swiper
        className="h-80 max-h-80 w-full !overflow-visible"
        slidesPerView="auto"
        spaceBetween={8}
        autoHeight={true}
      >
        {services.map((service, index) => (
          <SwiperSlide className="!w-fit" key={index}>
            <span
              key={index}
              className="gap-2 group flex font-poppins font-medium text-[0.75rem]/[1rem] text-light-primary tracking-[0.0313rem] w-fit p-2 bg-[#F4FBF9] rounded-lg cursor-pointer transition-all ease-in-out duration-300 has-[:checked]:bg-light-primary"
            >
              <p className="flex gap-2 items-center transition-all ease-in-out duration-300 group-has-[:checked]:text-white text-nowrap">
                {service}
              </p>
            </span>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
