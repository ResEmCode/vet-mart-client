import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import toast from "react-hot-toast";

import type { RegisterSchema } from "../constants";
import { registerSchema } from "../constants";
import { useAuthModal } from "../../Navigation/store";
import { registerUser } from "@/server/actions";
import { useState } from "react";

export const useRegisterForm = () => {
  const loginForm = useForm<RegisterSchema>({
    mode: "onBlur",
    resolver: zodResolver(registerSchema),
  });
  const [isLoading, setIsLoading] = useState(false);
  const setIsAuthOpen = useAuthModal((state) => state.setIsAuthOpen);

  const onSubmit = loginForm.handleSubmit(async (values: RegisterSchema) => {
    try {
      setIsLoading(true);
      await registerUser({
        email: values.email,
        fullName: values.login,
        password: values.password,
      });
      setIsAuthOpen(false);
      setIsAuthOpen(false);

      toast.success("Аккаунт успешно создан! На почту был отправлен код для подтверждения", {
        duration: 4000,
      });
      setIsLoading(false);
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
    loading: isLoading,
  };
};
