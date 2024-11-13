import {
  FieldErrors,
  UseFormGetValues,
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
  getValues: UseFormGetValues<AnnouncementFormValues>;
}

export interface AnnouncementImagesStepProps {
  register: UseFormRegister<AnnouncementFormValues>;
  errors: FieldErrors<AnnouncementFormValues["images"]>;
  setValue: UseFormSetValue<AnnouncementFormValues>;
  getValues: UseFormGetValues<AnnouncementFormValues>;
  watch: UseFormWatch<AnnouncementFormValues>;
}

export interface AnnouncementPropertyInfoStepProps {
  register: UseFormRegister<AnnouncementFormValues>;
  errors: FieldErrors<AnnouncementFormValues["propertyInfo"]>;
}

export interface AnnouncementPricingStepProps {
  register: UseFormRegister<AnnouncementFormValues>;
  errors: FieldErrors<AnnouncementFormValues["pricing"]>;
  setValue: UseFormSetValue<AnnouncementFormValues>;
  watch: UseFormWatch<AnnouncementFormValues>;
}

export interface FarmProps {
  id: number;
  title: string;
  name: string;
  cep: string;
  street: string;
  number: string;
  description: string;
  complement?: string;
  district: string;
  city: string;
  state: string;
  numRooms: number;
  numBeds: number;
  numBathrooms: number;
  maxOccupancy: number;
  services: string;
  highlights?: string;
  photos: string[] | null;
  dailyPrice: number;
  lessorId: number;
  approved: boolean;
  createdAt: string;
  updatedAt: string;
}
