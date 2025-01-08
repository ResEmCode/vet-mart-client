import { useRef } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { zodResolver } from "@hookform/resolvers/zod";

import type { LoginSchema } from "../constants";
import { loginSchema } from "../constants";
import { useModalAuth } from "../store";

export const useLoginForm = () => {
  const loginForm = useForm<LoginSchema>({
    mode: "onBlur",
    resolver: zodResolver(loginSchema),
  });
  const setIsAuthOpen = useModalAuth((state) => state.setIsAuthOpen);
  const ResponseError = useRef<string | null>(null);

  const onSubmit = loginForm.handleSubmit(async (values: LoginSchema) => {
    try {
      const resp = await signIn("credentials", {
        ...values,
        redirect: false,
      });

      if (resp?.ok) {
        setIsAuthOpen(false);
      }

      if (resp?.error) {
        ResponseError.current = resp?.error;
      }

      // if(resp?.ok) return alert("Ошибка аккаунта")
    } catch (error) {
      console.log(error);
    }
  });

  return {
    form: loginForm,
    state: { isLoading: loginForm.formState.isSubmitting },
    functions: { onSubmit },
    register: loginForm.register,
    errors: loginForm.formState.errors,
    responseError: ResponseError.current,
  };
};
