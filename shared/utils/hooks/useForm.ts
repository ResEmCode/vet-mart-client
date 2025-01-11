import { useState } from "react";

interface FormData {
  [key: string]: string;
}

export const useForm = <T extends FormData>(initialState: T, validateForm: (formData: T, setErrorMessage: (message: string) => void) => boolean) => {
  const [formData, setFormData] = useState<T>(initialState);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm(formData, setErrorMessage)) {
      setFormData(initialState);
    }
  };

  return {
    formData,
    errorMessage,
    setErrorMessage,
    passwordVisible,
    handleChange,
    togglePasswordVisibility,
    handleSubmit,
  };
};
