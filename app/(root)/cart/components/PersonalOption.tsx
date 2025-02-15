import React from "react";

import { InputLabel, Typography } from "@/shared/ui/custom";

export const PersonalOption = () => {
  return (
    <div className="flex flex-col gap-5 p-6 bg-white rounded-[16px]">
      <Typography variant="title24_semibold" tag="p">
        2. Персональные данные
      </Typography>
      <form action="submit" className="grid grid-cols-2 grid-rows-2 gap-4 ">
        <InputLabel text="Имя" placeholder="Иван" />
        <InputLabel text="Фамилия" placeholder="Иванов" />
        <InputLabel text="E-mail" placeholder="ivan@gmail.com" />
        <InputLabel text="Телефон" placeholder="+380959412868" />
      </form>
    </div>
  );
};
