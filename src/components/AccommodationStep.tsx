"use client";

import IconHelp from "@material-design-icons/svg/outlined/help_outline.svg";

export default function AccommodationStep() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-[0.375rem]">
        <label
          htmlFor="numRooms"
          className="flex flex-col gap-2 font-poppins font-bold text-base text-[#3B4848] -tracking-[0.019rem] flex-[0_1_50%] min-w-0"
        >
          Nº de quartos
          <input
            className="[&::-webkit-inner-spin-button]:appearance-none border border-[#6F7978] h-10 p-3 rounded-lg font-normal text-sm placeholder-[#6F7978]"
            type="number"
            name="numRooms"
            id="numRooms"
            placeholder="Somente números"
            aria-label="Campo de número de quartos"
            // value={formData.numRooms}
            // onChange={handleChange}
          />
        </label>

        <label
          htmlFor="numBeds"
          className="flex flex-col gap-2 font-poppins font-bold text-base text-[#3B4848] -tracking-[0.019rem] flex-[0_1_50%] min-w-0"
        >
          Nº de camas
          <input
            className="[&::-webkit-inner-spin-button]:appearance-none border border-[#6F7978] h-10 p-3 rounded-lg font-normal text-sm placeholder-[#6F7978]"
            type="number"
            name="numBeds"
            id="numBeds"
            placeholder="Somente números"
            aria-label="Campo de número de camas"
            // value={formData.numBeds}
            // onChange={handleChange}
          />
        </label>
      </div>

      <label
        htmlFor="numBathrooms"
        className="flex flex-col gap-2 font-poppins font-bold text-base text-[#3B4848] -tracking-[0.019rem]"
      >
        Número de banheiros
        <input
          className="[&::-webkit-inner-spin-button]:appearance-none flex-grow border-[0.0625rem] border-[#6F7978] h-10 p-3 rounded-lg font-normal text-sm placeholder-[#6F7978]"
          type="number"
          name="numBathrooms"
          id="numBathrooms"
          placeholder="Somente números"
          aria-label="Campo de número de banheiros"
          // value={formData.numBathrooms}
          // onChange={handleChange}
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
          className="[&::-webkit-inner-spin-button]:appearance-none flex-grow border-[0.0625rem] border-[#6F7978] h-10 p-3 rounded-lg font-normal text-sm placeholder-[#6F7978]"
          type="number"
          name="maxOccupancy"
          id="maxOccupancy"
          placeholder="Somente números"
          aria-label="Campo de lotação máxima"
          // value={formData.maxOccupancy}
          // onChange={handleChange}
        />
      </label>
    </div>
  );
}
