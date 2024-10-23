import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";
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

export interface CEPData {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
  estado: string;
  regiao: string;
  unidade: string;
  erro: string;
}
