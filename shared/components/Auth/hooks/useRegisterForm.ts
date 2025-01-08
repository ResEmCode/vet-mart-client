import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { zodResolver } from "@hookform/resolvers/zod";

import { registerUser } from "@/app/actions";

import type { RegisterSchema } from "../constants";
import { registerSchema } from "../constants";
import { useModalAuth } from "../store";

export const useRegisterForm = () => {
  const loginForm = useForm<RegisterSchema>({
    mode: "onBlur",
    resolver: zodResolver(registerSchema),
  });
  const setIsAuthOpen = useModalAuth((state) => state.setIsAuthOpen);

  const onSubmit = loginForm.handleSubmit(async (values: RegisterSchema) => {
    try {
      await registerUser({
        email: values.email,
        fullName: values.login,
        password: values.password,
      });
      await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });
      setIsAuthOpen(false);
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
  };
};
