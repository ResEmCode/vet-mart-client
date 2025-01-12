import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import type { LoginSchema } from "../constants";
import { loginSchema } from "../constants";
import { useAuthModal } from "../../Navigation/store";

export const useLoginForm = () => {
  const loginForm = useForm<LoginSchema>({
    mode: "onBlur",
    resolver: zodResolver(loginSchema),
  });
  const [isLoading, setIsLoading] = useState(false);
  const setIsAuthOpen = useAuthModal((state) => state.setIsAuthOpen);
  const ResponseError = useRef<string | null>(null);

  const onSubmit = loginForm.handleSubmit(async (values: LoginSchema) => {
    try {
      setIsLoading(true);
      const resp = await signIn("credentials", {
        ...values,
        redirect: false,
      });

      if (resp?.ok) {
        setIsAuthOpen(false);

        toast.success("Вы вошли в свой аккаунт!", {
          duration: 3000,
        });
      }

      if (resp?.error) {
        ResponseError.current = resp?.error;
      }

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
    responseError: ResponseError.current,
    loading: isLoading,
  };
};
