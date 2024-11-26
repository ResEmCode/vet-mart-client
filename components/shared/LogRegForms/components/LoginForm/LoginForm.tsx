"use client";

import React, { useState } from "react";

import { useLoginForm } from "@/components/hooks/LoginFormHook/useLoginForm";
import { Button, Checkbox, Input, Label } from "@/components/ui";

import styles from "../../Auth.module.css";

export const LoginForm = () => {
  const { formData, errorMessage, passwordVisible, handleChange, togglePasswordVisibility, validateForm, resetForm } = useLoginForm({
    loginOrEmail: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      resetForm();
    }
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit}>
        <Label htmlFor="loginOrEmail" className="text-[20px] mt-4">
          Логин/Почта
        </Label>
        <Input
          type="text"
          name="loginOrEmail"
          placeholder="Введите свою почту или логин"
          className={`${styles.inputField} mt-1`}
          value={formData.loginOrEmail}
          onChange={handleChange}
        />

        <div className="relative">
          <Label htmlFor="loginOrEmail" className="text-[20px]">
            Пароль
          </Label>
          <Input
            placeholder="Введите свой пароль"
            type={passwordVisible ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`${styles.inputField} mt-1`}
          />

          {errorMessage && <div className="text-red-500 mt-2">{errorMessage}</div>}
          <button
            type="button"
            onClick={togglePasswordVisibility}
            onKeyPress={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                togglePasswordVisibility();
              }
            }}
            tabIndex={0}
            className="absolute right-4 top-[50px] transform cursor-pointer transition-all duration-200"
            aria-label={passwordVisible ? "Hide password" : "Show password"}
          >
            <img src={passwordVisible ? "/images/eyeClosedIcon.svg" : "/images/eyeOpenIcon.svg"} alt="" width={30} height={30} />
          </button>
        </div>
        <div className="flex items-center justify-between mt-[68px] mb-[30px]">
          <div className="flex items-center space-x-2">
            <Checkbox className="rounded-[0] w-[27px] h-[27px]" />
            <Label htmlFor="remember" className="text-base leading-[19.26px] text-[#7C7C7C]">
              Запомнить меня
            </Label>
          </div>

          <a href="/reset-password" className="text-[#FF8732] underline-none text-base leading-[19.26px]">
            Забыли пароль?
          </a>
        </div>

        <Button type="submit" className="w-full px-[100px] py-8 mt-4 bg-[#FF8732] text-white text-2xl rounded-[20px]">
          Войти
        </Button>
        <Button type="button" className={styles.googleButton}>
          <img src="/images/GoogleIcon.svg" alt="Google Logo" width={20} height={20} className="mr-[6px]" />
          Sign In with Google
        </Button>
      </form>
    </div>
  );
};
