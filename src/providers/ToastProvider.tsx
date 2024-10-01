"use client";

import "react-toastify/dist/ReactToastify.css";
import "@/app/globals.css";
import { ToastContainer } from "react-toastify";
import { ProviderProps } from "@/lib/interfaces";
import React from "react";

export default function ToastProvider({ children }: ProviderProps) {
  const contextClass = {
    success: "bg-blue-600",
    error: "bg-red-600",
    info: "bg-gray-600",
    warning: "bg-orange-400",
    default: "bg-indigo-600",
  };

  return (
    <>
      {children}
      <ToastContainer
        toastClassName={(context) =>
          contextClass[context?.type || "default"] +
          " relative z-10 overflow-hidden	font-poppins cursor-pointer flex m-h-16 box-border mb-4 p-2 rounded-md shadow-[0_4px_12px_rgba(0,0,0,0.1)] justify-between"
        }
        bodyClassName={() =>
          "flex items-center p-1.5 my-auto mx-0 flex-auto text-sm font-white font-med"
        }
        newestOnTop
      />
    </>
  );
}
