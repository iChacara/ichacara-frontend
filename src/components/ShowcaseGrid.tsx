"use client";

import React from "react";
import AnnouncementCard from "./AnnouncementCard";
import { ShowcaseProps } from "@/lib/types";

export default function ShowcaseGrid({
  title = "As mais visitadas",
}: ShowcaseProps) {
  return (
    <section className="max-w-screen-2xl mx-auto w-[calc(100%-4rem)]">
      <div className="flex flex-col gap-2">
        <span className="font-poppins font-normal text-[1.25rem]/[2rem] text-light-on-primary-container">
          {title}
        </span>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array(8)
            .fill(null)
            .map((_, index) => (
              <AnnouncementCard key={index} />
            ))}
        </div>
      </div>
    </section>
  );
}
