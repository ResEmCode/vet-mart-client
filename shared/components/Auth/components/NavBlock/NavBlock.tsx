"use client";

import { Button } from "@/shared/ui/shadcn";
import styles from "./NavBlock.module.css";
import { useActiveForm } from "../../store";
import { signIn } from "next-auth/react";
import { GoogleSvg } from "@/shared/ui/icons";

export const NavBlock = () => {
  const { activeForm, setActiveForm } = useActiveForm();
  return (
    <>
      <Button
        type="submit"
        variant={"primary"}
        className={`${styles.google_button} mb-[20px]`}
        onClick={() =>
          signIn("google", {
            callbackUrl: "/",
            redirect: true,
          })
        }
      >
        <GoogleSvg className={styles.icon} />
        {activeForm === "login" && <span>Войти с помощью google</span>}
        {activeForm === "register" && <span>Зарегестрироваться с помощью google</span>}
      </Button>
      <div className="text-base text-center mx-auto block">
        {activeForm === "login" && <span className="text-gray-400">Нет аккаунта?</span>}
        {activeForm === "register" && <span className="text-gray-400">Есть аккаунта?</span>}
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
