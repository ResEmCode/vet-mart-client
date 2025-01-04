import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { RegisterSchema, registerSchema } from "../constants";

import { registerUser } from "@/app/actions";
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

      setIsAuthOpen(false);
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
