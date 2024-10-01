"use client";

import { StepsContextProviderProps } from "@/lib/interfaces";
import { StepsContextType } from "@/lib/types";
import { createContext, useState } from "react";

export const StepsContext = createContext<StepsContextType | null>(null);

export default function StepsContextProvider({
  children,
  steps,
}: StepsContextProviderProps) {
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const initialFormData = steps.reduce((acc, step) => {
    step.fields.forEach((field) => {
      acc[field] = "";
    });
    return acc;
  }, {} as Record<string, string>);

  const [formData, setFormData] = useState(initialFormData);

  const next = async () => {
    if (currentStep < steps.length - 1) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step + 1);
    }
  };

  const prev = () => {
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
      }}
    >
      {children}
    </StepsContext.Provider>
  );
}
