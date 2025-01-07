import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import type { RecoveryPswSchema } from "../constants";
import { recoveryPswSchema } from "../constants";

export const useRecoveryPswForm = () => {
  const recoveryPswForm = useForm<RecoveryPswSchema>({
    mode: "onBlur",
    resolver: zodResolver(recoveryPswSchema),
  });

  return {
    form: recoveryPswForm,
    state: { isLoading: recoveryPswForm.formState.isSubmitting },
    register: recoveryPswForm.register,
    handleSubmit: recoveryPswForm.handleSubmit,
    errors: recoveryPswForm.formState.errors,
  };
};
