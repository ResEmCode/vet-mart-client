import { z } from "zod";

export const phoneVerificationSchema = z.object({
  phone: z.string().min(10, "Допустимо минимально 10 символов").max(15, "Допустимо максимально 15 символов"),
});

export type PhoneVerificationSchemaTypes = z.infer<typeof phoneVerificationSchema>;
