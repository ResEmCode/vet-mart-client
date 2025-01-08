import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().email("Некорректная почта"),
  password: z.string().min(6, "Допустимо минимально 6 символов").max(14, "Допустимо максимально 14 символов"),
});

export type LoginSchema = z.infer<typeof loginSchema>;
