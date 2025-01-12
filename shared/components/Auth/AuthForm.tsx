"use client";

import { FormProvider, LoginForm, NewPswForm, RegisterForm, ResetPswForm } from "./components";

import styles from "./Auth.module.css";

import { useActiveForm } from "./store";
import { NavBlock } from "./components/NavBlock/NavBlock";

export const AuthForm = () => {
  const activeForm = useActiveForm((state) => state.activeForm);

  return (
    <>
      <div className="mb-[12px]">
        {activeForm === "login" && (
          <FormProvider title="Вход в аккаунт">
            <LoginForm />
          </FormProvider>
        )}
        {activeForm === "register" && (
          <FormProvider title="Регестрация">
            <RegisterForm />
          </FormProvider>
        )}
        {activeForm === "reset-password" && (
          <FormProvider title="Введите свою почту">
            <ResetPswForm />
          </FormProvider>
        )}
        {activeForm === "new-password" && (
          <FormProvider title="Смените пароль">
            <NewPswForm />
          </FormProvider>
        )}
      </div>
      {activeForm === "register" || (activeForm === "login" && <NavBlock />)}
    </>
  );
};
