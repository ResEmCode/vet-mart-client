import { useState } from "react";

interface FormData {
  [key: string]: string;
}

export const useForm = (initialState: FormData, validateForm: () => boolean) => {
  const [formData, setFormData] = useState<FormData>(initialState);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
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
