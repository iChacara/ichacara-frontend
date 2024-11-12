import { z } from "zod";
import { announcementSchema } from "./zodSchemas";

export type ToastType = "success" | "error" | "info" | "warning" | "default";

export type AnnouncementFormValues = z.infer<typeof announcementSchema>;

export type ViaCepAddressProps = {
  bairro: string;
  complemento: string;
  uf: string;
  logradouro: string;
  localidade: string;
};

export type ShowcaseProps = {
  title?: string;
};

export type AnnouncementCardProps = {
  type?: "carousel" | "full";
};
