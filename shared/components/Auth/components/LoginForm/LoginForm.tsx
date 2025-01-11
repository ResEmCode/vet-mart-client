"use client";

import React, { useState } from "react";

import { Button } from "@/shared/ui/shadcn";


import { useLoginForm } from "../../hooks";
import { RecoveryPswForm } from "../RecoveryPswForm/RecoveryPswForm";
import { InputLabel } from "@/shared/ui/custom";

export const LoginForm = () => {
  const { errors, register, functions, responseError } = useLoginForm();

  const [isResetPws, setIsResetPws] = useState(false);
  return isResetPws ? (
    <RecoveryPswForm />
  ) : (
    <form className="flex flex-col gap-[12px]" onSubmit={functions.onSubmit}>
      <InputLabel text="E-mail" type="email" placeholder="E-mail" {...register("email")} error={errors.email?.message} />
      <InputLabel text="Пароль" type="password" placeholder="Пароль" {...register("password")} error={errors.password?.message} />

      {responseError && (
        <div className="flex items-center justify-between w-full mb-2">
          <span className="text-[14px] text-red-500">Не правильная почта или пароль</span>
          <button onClick={() => setIsResetPws(true)} className=" underline-none text-base">
            Забыли пароль?
          </button>
        </div>
      )}

      <Button type="submit" className="w-full py-6 bg-[#FF8732] text-white text-xl rounded-[4px]">
        Войти
      </Button>
    </form>
  );
};
