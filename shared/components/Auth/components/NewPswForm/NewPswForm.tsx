import { Button } from "@/shared/ui/shadcn";

import { InputLabel } from "@/shared/ui/custom";
import { useNewPswForm } from "../../hooks";
import { Spinner } from "@/shared/ui/loaders";

export const NewPswForm = () => {
  const { errors, register, functions, loading } = useNewPswForm();

  return (
    <form className="max-w-80" onSubmit={functions.onSubmit}>
      <div className="flex flex-col gap-4">
        <InputLabel text="Новый пароль" type="password" placeholder="Папроль..." {...register("password")} error={errors.password?.message} />
        <InputLabel text="Повторите пароль" type="password" placeholder="Папроль..." {...register("confirmPassword")} error={errors.confirmPassword?.message} />
        <Button type="submit" disabled={loading}>
          {loading ? <Spinner /> : "Сменить пароль"}
        </Button>
      </div>
    </form>
  );
};
