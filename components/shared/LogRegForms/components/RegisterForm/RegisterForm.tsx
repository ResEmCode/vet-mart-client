"use client";

import React from "react";

import { useForm } from "@/components/hooks/useForm";
import { Button, Input, Label } from "@/components/ui";

import styles from "../../Auth.module.css";

export const RegisterForm = () => {
  const validateForm = (formData: { email: string; username: string; password: string }, setErrorMessage: (message: string) => void) => {
    const { username, email, password } = formData;
    if (!username) {
      setErrorMessage("Введите логин");
      return false;
    }

    if (!email) {
      setErrorMessage("Введите свою почту");
    }

    if (!password) {
      setErrorMessage("Введите свой пароль");
    }

    if (password.length < 6) {
      setErrorMessage("Пароль должен содержать минимум 6 символов");
      return false;
    }
    setErrorMessage("");
    return true;
  };

  const { formData, errorMessage, passwordVisible, handleChange, togglePasswordVisibility, handleSubmit } = useForm(
    { username: "", email: "", password: "" },
    validateForm,
  );

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit}>
        <Label htmlFor="username" className="text-[20px]">
          Логин
        </Label>
        <Input type="text" placeholder="Введите логин" className={styles.inputField} name="username" value={formData.username || ""} onChange={handleChange} />

        <Label htmlFor="email" className="text-[20px]">
          E-mail
        </Label>
        <Input
          type="email"
          name="email"
          placeholder="Введите свою почту"
          value={formData.email || ""}
          onChange={handleChange}
          className={styles.inputField}
          required
        />
        <Label htmlFor="password" className="text-[20px]">
          Пароль
        </Label>
        <div className="relative">
          <Input
            placeholder="Введите свой пароль"
            type={passwordVisible ? "text" : "password"}
            name="password"
            value={formData.password || ""}
            onChange={handleChange}
            className={styles.inputField}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-4 top-4 transform cursor-pointer transition-all duration-200 text-[#E8E3E3]"
            aria-label={passwordVisible ? "Hide password" : "Show password"}
          >
            <img src={passwordVisible ? "/images/eyeClosedIcon.svg" : "/images/eyeOpenIcon.svg"} alt="" width={30} height={30} />
          </button>
        </div>

        {errorMessage && <div className="text-red-500">{errorMessage}</div>}

        <Button type="submit" className="w-full px-[100px] py-8 mt-4 bg-[#FF8732] text-white text-2xl rounded-[20px]">
          Зарегистрироваться
        </Button>

        <Button type="submit" className={styles.googleButton}>
          <img src="/images/GoogleIcon.svg" alt="Google Logo" className="mr-[6px]" /> Sign In with Google
        </Button>
      </form>
    </div>
  );
};
