import { z } from "zod";
import { announcementSchema } from "./zodSchemas";

export type ToastType = "success" | "error" | "info" | "warning" | "default";

export type AnnouncementFormValues = z.infer<typeof announcementSchema>;
