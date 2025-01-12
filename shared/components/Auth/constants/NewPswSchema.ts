import * as z from "zod";

export const newPswSchema = z
  .object({
    password: z.string().min(6, "Допустимо минимально 6 символов").max(14, "Допустимо максимально 14 символов"),
    confirmPassword: z.string().min(6, "Повторите пароль"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Введенные пароли не совпадают",
  });

export type NewPswSchema = z.infer<typeof newPswSchema>;
