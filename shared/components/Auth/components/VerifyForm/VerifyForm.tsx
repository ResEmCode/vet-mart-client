"use client";

import { useEffect, useState } from "react";

import { Button, Input, Modal } from "@/shared/ui";

import { useUser } from "../../store";

export const VerifyForm = () => {
  const email = useUser((state) => state.email);
  const secretEmail = `${email.slice(0, email.indexOf("@") - 3)}***${email.slice(email.indexOf("@"))}`;
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (count !== 0) {
      const timer = setTimeout(() => {
        setCount((prev) => prev - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [count]);

  return (
    <Modal isOpen closeModal={() => false}>
      <div className="max-w-80">
        <h2 className="text-[32px] font-[500] leading-[38.73px] text-black mb-6">Подтвердите свою почту</h2>
        <div className="flex flex-col gap-4">
          <span className="text-[14px]">Код был отправлен на почту {secretEmail}</span>
          <Input type="text" placeholder="Ваш код..." />
          <Button>Подтвердить аккаунт</Button>
          <div className="flex items-center gap-1">
            <span>Не пришёл код?</span>
            <button disabled={count !== 0} className="text-cyan-400 font-medium">
              {count === 0 ? "отправить повторно" : `через ${count} секунд`}
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
