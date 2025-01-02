import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import type { LoginSchema } from "../constants/LoginSchema";
import { loginSchema } from "../constants/LoginSchema";
import { signIn } from "next-auth/react";

export const useLoginForm = () => {
  const loginForm = useForm<LoginSchema>({
    mode: "onBlur",
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = loginForm.handleSubmit(async (values: LoginSchema) => {
    try {
      const resp = await signIn("credentials", {
        ...values,
        redirect: false,
      });

      if(resp?.ok) return alert("Ошибка аккаунта")

    } catch (error) {}
  });

  return {
    form: loginForm,
    state: { isLoading: loginForm.formState.isSubmitting },
    functions: { onSubmit },
    register: loginForm.register,
    errors: loginForm.formState.errors,
  };
};
