import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { resetPassword } from "@/server/actions";

import * as z from "zod";
import toast from "react-hot-toast";
import { useAuthModal } from "../../Navigation/store";
import { useActiveForm } from "../store";
import { useRef, useState } from "react";

interface EmailSchemaTypes {
  email: string;
}

export const useResetPswForm = () => {
  const resetPswForm = useForm<EmailSchemaTypes>({
    resolver: zodResolver(z.object({ email: z.string().email() })),
    mode: "onBlur",
  });
  const [isLoading, setIsLoading] = useState(false);
  const ResponseError = useRef<string | null>(null);
  const setIsAuthOpen = useAuthModal((state) => state.setIsAuthOpen);
  const setActiveForm = useActiveForm((state) => state.setActiveForm);

  const onSubmit = resetPswForm.handleSubmit(async (values: EmailSchemaTypes) => {
    try {
      setIsLoading(true);
      ResponseError.current = null;
      const { success, error } = await resetPassword(values.email);

      if (success) {
        toast.success("На почту была отправленна ссылка для сброса пароля", {
          duration: 4000,
        });
        setIsAuthOpen(false);
        setActiveForm("login");
      }
      ResponseError.current = String(error);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  });

  return {
    form: resetPswForm,
    state: { isLoading: resetPswForm.formState.isSubmitting },
    register: resetPswForm.register,
    functions: { onSubmit },
    errors: resetPswForm.formState.errors,
    responseError: ResponseError.current,
    loading: isLoading,
  };
};
