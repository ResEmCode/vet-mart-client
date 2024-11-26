"use client";

import { useState } from "react";

export interface RegisterFormData {
  username: string;
  email: string;
  password: string;
}

export const useRegisterForm = (initialState: RegisterFormData) => {
  const [formData, setFormData] = useState<RegisterFormData>(initialState);
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
    setPasswordVisible(!passwordVisible);
  };

  const validateForm = (): boolean => {
    const { username, email, password } = formData;

    if (!username) {
      setErrorMessage("Введите имя пользователя");
      return false;
    }
    if (!email) {
      setErrorMessage("Введите email");
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
