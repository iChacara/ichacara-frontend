import { Dispatch, SetStateAction } from "react";
import { Step } from "./interfaces";

export type ToastType = "success" | "error" | "info" | "warning" | "default";

export type StepsContextType = {
  previousStep: number;
  setPreviousStep: Dispatch<SetStateAction<number>>;
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  next: () => Promise<void>;
  prev: () => void;
  steps: Step[];
  formData: Record<string, string>;
  setFormData: Dispatch<SetStateAction<Record<string, string>>>;
  errors: Record<string, string[]>;
};
