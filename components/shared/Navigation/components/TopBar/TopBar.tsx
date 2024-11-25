import React from "react";
import Image from "next/image";

import { Typography } from "@/components/shared/Typography/Typography";
import { Input } from "@/components/ui";

import { ICONS } from "../navigation.data";

export const TopBar = () => {
  return (
    <div className="flex justify-between items-center w-full box-border">
      <div className="flex items-center gap-[32px]">
        <div className="flex">
          <Typography variant="title36_semibold" tag="h2">
            Вет
          </Typography>
          <Typography variant="title36_semibold" tag="h2" color="accent">
            март
          </Typography>
        </div>
        <Typography variant="paragraph14_regular" tag="h2" className="leading-[16px] max-w-[300px]">
          Ветеринарный магазин в Виннице с 2022 года
        </Typography>
      </div>
      <Input placeholder="Поиск товара..." className="w-[950px] h-[46px] px-6 py-1 rounded-[48px] bg-white border-none placeholder:text-[#8598a7] " />
      <div className=" flex gap-2 ml-[35px] cursor-pointer">
        {ICONS.map((icon) => (
          <div key={icon.id} className=" flex justify-center items-center w-[46px] h-[45px] bg-white rounded-full justify-around">
            <Image width={15} height={15} src={icon.src} alt={icon.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};
