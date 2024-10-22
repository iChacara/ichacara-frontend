"use client";

import { ANNOUNCEMENT_SERVICES } from "@/utils/constants";
import IconCheck from "@material-design-icons/svg/outlined/check.svg";
import React from "react";

export default function AvailableServicesStep() {
  return (
    <>
      <div className="flex flex-wrap gap-4">
        {ANNOUNCEMENT_SERVICES.map(({ key, name }) => (
          <label
            key={key}
            htmlFor={key}
            className="group flex font-poppins font-medium text-[0.75rem]/[1rem] text-light-primary tracking-[0.0313rem] w-fit p-2 bg-[#F4FBF9] rounded-lg transition-all ease-in-out duration-300 has-[:checked]:bg-light-primary"
          >
            <IconCheck
              className="opacity-0 max-w-0 max-h-0 fill-white transition-all ease-in-out duration-300 group-has-[:checked]:opacity-100 group-has-[:checked]:mr-2 group-has-[:checked]:max-w-4 group-has-[:checked]:max-h-4"
              width={16}
              height={16}
            />

            <p className="flex gap-2 items-center transition-all ease-in-out duration-300 group-has-[:checked]:text-white">
              {name}
            </p>

            <input
              className="hidden"
              type="checkbox"
              name={key}
              id={key}
              aria-label={`Campo de ${name}`}
              // value={formData[key]}
              // onChange={handleChange}
            />
          </label>
        ))}
      </div>

      <div className="flex flex-col gap-8">
        <p className="font-poppins font-normal text-light-on-primary-container text-[1.5rem]/[2rem]">
          Destaques
        </p>

        <div className="flex flex-wrap gap-4">
          {ANNOUNCEMENT_SERVICES.map(({ key, name }) => (
            <label
              key={`teste-${key}`}
              htmlFor={`teste-${key}`}
              className="group flex font-poppins font-medium text-[0.75rem]/[1rem] text-light-primary tracking-[0.0313rem] w-fit p-2 bg-[#F4FBF9] rounded-lg transition-all ease-in-out duration-300 has-[:checked]:bg-light-primary"
            >
              <IconCheck
                className="opacity-0 max-w-0 max-h-0 fill-white transition-all ease-in-out duration-300 group-has-[:checked]:opacity-100 group-has-[:checked]:mr-2 group-has-[:checked]:max-w-4 group-has-[:checked]:max-h-4"
                width={16}
                height={16}
              />

              <p className="flex gap-2 items-center transition-all ease-in-out duration-300 group-has-[:checked]:text-white">
                {name}
              </p>

              <input
                className="hidden"
                type="checkbox"
                name={`teste-${key}`}
                id={`teste-${key}`}
                aria-label={`Campo de ${name}`}
                // value={formData[`teste-${key}`]}
                // onChange={handleChange}
              />
            </label>
          ))}
        </div>
      </div>
    </>
  );
}
