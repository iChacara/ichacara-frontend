import {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { AnnouncementFormValues } from "./types";

export interface ProviderProps {
  children: React.ReactNode;
}

export interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  type: string;
  terms: boolean;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface AnnouncementAddressStepProps {
  register: UseFormRegister<AnnouncementFormValues>;
  errors: FieldErrors<AnnouncementFormValues["address"]>;
  setValue: UseFormSetValue<AnnouncementFormValues>;
}

export interface AnnouncementAccommodationStepProps {
  register: UseFormRegister<AnnouncementFormValues>;
  errors: FieldErrors<AnnouncementFormValues["accommodation"]>;
}

export interface AnnouncementServicesStepProps {
  register: UseFormRegister<AnnouncementFormValues>;
  errors: FieldErrors<AnnouncementFormValues["services"]>;
  setValue: UseFormSetValue<AnnouncementFormValues>;
  watch: UseFormWatch<AnnouncementFormValues>;
}

export interface AnnouncementHighlightsStepProps {
  register: UseFormRegister<AnnouncementFormValues>;
  errors: FieldErrors<AnnouncementFormValues["highlights"]>;
}

export interface AnnouncementPropertyInfoStepProps {
  register: UseFormRegister<AnnouncementFormValues>;
  errors: FieldErrors<AnnouncementFormValues["propertyInfo"]>;
}

export interface AnnouncementPricingStepProps {
  register: UseFormRegister<AnnouncementFormValues>;
  errors: FieldErrors<AnnouncementFormValues["pricing"]>;
}
