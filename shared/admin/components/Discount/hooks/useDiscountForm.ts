"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { discountSchema, DiscountSchema } from "../constants/discountSchema";
import toast from "react-hot-toast";
import { useDiscount } from "./useDiscount";

export const useDiscountForm = () => {
  const { onAddDiscount } = useDiscount();

  const discont = useForm<DiscountSchema>({
    mode: "onBlur",
    resolver: zodResolver(discountSchema),
  });

  const onSubmit = discont.handleSubmit(async (values: DiscountSchema) => {
    onAddDiscount(values);
  });

  return {
    form: discont,
    state: { isLoading: discont.formState.isSubmitting },
    functions: { onSubmit },
    register: discont.register,
    errors: discont.formState.errors,
  };
};
