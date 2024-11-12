"use client";

import Image from "next/image";
import React from "react";
import IconStar from "@material-design-icons/svg/filled/star.svg";
import { AnnouncementCardProps } from "@/lib/types";
import Link from "next/link";

export default function AnnouncementCard({
  type = "full",
}: AnnouncementCardProps) {
  return (
    <Link
      href="#"
      aria-label="Chácara"
      className={`flex flex-col min-w-[14.375rem] rounded-lg overflow-hidden ${
        type === "carousel" ? "h-80" : "h-[20.625rem]"
      }`}
    >
      <figure
        className={`min-w-full max-w-full relative overflow-hidden rounded-br-lg rounded-bl-lg ${
          type === "full" ? "min-h-[17.125rem]" : "min-h-[12.5rem]"
        }`}
      >
        <Image
          src="https://placehold.co/1000x1000/3793E4/31343C"
          alt="Img"
          className="object-cover"
          fill
        />
      </figure>

      <div
        className={`flex flex-col py-2 px-1 ${
          type === "carousel" ? "gap-1" : "gap-0"
        }`}
      >
        <div className="flex gap-1 max-h-5">
          <p
            className={`flex-1 font-poppins font-medium text-light-primary line-clamp-1 ${
              type === "carousel" ? "text-sm" : "text-[1rem]/[1.25rem]"
            }`}
          >
            Chácara Monte dos Guarapanã
          </p>

          <div className="flex">
            <IconStar
              className="fill-light-primary max-w-5 max-h-5"
              width={20}
              height={20}
            />

            <p className="font-poppins font-medium text-sm text-light-primary">
              4.99 (10)
            </p>
          </div>
        </div>

        {type === "carousel" ? (
          <p className="font-poppins font-light text-xs text-light-on-primary-container line-clamp-5">
            A Chácara Monte dos Guarapanã é um espaço de lazer e eventos situado
            em um ambiente natural e acolhedor. Com uma ampla área verde, a
            chácara oferece diversas opções para quem busca tranquilidade,
            contato com a natureza ou um local especial para realizar eventos
            como casamentos, festas de aniversário, confraternizações e
            encontros familiares.
          </p>
        ) : (
          <p className="font-poppins font-normal text-[0.75rem]/[1.25rem] text-[#6F7978] tracking-[0.0156rem] line-clamp-1">
            Gabriel Rodrigues
          </p>
        )}
      </div>
    </Link>
  );
}
