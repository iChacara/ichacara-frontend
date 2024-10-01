"use client";

import useStepsContext from "@/hooks/useStepsContext";
import IconHelp from "@material-design-icons/svg/outlined/help_outline.svg";

export default function AccommodationStep() {
  const { formData, setFormData } = useStepsContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-[0.375rem]">
        <label
          htmlFor="rooms"
          className="flex flex-col gap-2 font-poppins font-bold text-base text-[#3B4848] -tracking-[0.019rem] flex-[0_1_50%] min-w-0"
        >
          Nº de quartos
          <input
            className="border border-[#6F7978] h-10 p-3 rounded-lg font-normal text-sm placeholder-[#6F7978]"
            type="text"
            name="rooms"
            id="rooms"
            placeholder="Somente números"
            aria-label="Campo de número de quartos"
            value={formData.rooms}
            onChange={handleChange}
          />
        </label>

        <label
          htmlFor="beds"
          className="flex flex-col gap-2 font-poppins font-bold text-base text-[#3B4848] -tracking-[0.019rem] flex-[0_1_50%] min-w-0"
        >
          Nº de camas
          <input
            className="border border-[#6F7978] h-10 p-3 rounded-lg font-normal text-sm placeholder-[#6F7978]"
            type="text"
            name="beds"
            id="beds"
            placeholder="Somente números"
            aria-label="Campo de número de camas"
            value={formData.beds}
            onChange={handleChange}
          />
        </label>
      </div>

      <label
        htmlFor="bathrooms"
        className="flex flex-col gap-2 font-poppins font-bold text-base text-[#3B4848] -tracking-[0.019rem]"
      >
        Número de banheiros
        <input
          className="flex-grow border-[0.0625rem] border-[#6F7978] h-10 p-3 rounded-lg font-normal text-sm placeholder-[#6F7978]"
          type="text"
          name="bathrooms"
          id="bathrooms"
          placeholder="Somente números"
          aria-label="Campo de número de banheiros"
          value={formData.bathrooms}
          onChange={handleChange}
        />
      </label>

      <label
        htmlFor="lotation"
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
          className="flex-grow border-[0.0625rem] border-[#6F7978] h-10 p-3 rounded-lg font-normal text-sm placeholder-[#6F7978]"
          type="text"
          name="lotation"
          id="lotation"
          placeholder="Somente números"
          aria-label="Campo de lotação máxima"
          value={formData.lotation}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}
