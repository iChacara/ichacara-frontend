"use client";

import { AnnouncementPropertyInfoStepProps } from "@/lib/interfaces";
import { showToast } from "@/lib/utils";
import { useEffect } from "react";

export default function PropertyStep({
  register,
  errors,
}: AnnouncementPropertyInfoStepProps) {
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
      <label
        htmlFor="name"
        className="flex flex-col gap-2 font-poppins font-bold text-base text-[#3B4848] -tracking-[0.019rem]"
      >
        Nome da chácara
        <input
          {...register("propertyInfo.name")}
          className="flex-grow border-[0.0625rem] border-[#6F7978] h-10 p-3 rounded-lg font-normal text-sm placeholder-[#6F7978]"
          type="text"
          id="name"
          placeholder="Nome da chácara"
          aria-label="Campo de nome da chácara"
        />
      </label>

      <label
        htmlFor="title"
        className="flex flex-col gap-2 font-poppins font-bold text-base text-[#3B4848] -tracking-[0.019rem]"
      >
        Título do anúncio
        <input
          {...register("propertyInfo.title")}
          className="flex-grow border-[0.0625rem] border-[#6F7978] h-10 p-3 rounded-lg font-normal text-sm placeholder-[#6F7978]"
          type="text"
          id="title"
          placeholder="Título do anúncio"
          aria-label="Campo de título do anúncio"
        />
      </label>

      <label
        htmlFor="description"
        className="flex flex-col gap-2 font-poppins font-bold text-base text-[#3B4848] -tracking-[0.019rem]"
      >
        Descrição
        <textarea
          {...register("propertyInfo.description")}
          className="resize-none flex-grow border-[0.0625rem] border-[#6F7978] h-48 p-3 rounded-lg font-normal text-sm placeholder-[#6F7978]"
          id="description"
          placeholder="Descrição do anúncio"
          aria-label="Campo de descrição"
        />
      </label>
    </div>
  );
}
