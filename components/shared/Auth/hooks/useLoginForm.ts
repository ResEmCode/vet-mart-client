import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { LoginSchema, loginSchema } from "../constants";
import { signIn } from "next-auth/react";
import { useModalAuth } from "../store";
import { useRemember } from "../store/useRemember";

import { parseCookies, setCookie, destroyCookie } from "nookies";

export const useLoginForm = () => {
  const loginForm = useForm<LoginSchema>({
    mode: "onBlur",
    resolver: zodResolver(loginSchema),
  });
  const setIsAuthOpen = useModalAuth((state) => state.setIsAuthOpen);
  const remember = useRemember((state) => state.remember);

  const onSubmit = loginForm.handleSubmit(async (values: LoginSchema) => {
    try {
      const resp = await signIn("credentials", {
        ...values,
        redirect: false,
      });

      if (resp?.ok) {
        setIsAuthOpen(false);
      }

      // if(resp?.ok) return alert("Ошибка аккаунта")
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
