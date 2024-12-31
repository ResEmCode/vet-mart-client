import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import type { LoginSchema } from "../constants/LoginSchema";
import { loginSchema } from "../constants/LoginSchema";

export const useLoginForm = () => {
  const loginForm = useForm<LoginSchema>({
    mode: "onBlur",
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = loginForm.handleSubmit((values: LoginSchema) => {
    console.log(values);
  });

  return {
    form: loginForm,
    state: { isLoading: loginForm.formState.isSubmitting },
    functions: { onSubmit },
    register: loginForm.register,
    errors: loginForm.formState.errors,
  };
};
