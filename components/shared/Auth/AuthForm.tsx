"use client";

import React, { useState } from "react";

import { Modal } from "@/components/ui/modal";

import { LoginForm, RegisterForm } from "./components";

export const AuthForm = ({ closeModal }: { closeModal: () => void }) => {
  const [isRegistering, setIsRegistering] = useState(true);

  return (
    <Modal isOpen closeModal={closeModal} classNameBody="max-w-[560px]">
      <div className="text-center mb-6">
        <h1 className="text-[32px] font-[500] leading-[38.73px] text-black">{isRegistering ? "Регистрация" : "Авторизация"}</h1>
      </div>

      <div className="mb-[30px]">{isRegistering ? <RegisterForm /> : <LoginForm />}</div>
      <button
        type="button"
        onClick={() => setIsRegistering(!isRegistering)}
        className="text-base cursor-pointer text-center mx-auto block"
        aria-label={isRegistering ? "Switch to login" : "Switch to registration"}
      >
        {isRegistering ? (
          <div>
            <span className="text-[#7C7C7C]">Уже есть аккаунт?</span>
            <span className="ml-[22px] text-[#FF8732]">Войдите</span>
          </div>
        ) : (
          <div>
            <span className="text-[#7C7C7C]">Нет аккаунта?</span>
            <span className="ml-[22px] text-[#FF8732]">Зарегистрируйтесь</span>
          </div>
        )}
      </button>
    </Modal>
  );
};
