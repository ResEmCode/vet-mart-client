"use client";

import { useState } from "react";

export interface LoginFormData {
  loginOrEmail: string;
  password: string;
}

export const useLoginForm = (initialState: LoginFormData) => {
  const [formData, setFormData] = useState<LoginFormData>(initialState);
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const validateForm = (): boolean => {
    const { loginOrEmail, password } = formData;

    if (!loginOrEmail) {
      setErrorMessage("Введите логин или email");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(loginOrEmail) && loginOrEmail.includes("@")) {
      setErrorMessage("Введите корректный email");
      return false;
    }

    if (!password) {
      setErrorMessage("Введите пароль");
      return false;
    }

    if (password.length < 6) {
      setErrorMessage("Пароль должен содержать минимум 6 символов");
      return false;
    }

    setErrorMessage("");
    return true;
  };

  const resetForm = () => {
    setFormData(initialState);
    setErrorMessage("");
    setPasswordVisible(false);
  };

  return {
    formData,
    errorMessage,
    passwordVisible,
    handleChange,
    togglePasswordVisibility,
    validateForm,
    resetForm,
  };
};
