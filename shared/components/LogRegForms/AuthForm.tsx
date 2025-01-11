"use client";

import React, { useState } from "react";

import { LoginForm } from "@/shared/components/LogRegForms/components/LoginForm/LoginForm";
import { RegisterForm } from "@/shared/components/LogRegForms/components/RegisterForm/RegisterForm";
import { Modal } from "@/shared/ui/shadcn";


export const AuthForm = ({ closeModal }: { closeModal: () => void }) => {
  const [isRegistering, setIsRegistering] = useState(true);

  return (
    <Modal isOpen closeModal={closeModal}>
      <div className="text-center mb-6">
        <h1 className="text-[32px] font-[500] leading-[38.73px] text-black mt-[48px]">{isRegistering ? "Регистрация" : "Авторизация"}</h1>
      </div>

      {isRegistering ? <RegisterForm /> : <LoginForm />}
      <div className="mt-[45px] text-center">
        <button
          type="button"
          onClick={() => setIsRegistering(!isRegistering)}
          className="text-base cursor-pointer"
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
      </div>
    </Modal>
  );
};
