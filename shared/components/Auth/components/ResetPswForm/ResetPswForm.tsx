import { Button } from "@/shared/ui/shadcn";

import { InputLabel } from "@/shared/ui/custom";
import { useResetPswForm } from "../../hooks";
import { useActiveForm } from "../../store";

export const ResetPswForm = () => {
  const { functions, register, errors, responseError } = useResetPswForm();
  const setActiveForm = useActiveForm((state) => state.setActiveForm);
  return (
    <form className="max-w-80" onSubmit={functions.onSubmit}>
      <div className="flex flex-col gap-4 mb-[30px]">
        <InputLabel text="E-mail" type="email" placeholder="E-mail" {...register("email")} error={errors.email?.message} />
        {responseError && <span className="text-[14px] text-red-500">{responseError}</span>}
        <Button>Отправить код востановления</Button>
      </div>
      <button onClick={() => setActiveForm("login")} className="text-accent-color hover:underline">
        Вернуться назад
      </button>
    </form>
  );
};
