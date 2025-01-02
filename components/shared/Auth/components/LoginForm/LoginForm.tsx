"use client";

import React from "react";

import { Button, Checkbox, Label } from "@/components/ui";
import { InputLabel } from "@/components/ui/InputLabel/input-label";

import { useLoginForm } from "../../hooks";

import styles from "../../Auth.module.css";

export const LoginForm = () => {
  const { errors, register, functions } = useLoginForm();

  return (
    <form className="flex flex-col gap-[12px]" onSubmit={functions.onSubmit}>
      <InputLabel text="E-mail" type="email" placeholder="E-mail" {...register("email")} error={errors.email?.message} />
      <InputLabel text="Пароль" type="password" placeholder="Пароль" {...register("password")} error={errors.password?.message} />

      <div className="flex items-center justify-between my-4">
        <div className="flex items-center space-x-2">
          <Checkbox className="rounded-[4px] w-[27px] h-[27px]" />
          <Label htmlFor="remember" className="text-base leading-[19.26px] text-[#7C7C7C]">
            Запомнить меня
          </Label>
        </div>

        <a href="/reset-password" className="text-[#FF8732] underline-none text-base leading-[19.26px]">
          Забыли пароль?
        </a>
      </div>

      <Button type="submit" className="w-full py-6 bg-[#FF8732] text-white text-xl rounded-[4px]">
        Войти
      </Button>
      <Button type="button" className={styles.googleButton}>
        <img src="/images/GoogleIcon.svg" alt="Google Logo" width={20} height={20} className="mr-[6px]" />
        Sign In with Google
      </Button>
    </form>
  );
};
