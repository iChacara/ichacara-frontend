"use client";

import React from "react";
import IconHome from "@material-design-icons/svg/outlined/home.svg";
import IconCalendarMonth from "@material-design-icons/svg/outlined/calendar_month.svg";
import IconMenu from "@material-design-icons/svg/outlined/person.svg";
import Link from "next/link";
interface SwitchProps {
  isOn: boolean;
  handleToggle: any;
}

export default function Switch({ isOn, handleToggle }: SwitchProps) {
  return (
    <div
      onClick={handleToggle}
      className={`${
        isOn ? "bg-green-500" : "bg-gray-300"
      } relative w-12 h-6 flex items-center rounded-full cursor-pointer transition-colors duration-300`}
    >
      <div
        className={`${
          isOn ? "translate-x-7" : "translate-x-1"
        } w-4 h-4 bg-white rounded-full transform transition-transform duration-300`}
      />
    </div>
  );
}
