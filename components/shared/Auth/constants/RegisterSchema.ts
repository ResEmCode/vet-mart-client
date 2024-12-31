import * as z from "zod";

export const registerSchema = z.object({
  login: z.string().min(4, "Допустимо минимально 4 символа").max(12, "Допустимо максимально 12 символов"),
  email: z.string().email("Некорректная почта"),
  password: z.string().min(6, "Допустимо минимально 6 символов").max(14, "Допустимо максимально 14 символов"),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
