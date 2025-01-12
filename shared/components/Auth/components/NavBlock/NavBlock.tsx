"use client";

import { Button } from "@/shared/ui/shadcn";
import styles from "./NavBlock.module.css";
import { useActiveForm } from "../../store";
import { signIn } from "next-auth/react";

export const NavBlock = () => {
  const { activeForm, setActiveForm } = useActiveForm();
  return (
    <>
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
        {activeForm === "login" && <span>Войти с помощью google</span>}
        {activeForm === "register" && <span>Зарегестрироваться с помощью google</span>}
      </Button>
      <div className="text-base text-center mx-auto block">
        {activeForm === "login" && <span className="text-[#7C7C7C]">Нет аккаунта?</span>}
        {activeForm === "register" && <span className="text-[#7C7C7C]">Есть аккаунта?</span>}
        {activeForm === "login" && (
          <button className="ml-[22px] text-accent-color hover:underline" onClick={() => setActiveForm("register")}>
            Зарегистрируйтесь
          </button>
        )}
        {activeForm === "register" && (
          <button className="ml-[22px] text-accent-color hover:underline" onClick={() => setActiveForm("login")}>
            Войдите
          </button>
        )}
      </div>
    </>
  );
};
