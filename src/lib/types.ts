import { z } from "zod";
import { announcementSchema } from "./zodSchemas";
import { FarmProps } from "./interfaces";

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
  farms: [];
};

export type AnnouncementCardProps = {
  type?: "carousel" | "full";
  farm: FarmProps;
};
