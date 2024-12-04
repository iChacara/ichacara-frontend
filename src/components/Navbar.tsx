"use client";

import React from "react";
import IconHome from "@material-design-icons/svg/outlined/home.svg";
import IconCalendarMonth from "@material-design-icons/svg/outlined/calendar_month.svg";
import IconMenu from "@material-design-icons/svg/outlined/person.svg";
import IconNotifications from "@material-design-icons/svg/outlined/notifications.svg";

import Link from "next/link";

export default function Navbar() {
  return (
    <ul className="w-full fixed bottom-0 h-20 bg-white shadow-3xl rounded-t-full flex justify-center gap-16 items-center">
      <li>
        <Link
          href={"/chacaras"}
          className="gap-1 flex flex-col justify-end items-center fill-gray-700 text-gray-700 hover:fill-black hover:text-black transition-colors"
        >
          <IconHome className="fill-inherit" width={28} height={28} />
          <span className="text-sm text-inherit">Início</span>
        </Link>
      </li>
      <li>
        <Link
          href={"/chacaras"}
          className="gap-1 flex flex-col justify-end items-center fill-gray-700 text-gray-700 hover:fill-black hover:text-black transition-colors"
        >
          <IconCalendarMonth className="fill-inherit" width={28} height={28} />
          <span className="text-sm text-inherit">Agendamentos</span>
        </Link>
      </li>
      <li>
        <Link
          href={"/notificacoes"}
          className="gap-1 flex flex-col justify-end items-center fill-gray-700 text-gray-700 hover:fill-black hover:text-black transition-colors"
        >
          <IconNotifications className="fill-inherit" width={28} height={28} />
          <span className="text-sm text-inherit">Notificações</span>
        </Link>
      </li>
      <li>
        <Link
          href={"/perfil"}
          className="gap-1 flex flex-col justify-end items-center fill-gray-700 text-gray-700 hover:fill-black hover:text-black transition-colors"
        >
          <IconMenu className="fill-inherit" width={28} height={28} />
          <span className="text-sm text-inherit">Menu</span>
        </Link>
      </li>
    </ul>
  );
}
