import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import type { RegisterSchema } from "../constants/RegisterSchema";
import { registerSchema } from "../constants/RegisterSchema";

export const useRegisterForm = () => {
  const loginForm = useForm<RegisterSchema>({
    mode: "onBlur",
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = loginForm.handleSubmit((values: RegisterSchema) => {
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
