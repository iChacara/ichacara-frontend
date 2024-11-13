"use client";

import React from "react";
import AnnouncementCard from "./AnnouncementCard";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { ShowcaseProps } from "@/lib/types";

export default function ShowcaseCarousel({
  title = "Chácaras perto de você",
  farms,
}: ShowcaseProps) {
  return (
    <section className="max-w-screen-2xl mx-auto w-[calc(100%-4rem)]">
      <div className="flex flex-col gap-2 mr-[-2rem]">
        <span className="font-poppins font-normal text-[1.25rem]/[2rem] text-light-on-primary-container">
          {title}
        </span>

        <Swiper
          spaceBetween={16}
          slidesPerView={1.4}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 32,
            },
          }}
          className="h-80 max-h-80 w-full"
        >
          {farms.map((farm, index) => (
            <SwiperSlide key={index}>
              <AnnouncementCard type="carousel" farm={farm} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
