import { resetPassword } from "@/app/actions";
import { Button } from "@/shared/ui";
import { InputLabel } from "@/shared/ui/InputLabel/input-label";

import type { RecoveryPswSchema } from "../../constants";
import { useRecoveryPswForm } from "../../hooks";
import { useModalResetPws } from "../../store";

export const NewPswForm = ({ link }: { link: string | null }) => {
  const { errors, register, handleSubmit } = useRecoveryPswForm();
  const setIsResetPwsOpen = useModalResetPws((state) => state.setIsResetPwsOpen);

  const onSubmit = handleSubmit(async (values: RecoveryPswSchema) => {
    try {
      await resetPassword(values.password, link ?? "");
      setIsResetPwsOpen(false);
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <form className="max-w-80" onSubmit={onSubmit}>
      <h2 className="text-[32px] font-[500] leading-[38.73px] text-black mb-6">Смените пароль</h2>
      <div className="flex flex-col gap-4">
        <InputLabel text="Новый пароль" type="password" placeholder="Папроль..." {...register("password")} error={errors.password?.message} />
        <InputLabel text="Повторите пароль" type="password" placeholder="Папроль..." {...register("confirmPassword")} error={errors.confirmPassword?.message} />
        <Button>Сменить пароль</Button>
      </div>
    </form>
  );
};
