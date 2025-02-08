import { z } from "zod";

export const PersonalSchema = z.object({
  fullName: z.string().min(4, "Допустимо минимально 4 символа").max(50, "Допустимо максимально 12 символов"),
  email: z.string().email("Некорректная почта"),
});

export type PersonalForm = z.infer<typeof PersonalSchema>;
