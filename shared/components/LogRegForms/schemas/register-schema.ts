import * as z from "zod";

export const registerSchema = z.object({
  name: z.string().min(3, "Ваше иия должно содержать минимум 3 буквы").max(20),
  email: z.string().email("Введите корректную почту"),
  password: z.string().min(6, "Ваш пароль должен содержать минимум 6 букв").max(20),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
