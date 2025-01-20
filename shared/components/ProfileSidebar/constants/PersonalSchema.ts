import { z } from "zod";

export const PersonalSchema = z.object({
  fullName: z.string().min(4, "Допустимо минимально 4 символа").max(50, "Допустимо максимально 12 символов"),
  email: z.string().email("Некорректная почта"),
  // phone: z.string().min(10, "Допустимо минимально 10 символов").max(15, "Допустимо максимально 15 символов"),
});

export type PersonalForm = z.infer<typeof PersonalSchema>;
