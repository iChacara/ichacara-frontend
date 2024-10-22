import { z } from "zod";

export const RegisterSchema = z
  .object({
    name: z.string().min(1, { message: "O nome é obrigatório" }),
    email: z
      .string()
      .min(1, { message: "O endereço de email é obrigatório" })
      .email({ message: "Endereço de email inválido" }),
    password: z
      .string()
      .min(8, { message: "A senha deve possuir no mínimo 8 dígitos" }),
    confirmPassword: z.string(),
    type: z.string().min(1, { message: "O tipo é obrigatório" }),
    terms: z.literal(true, {
      errorMap: () => ({ message: "Os termos devem ser aceitos" }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas devem ser iguais",
    path: ["confirmPassword"],
  });

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "O endereço de email é obrigatório" })
    .email({ message: "Email ou senha inválidos" }),
  password: z.string().min(8, { message: "Email ou senha inválidos" }),
});

// Announcement schema
const addressSchema = z.object({
  cep: z
    .string()
    .min(1, { message: "O CEP é obrigatório" })
    .length(9, { message: "O CEP deve conter 8 dígitos" }),
  street: z.string().min(1, { message: "A rua é obrigatória" }),
  number: z
    .string()
    .min(1, { message: "O número é obrigatório" })
    .regex(/^\d+$/, { message: "O número deve ser um valor numérico" }),
  complement: z.string().optional(),
  district: z.string().min(1, { message: "O bairro é obrigatório" }),
  city: z.string().min(1, { message: "A cidade é obrigatória" }),
  state: z
    .string()
    .length(2, { message: "O estado deve conter 2 letras" })
    .regex(/^[A-Z]+$/, {
      message: "O estado deve ser composto apenas por letras maiúsculas",
    }),
});

const accommodationSchema = z.object({
  numRooms: z
    .string()
    .min(1, { message: "O preenchimento do número de quartos é obrigatório" })
    .regex(/^\d+$/, { message: "O número deve ser um valor numérico" }),
  numBeds: z
    .string()
    .min(1, { message: "O preenchimento do número de camas é obrigatório" })
    .regex(/^\d+$/, { message: "O número deve ser um valor numérico" }),
  numBathrooms: z
    .string()
    .min(1, { message: "O preenchimento do número de banheiros é obrigatório" })
    .regex(/^\d+$/, { message: "O número deve ser um valor numérico" }),
  maxOccupancy: z
    .string()
    .min(1, { message: "A lotação deve ser maior que 0" })
    .regex(/^\d+$/, { message: "O número deve ser um valor numérico" }),
});

const servicesSchema = z.object({
  services: z.array(z.string()).optional(),
});

const highlightsSchema = z.object({
  highlights: z.array(z.number()).optional(),
});

const propertyInfoSchema = z.object({
  name: z.string().min(1, { message: "O nome da chácara é obrigatório" }),
  title: z.string().min(1, { message: "O título do anúncio é obrigatório" }),
  description: z
    .string()
    .min(1, { message: "A descrição da propriedade é obrigatória" }),
});

const pricingSchema = z.object({
  dailyPrice: z
    .number({ invalid_type_error: "O preço deve ser um número" })
    .min(0, { message: "O preço da propriedade deve ser maior que 0" }),
});

export const announcementSchema = z.object({
  address: addressSchema,
  accommodation: accommodationSchema,
  services: servicesSchema,
  highlights: highlightsSchema,
  propertyInfo: propertyInfoSchema,
  pricing: pricingSchema,
});
