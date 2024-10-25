"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { showToast } from "@/lib/utils";
import IconArrowBack from "@material-design-icons/svg/outlined/arrow_back.svg";
import FormSteps from "./FormSteps";
import AddressStep from "./AddressStep";
import AccommodationStep from "./AccommodationStep";
import AvailableServicesStep from "./AvailableServicesStep";
import ImagesStep from "./ImagesStep";
import PropertyStep from "./PropertyStep";
import PrecificationStep from "./PrecificationStep";
import { announcementSchema } from "@/lib/zodSchemas";
import { AnnouncementFormValues } from "@/lib/types";

const steps = [
  "Endereço",
  "Acomodação",
  "Serviços disponíveis",
  "Imagens",
  "Chácara",
  "Precificação",
];

export default function AnnouncementForm() {
  const [currentStep, setCurrentStep] = useState(0);

  const {
    register,
    setValue,
    getValues,
    formState: { errors },
    watch,
    trigger,
  } = useForm<AnnouncementFormValues>({
    resolver: zodResolver(announcementSchema),
    mode: "onTouched",
    defaultValues: {
      services: {
        services: [],
      },
      highlights: {
        highlights: [],
      },
      images: {
        images: [],
      },
      pricing: {
        dailyPrice: 0,
      },
    },
  });

  const createAnnouncement = async () => {
    const data = getValues();

    console.log(data);

    try {
      const response = await fetch("/api/farm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const { errors, message } = await response.json();

      if (!response.ok) {
        if (errors && Array.isArray(errors)) {
          showToast(
            "error",
            <>
              <p className="mb-2">Por favor, corrija os seguintes erros:</p>
              {errors.map((error: string, index: number) => (
                <p key={index} className="mb-1">
                  - {error}
                </p>
              ))}
            </>
          );
        } else if (message) {
          showToast("error", <p>{message}</p>);
        } else {
          showToast("error", <p>Ocorreu um erro desconhecido!</p>);
        }
        return;
      }

      showToast("success", <p>{message}</p>);
      // router.push("/");
    } catch (error: any) {
      showToast(
        "error",
        <p>{error.message || "Ocorreu um erro ao tentar logar!"}</p>
      );
    }
  };

  const handleNext = async () => {
    const isStepValid = await validateCurrentStep();
    if (isStepValid && currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }

    if (isStepValid && currentStep === steps.length - 1) {
      createAnnouncement();
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const validateCurrentStep = async () => {
    let isValid = false;

    switch (currentStep) {
      case 0:
        isValid = await trigger(["address"]);
        break;
      case 1:
        isValid = await trigger(["accommodation"]);
        break;
      case 2:
        isValid = await trigger(["services"]);
        break;
      case 3:
        isValid = await trigger(["images"]);
        break;
      case 4:
        isValid = await trigger(["propertyInfo"]);
        break;
      case 5:
        isValid = await trigger(["pricing"]);
        break;
      default:
        isValid = false;
    }

    return isValid;
  };

  return (
    <section className="flex flex-col gap-8 w-[calc(100%-4rem)] max-w-screen-md mx-auto relative">
      <button
        className="flex items-center justify-center bg-light-primary rounded-md w-11 h-11"
        onClick={prev}
        disabled={currentStep === 0}
      >
        <IconArrowBack
          className="fill-white max-w-5 max-h-5"
          width={20}
          height={20}
        />
      </button>

      <p className="font-poppins font-normal text-light-on-primary-container text-[1.5rem]/[2rem]">
        {steps[currentStep]}
      </p>

      <form className="flex flex-col gap-6">
        {currentStep === 0 && (
          <AddressStep
            register={register}
            errors={errors.address || {}}
            setValue={setValue}
          />
        )}
        {currentStep === 1 && (
          <AccommodationStep
            register={register}
            errors={errors.accommodation || {}}
          />
        )}
        {currentStep === 2 && (
          <AvailableServicesStep
            register={register}
            errors={errors.services || {}}
            setValue={setValue}
            getValues={getValues}
          />
        )}
        {currentStep === 3 && (
          <ImagesStep
            register={register}
            errors={errors.images || {}}
            setValue={setValue}
            getValues={getValues}
            watch={watch}
          />
        )}
        {currentStep === 4 && (
          <PropertyStep
            register={register}
            errors={errors.propertyInfo || {}}
          />
        )}
        {currentStep === 5 && (
          <PrecificationStep
            register={register}
            errors={errors.pricing || {}}
            setValue={setValue}
            watch={watch}
          />
        )}

        <div className="flex flex-col items-center w-full gap-8 py-4 bg-white">
          <div className="flex gap-8 items-center w-full justify-center">
            <button
              type="button"
              aria-label="Voltar"
              className="py-4 bg-white rounded-lg font-inter font-bold text-[1.125rem]/[1.5rem] border-[0.0625rem] border-light-primary text-light-primary -tracking-[0.0112rem] w-full max-w-36 disabled:text-[#3B484866] disabled:border-[#3B484866] transition-all ease-in-out duration-300"
              disabled={currentStep === 0}
              onClick={prev}
            >
              Voltar
            </button>

            <button
              type="button"
              aria-label={
                currentStep === steps.length - 1 ? "Enviar" : "Avançar"
              }
              className="py-4 bg-light-primary rounded-lg font-inter font-bold text-[1.125rem]/[1.5rem] text-white -tracking-[0.0112rem] w-full max-w-36 transition-all ease-in-out duration-300"
              onClick={handleNext}
            >
              {currentStep === steps.length - 1 ? "Enviar" : "Avançar"}
            </button>
          </div>

          <FormSteps currentStep={currentStep} steps={steps} />
        </div>
      </form>
    </section>
  );
}
