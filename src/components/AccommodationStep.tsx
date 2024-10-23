"use client";

import { AnnouncementAccommodationStepProps } from "@/lib/interfaces";
import { showToast } from "@/lib/utils";
import IconHelp from "@material-design-icons/svg/outlined/help_outline.svg";
import { useEffect } from "react";

export default function AccommodationStep({
  register,
  errors,
}: AnnouncementAccommodationStepProps) {
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      showToast(
        "error",
        <>
          <p className="mb-2">Por favor, corrija os seguintes erros:</p>
          {Object.entries(errors).map(([key, value]) => (
            <p key={key} className="mb-1">
              - {value.message}
            </p>
          ))}
        </>
      );
    }
  }, [errors]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-[0.375rem]">
        <label
          htmlFor="numRooms"
          className="flex flex-col gap-2 font-poppins font-bold text-base text-[#3B4848] -tracking-[0.019rem] flex-[0_1_50%] min-w-0"
        >
          Nº de quartos
          <input
            {...register("accommodation.numRooms")}
            className="[&::-webkit-inner-spin-button]:appearance-none border border-[#6F7978] h-10 p-3 rounded-lg font-normal text-sm placeholder-[#6F7978]"
            type="number"
            id="numRooms"
            placeholder="Somente números"
            aria-label="Campo de número de quartos"
          />
        </label>

        <label
          htmlFor="numBeds"
          className="flex flex-col gap-2 font-poppins font-bold text-base text-[#3B4848] -tracking-[0.019rem] flex-[0_1_50%] min-w-0"
        >
          Nº de camas
          <input
            {...register("accommodation.numBeds")}
            className="[&::-webkit-inner-spin-button]:appearance-none border border-[#6F7978] h-10 p-3 rounded-lg font-normal text-sm placeholder-[#6F7978]"
            type="number"
            id="numBeds"
            placeholder="Somente números"
            aria-label="Campo de número de camas"
          />
        </label>
      </div>

      <label
        htmlFor="numBathrooms"
        className="flex flex-col gap-2 font-poppins font-bold text-base text-[#3B4848] -tracking-[0.019rem]"
      >
        Número de banheiros
        <input
          {...register("accommodation.numBathrooms")}
          className="[&::-webkit-inner-spin-button]:appearance-none flex-grow border-[0.0625rem] border-[#6F7978] h-10 p-3 rounded-lg font-normal text-sm placeholder-[#6F7978]"
          type="number"
          id="numBathrooms"
          placeholder="Somente números"
          aria-label="Campo de número de banheiros"
        />
      </label>

      <label
        htmlFor="maxOccupancy"
        className="flex flex-col gap-2 font-poppins font-bold text-base text-[#3B4848] -tracking-[0.019rem]"
      >
        <p className="flex gap-2 items-center">
          Lotação máxima
          <IconHelp
            className="fill-[#2D3648] max-w-4 max-h-4 cursor-pointer"
            width={16}
            height={16}
          />
        </p>
        <input
          {...register("accommodation.maxOccupancy")}
          className="[&::-webkit-inner-spin-button]:appearance-none flex-grow border-[0.0625rem] border-[#6F7978] h-10 p-3 rounded-lg font-normal text-sm placeholder-[#6F7978]"
          type="number"
          id="maxOccupancy"
          placeholder="Somente números"
          aria-label="Campo de lotação máxima"
        />
      </label>
    </div>
  );
}
