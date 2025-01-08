"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";

import { Button } from "@/shared/ui";
import { Modal } from "@/shared/ui/modal";

import { LoginForm, RegisterForm } from "./components";

import styles from "./Auth.module.css";

export const AuthForm = ({ closeModal }: { closeModal: () => void }) => {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <Modal isOpen closeModal={closeModal} classNameBody="max-w-[560px]">
      {/* <h2 className="text-[32px] font-[500] leading-[38.73px] text-black mb-6">{isRegistering ? "Регистрация" : "Авторизация"}</h2> */}
      <div className="mb-[12px]">{isRegistering ? <RegisterForm /> : <LoginForm />}</div>
      {/* <div className="mb-[12px]">{isRegistering ? <RegisterForm /> : <VerifyForm />}</div> */}
      {/* <div className="mb-[12px]">{isRegistering ? <RegisterForm /> : <RecoveryPswForm />}</div> */}
      {/* <RecoveryPswForm /> */}
      <Button
        type="submit"
        className={`${styles.googleButton} mb-[20px]`}
        onClick={() =>
          signIn("google", {
            callbackUrl: "/",
            redirect: true,
          })
        }
      >
        <img src="/images/GoogleIcon.svg" alt="Google Logo" className="mr-[6px]" />
        Войти с помощью google
      </Button>

      <div className="text-base text-center mx-auto block">
        <span className="text-[#7C7C7C]">{isRegistering ? "Есть аккаунт?" : "Нет аккаунта?"}</span>
        <button className="ml-[22px] text-[#FF8732]" onClick={() => setIsRegistering((prev) => !prev)}>
          {isRegistering ? "Войдите" : "Зарегистрируйтесь"}
        </button>
      </div>
    </Modal>
  );
};
