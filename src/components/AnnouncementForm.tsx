"use client";

import IconArrowBack from "@material-design-icons/svg/outlined/arrow_back.svg";
import FormSteps from "./FormSteps";
import { showToast } from "@/lib/utils";
import useStepsContext from "@/hooks/useStepsContext";

export default function AnnouncementForm() {
  const { currentStep, steps, next, prev, formData } = useStepsContext();

  async function handleNext() {
    await next();
  }

  async function createAnnouncement(e: React.FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();

      console.log("ENVIAR PARA API");
    } catch (error: any) {
      showToast(
        "error",
        <p>{error.message || "Ocorreu um erro ao criar um anúncio!"}</p>
      );
    }
  }

  return (
    <section className="flex flex-col gap-8 w-[calc(100%-4rem)] max-w-screen-md mx-auto relative">
      <button className="flex items-center justify-center bg-light-primary rounded-md w-11 h-11">
        <IconArrowBack
          className="fill-white max-w-5 max-h-5"
          width={20}
          height={20}
        />
      </button>

      <p className="font-poppins font-normal text-light-on-primary-container text-[1.5rem]/[2rem]">
        {steps[currentStep].name}
      </p>

      <form onSubmit={createAnnouncement} className="flex flex-col gap-6">
        {steps[currentStep].component}

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
              type={steps.length - 1 === currentStep ? "submit" : "button"}
              aria-label="Avançar"
              className="py-4 bg-light-primary rounded-lg font-inter font-bold text-[1.125rem]/[1.5rem] text-white -tracking-[0.0112rem] w-full max-w-36 transition-all ease-in-out duration-300"
              onClick={handleNext}
            >
              Avançar
            </button>
          </div>

          <FormSteps />
        </div>
      </form>
    </section>
  );
}
