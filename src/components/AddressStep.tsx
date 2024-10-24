"use client";

import { showToast } from "@/lib/utils";
import { CEPMask } from "@/utils/masks";
import { useCEP } from "@/hooks/useCEP";
import IconHelp from "@material-design-icons/svg/outlined/help_outline.svg";
import { useEffect } from "react";
import { AnnouncementAddressStepProps } from "@/lib/interfaces";

export default function AddressStep({
  register,
  errors,
  setValue,
}: AnnouncementAddressStepProps) {
  const { cepData, cepError, cepLoading, fetchCEP } = useCEP();

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

  useEffect(() => {
    if (cepError) {
      showToast("error", <p>{cepError}</p>);

      setValue("address.street", "");
      setValue("address.complement", "");
      setValue("address.district", "");
      setValue("address.city", "");
      setValue("address.state", "");
    }

    if (cepData && !cepLoading) {
      setValue("address.street", cepData.logradouro || "");
      setValue("address.complement", cepData.complemento || "");
      setValue("address.district", cepData.bairro || "");
      setValue("address.city", cepData.localidade || "");
      setValue("address.state", cepData.uf || "");
    }
  }, [cepLoading, cepData, register, cepError]);

  const handleCEPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const maskedValue = CEPMask(e.target.value);
    e.target.value = maskedValue;

    fetchCEP(maskedValue);
  };

  return (
    <div className="flex flex-col gap-4">
      <label
        htmlFor="cep"
        className="flex flex-col gap-2 font-poppins font-bold text-base text-[#3B4848] -tracking-[0.019rem]"
      >
        <p className="flex gap-2 items-center">
          CEP
          <IconHelp
            className="fill-[#2D3648] max-w-4 max-h-4 cursor-pointer"
            width={16}
            height={16}
          />
        </p>
        <input
          {...register("address.cep", {
            setValueAs: (value: string) => CEPMask(value),
          })}
          maxLength={9}
          onChange={handleCEPChange}
          className="flex-grow border-[0.0625rem] border-[#6F7978] h-10 p-3 rounded-lg font-normal text-sm placeholder-[#6F7978]"
          type="text"
          id="cep"
          placeholder="Somente números"
          aria-label="Campo de CEP"
        />
      </label>

      <label
        htmlFor="street"
        className="flex flex-col gap-2 font-poppins font-bold text-base text-[#3B4848] -tracking-[0.019rem]"
      >
        Rua
        <input
          {...register("address.street")}
          className="flex-grow border-[0.0625rem] border-[#6F7978] h-10 p-3 rounded-lg font-normal text-sm placeholder-[#6F7978]"
          type="text"
          id="street"
          placeholder="Ex.: Avenida Angélica"
          aria-label="Campo de rua"
        />
      </label>

      <div className="flex gap-6">
        <label
          htmlFor="number"
          className="flex flex-col gap-2 font-poppins font-bold text-base text-[#3B4848] -tracking-[0.019rem] flex-[0_1_30%] min-w-0"
        >
          Número
          <input
            {...register("address.number")}
            className="border border-[#6F7978] h-10 p-3 rounded-lg font-normal text-sm placeholder-[#6F7978]"
            type="text"
            id="number"
            aria-label="Campo de número"
          />
        </label>

        <label
          htmlFor="complement"
          className="flex flex-col gap-2 font-poppins font-bold text-base text-[#3B4848] -tracking-[0.019rem] flex-[0_1_70%] min-w-0"
        >
          <p className="flex gap-1">
            Complemento
            <span className="text-[0.6875rem]/[1.5rem] text-[#6F7978] font-normal">
              (opcional)
            </span>
          </p>
          <input
            {...register("address.complement")}
            className="border border-[#6F7978] h-10 p-3 rounded-lg font-normal text-sm placeholder-[#6F7978]"
            type="text"
            id="complement"
            placeholder="Ex.: Fundos, bloco 4"
            aria-label="Campo de complemento"
          />
        </label>
      </div>

      <label
        htmlFor="district"
        className="flex flex-col gap-2 font-poppins font-bold text-base text-[#3B4848] -tracking-[0.019rem]"
      >
        Bairro
        <input
          {...register("address.district")}
          className="flex-grow border-[0.0625rem] border-[#6F7978] h-10 p-3 rounded-lg font-normal text-sm placeholder-[#6F7978]"
          type="text"
          id="district"
          placeholder="Ex.: Higienópolis"
          aria-label="Campo de bairro"
        />
      </label>

      <div className="flex gap-6">
        <label
          htmlFor="city"
          className="flex flex-col gap-2 font-poppins font-bold text-base text-[#3B4848] -tracking-[0.019rem] flex-[0_1_70%] min-w-0"
        >
          Cidade
          <input
            {...register("address.city")}
            className="border border-[#6F7978] h-10 p-3 rounded-lg font-normal text-sm placeholder-[#6F7978]"
            type="text"
            id="city"
            placeholder="Ex.: São Paulo"
            aria-label="Campo de cidade"
          />
        </label>

        <label
          htmlFor="state"
          className="flex flex-col gap-2 font-poppins font-bold text-base text-[#3B4848] -tracking-[0.019rem] flex-[0_1_30%] min-w-0"
        >
          Estado
          <input
            {...register("address.state")}
            className="border border-[#6F7978] h-10 p-3 rounded-lg font-normal text-sm placeholder-[#6F7978]"
            type="text"
            id="state"
            aria-label="Campo de estado"
          />
        </label>
      </div>
    </div>
  );
}
