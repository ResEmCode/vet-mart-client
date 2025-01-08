"use client";

import React from "react";

import { Button } from "@/shared/ui";
import { InputLabel } from "@/shared/ui/InputLabel/input-label";

import { useRegisterForm } from "../../hooks/useRegisterForm";

export const RegisterForm = () => {
  const { register, errors, functions } = useRegisterForm();

  return (
    <form className="flex flex-col gap-[12px]" onSubmit={functions.onSubmit}>
      <InputLabel text="Логин" type="text" placeholder="Логин" {...register("login")} error={errors.login?.message} />
      <InputLabel text="E-mail" type="email" placeholder="E-mail" {...register("email")} error={errors.email?.message} />
      <InputLabel text="Пароль" type="password" placeholder="Пароль" {...register("password")} error={errors.password?.message} />

      <Button type="submit" className="w-full py-6 bg-[#FF8732] text-white text-xl rounded-[4px]">
        Зарегистрироваться
      </Button>
    </form>
  );
};
