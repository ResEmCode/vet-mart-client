"use client";

import { useState } from "react";

export interface LoginFormData {
  loginOrEmail: string;
  password: string;
}

export const useLoginForm = (initialState: LoginFormData) => {
  const [formData, setFormData] = useState<LoginFormData>(initialState);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.loginOrEmail) {
      setErrorMessage("Введите логин или email.");
      return false;
    }
    if (!formData.password) {
      setErrorMessage("Введите пароль.");
      return false;
    }
    setErrorMessage("");
    return true;
  };

  const resetForm = () => {
    setFormData(initialState);
    setErrorMessage("");
  };

  return {
    formData,
    errorMessage,
    handleChange,
    validateForm,
    resetForm,
  };
};
