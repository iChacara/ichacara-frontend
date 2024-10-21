"use client";

import { StepsContextProviderProps } from "@/lib/interfaces";
import { StepsContextType } from "@/lib/types";
import { createContext, useState } from "react";
import { AnnouncementSchema } from "@/lib/zodSchemas";
import { showToast } from "@/lib/utils";

export const StepsContext = createContext<StepsContextType | null>(null);

export default function StepsContextProvider({
  children,
  steps,
}: StepsContextProviderProps) {
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [errors, setErrors] = useState<Record<string, string[]>>({});

  const initialFormData = steps.reduce((acc, step) => {
    step.fields.forEach((field) => {
      acc[field] = "";
    });
    return acc;
  }, {} as Record<string, string>);

  const [formData, setFormData] = useState(initialFormData);

  const validateStep = (stepFields: string[]) => {
    const stepData = stepFields.reduce((acc, field) => {
      acc[field] = formData[field];
      return acc;
    }, {} as Record<string, any>);

    const schemaForStep = AnnouncementSchema.pick(
      stepFields.reduce((acc, field) => {
        acc[field as keyof typeof AnnouncementSchema.shape] = true;
        return acc;
      }, {} as Record<keyof typeof AnnouncementSchema.shape, true>)
    );

    console.log("DADOS: ", stepData)

    const result = schemaForStep.safeParse(stepData);

    if (!result.success) {
      return result.error.formErrors.fieldErrors;
    }

    return null;
  };

  const next = async () => {
    const stepFields = steps[currentStep].fields;
    const validationErrors = validateStep(stepFields);

    if (validationErrors) {
      setErrors(validationErrors);
      const errorMessages = Object.values(validationErrors).flat();
      showToast(
        "error",
        <>
          <p className="mb-2">Por favor, corrija os seguintes erros:</p>
          {errorMessages.map((error: string, index: number) => (
            <p key={index} className="mb-1">
              - {error}
            </p>
          ))}
        </>
      );
    } else {
      setErrors({});
      if (currentStep < steps.length - 1) {
        setPreviousStep(currentStep);
        setCurrentStep((step) => step + 1);
      }
    }
  };

  const prev = async () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };

  return (
    <StepsContext.Provider
      value={{
        previousStep,
        setPreviousStep,
        currentStep,
        setCurrentStep,
        next,
        prev,
        steps,
        formData,
        setFormData,
        errors,
      }}
    >
      {children}
    </StepsContext.Provider>
  );
}
