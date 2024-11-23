"use client";

import React, { useState } from "react";

import { LoginForm } from "./components/LoginForm/LoginForm";
import { RegisterForm } from "./components/RegisterForm/RegisterForm";

export const AuthForm = ({ closeModal }: { closeModal: () => void }) => {
  const [isRegistering, setIsRegistering] = useState(true);

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="w-[895px] h-[762px] px-[235px] bg-white rounded-[20px] shadow-lg relative">
        <div className=" text-center mb-6">
          <h1 className="text-[32px] font-[500] leading-[38.73px] text-black mt-[48px]">{isRegistering ? "Регистрация" : "Авторизация"}</h1>

          <div
            onClick={closeModal}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                closeModal();
              }
            }}
            role="button"
            tabIndex={0}
            className="absolute top-5 right-10 p-5 cursor-pointer"
          >
            <img src="/images/Close.png" alt="Close" className="w-5 h-5" />
          </div>
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
      </div>
    </div>
  );
};
