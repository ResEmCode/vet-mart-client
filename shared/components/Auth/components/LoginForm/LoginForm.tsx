"use client";

import { Button } from "@/shared/ui/shadcn";

import { useLoginForm } from "../../hooks";
import { InputLabel } from "@/shared/ui/custom";
import { useActiveForm } from "../../store";
import { Spinner } from "@/shared/ui/loaders";

export const LoginForm = () => {
  const { errors, register, functions, responseError, loading } = useLoginForm();
  const setActiveForm = useActiveForm((state) => state.setActiveForm);

  return (
    <form className="flex flex-col gap-[12px]" onSubmit={functions.onSubmit}>
      <InputLabel text="E-mail" type="email" placeholder="E-mail" {...register("email")} error={errors.email?.message} />
      <InputLabel text="Пароль" type="password" placeholder="Пароль" {...register("password")} error={errors.password?.message} />

      {responseError && (
        <div className="flex items-center justify-between w-full mb-2">
          <span className="text-[14px] text-red-500">Не правильная почта или пароль</span>
          <button onClick={() => setActiveForm("reset-password")} className=" underline-none text-base text-accent-color hover:underline">
            Забыли пароль?
          </button>
        </div>
      )}

      <Button type="submit" className="w-full py-6 bg-[#FF8732] text-white text-xl rounded-[4px]">
        {loading ? <Spinner /> : "Войти"}
      </Button>
    </form>
  );
};
