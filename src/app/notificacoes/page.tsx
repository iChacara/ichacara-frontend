"use client";

import Switch from "@/components/Switch";
import IconArrowForward from "@material-design-icons/svg/outlined/arrow_forward.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NotificacaoPage() {
  const notifications = [
    {
      description: "Jorge da silva quer agendar sua chácara",
      farmPicUrl: "https://placehold.co/100x100.png",
    },
  ];

  return (
    <main className="min-h-dvh h-full mb-24 p-8 flex flex-col items-center gap-8">
      <h1 className="text-3xl text-gray-900 font-bold">Notificações</h1>

      <ul>
        <li className="border-b-2 border-b-gray-100 p-4 hover:bg-gray-100 transition-all">
          <Link
            href={"AKSDLAKS"}
            className="flex gap-4 w-full items-center rounded-xl"
          >
            <Image
              src={notifications[0].farmPicUrl}
              alt={notifications[0].description}
              width={30}
              height={30}
              className="rounded-lg"
            ></Image>
            <h3 className="text-base text-gray-600">
              {notifications[0].description}
            </h3>
          </Link>
        </li>
        <li className="border-b-2 border-b-gray-100 p-4 hover:bg-gray-100 transition-all">
          <Link
            href={"AKSDLAKS"}
            className="flex gap-4 w-full items-center rounded-xl"
          >
            <Image
              src={notifications[0].farmPicUrl}
              alt={notifications[0].description}
              width={30}
              height={30}
              className="rounded-lg"
            ></Image>
            <h3 className="text-base text-gray-600">
              {notifications[0].description}
            </h3>
          </Link>
        </li>
        <li className="border-b-2 border-b-gray-100 p-4 hover:bg-gray-100 transition-all">
          <Link
            href={"AKSDLAKS"}
            className="flex gap-4 w-full items-center rounded-xl"
          >
            <Image
              src={notifications[0].farmPicUrl}
              alt={notifications[0].description}
              width={30}
              height={30}
              className="rounded-lg"
            ></Image>
            <h3 className="text-base text-gray-600">
              {notifications[0].description}
            </h3>
          </Link>
        </li>
        <li className=" p-4 hover:bg-gray-100 transition-all">
          <Link
            href={"AKSDLAKS"}
            className="flex gap-4 w-full items-center rounded-xl"
          >
            <Image
              src={notifications[0].farmPicUrl}
              alt={notifications[0].description}
              width={30}
              height={30}
              className="rounded-lg"
            ></Image>
            <h3 className="text-base text-gray-600">
              {notifications[0].description}
            </h3>
          </Link>
        </li>
      </ul>
    </main>
  );
}
