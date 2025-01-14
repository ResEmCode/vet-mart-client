import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import type { NewPswSchema } from "../constants";
import { newPswSchema } from "../constants";
import { useSearchParams } from "next/navigation";
import { newPassword } from "@/server/actions";
import { useAuthModal } from "../../Navigation/store";
import { useActiveForm } from "../store";
import { useState } from "react";

export const useNewPswForm = () => {
  const recoveryPswForm = useForm<NewPswSchema>({
    mode: "onBlur",
    resolver: zodResolver(newPswSchema),
  });
  const [isLoading, setIsLoading] = useState(false);
  const params = useSearchParams();
  const setIsAuthOpen = useAuthModal((state) => state.setIsAuthOpen);
  const setActiveForm = useActiveForm((state) => state.setActiveForm);

  const onSubmit = recoveryPswForm.handleSubmit(async (values: NewPswSchema) => {
    try {
      setIsLoading(true);
      await newPassword(values.password, params.get("recovery") ?? "");

      setIsAuthOpen(false);
      setActiveForm("login");
      setIsLoading(false);
      toast.success("Проль успешно сменён", {
        duration: 3000,
      });
    } catch (error) {
      console.log(error);
      toast.error("Ошибка востановления пароля, попробуйте ещё раз");
    }
  });

  return {
    form: recoveryPswForm,
    state: { isLoading: recoveryPswForm.formState.isSubmitting },
    register: recoveryPswForm.register,
    functions: { onSubmit },
    errors: recoveryPswForm.formState.errors,
    loading: isLoading,
  };
};
