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

export const AnnouncementSchema = z.object({
  cep: z
    .string()
    .min(1, { message: "O CEP é obrigatório" })
    .length(9, { message: "O CEP deve conter 8 dígitos" }),

  street: z
    .string()
    .min(1, { message: "A rua é obrigatória" }),

  number: z
    .string()
    .min(1, { message: "O número é obrigatório" })
    .regex(/^\d+$/, { message: "O número deve ser um valor numérico" }),

  complement: z
    .string()
    .optional(),

  neighborhood: z
    .string()
    .min(1, { message: "O bairro é obrigatório" }),

  city: z
    .string()
    .min(1, { message: "A cidade é obrigatória" }),

  state: z
    .string()
    .length(2, { message: "O estado deve conter 2 letras" })
    .regex(/^[A-Z]+$/, { message: "O estado deve ser composto apenas por letras maiúsculas" }),
});
