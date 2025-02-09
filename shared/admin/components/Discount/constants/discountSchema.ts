import * as z from "zod";

export const discountSchema = z.object({
  discount: z.string({ message: "укажите число скидки" }).min(1, "минимальное значение 1 символ"),
  article: z.string({ message: "укажите артикул товара" }).min(1, "минимальное значение 1 символ"),
});

export type DiscountSchema = z.infer<typeof discountSchema>;
