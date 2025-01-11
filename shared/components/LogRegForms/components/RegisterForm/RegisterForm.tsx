"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import type { RegisterSchema } from "@/shared/components/LogRegForms/schemas/register-schema";
import { registerSchema } from "@/shared/components/LogRegForms/schemas/register-schema";
import { Button } from "@/shared/ui/shadcn";


import styles from "../../Auth.module.css";
import { InputLabel } from "@/shared/ui/custom";

export const RegisterForm = () => {
  const {
    register,
    formState: { errors },
  } = useForm<RegisterSchema>({ resolver: zodResolver(registerSchema) });

  return (
    <div className="space-y-4">
      <form className="flex flex-col gap-4">
        <InputLabel text="Логин" type="text" placeholder="Логин" {...register("name")} error={errors.name?.message} />
        <InputLabel text="E-mail" type="email" placeholder="E-mail" {...register("email")} error={errors.email?.message} />
        <InputLabel text="Пароль" type="password" placeholder="Пароль" {...register("password")} error={errors.password?.message} />

        <div className="relative">
          <button type="button" className="absolute right-4 top-4 transform cursor-pointer transition-all duration-200 text-[#E8E3E3]">
            {/* <img src={passwordVisible ? "/images/eyeClosedIcon.svg" : "/images/eyeOpenIcon.svg"} alt="" width={30} height={30} /> */}
          </button>
        </div>

        <Button type="submit" className="w-full px-[100px] py-7 mt-4 bg-[#FF8732] text-white text-xl rounded-[20px]">
          Зарегистрироваться
        </Button>

        <Button type="submit" className={styles.googleButton}>
          <img src="/images/GoogleIcon.svg" alt="Google Logo" className="mr-[6px]" /> Sign In with Google
        </Button>
      </form>
    </div>
  );
};
