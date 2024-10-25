"use client";

import { AnnouncementPricingStepProps } from "@/lib/interfaces";
import { showToast } from "@/lib/utils";
import { PriceMask } from "@/utils/masks";
import { useEffect } from "react";

export default function PrecificationStep({
  register,
  errors,
  setValue,
  watch,
}: AnnouncementPricingStepProps) {
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

  const currentPrice = watch("pricing.dailyPrice");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    const sanitizedValue = inputValue.replace(/[^0-9,.]/g, "");
    setValue("pricing.dailyPrice", parseFloat(sanitizedValue) || 0);
  };

  return (
    <div className="flex flex-col gap-4">
      <label
        htmlFor="dailyPrice"
        className="flex flex-col gap-2 font-poppins justify-center items-center font-normal text-2xl text-[#49607B] cursor-pointer"
      >
        <div className="relative flex items-center gap-2">
          <input
            {...(register("pricing.dailyPrice"),
            {
              onChange: handleChange,
            })}
            type="text"
            id="dailyPrice"
            className="opacity-0 w-0"
            placeholder="0,00"
            aria-label="Campo de preço da chácara"
            autoComplete="off"
          />
          <span className="block w-fit text-[2rem] font-bold text-light-primary">
            {PriceMask(currentPrice?.toString()) || "R$ 0,00"}
          </span>
        </div>
        / dia
      </label>
    </div>
  );
}
