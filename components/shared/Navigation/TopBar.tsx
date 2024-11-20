import React from "react";
import Image from "next/image";

import { Input } from "@/components/ui";

import { ICONS } from "./navigationdata";

export const TopBar = () => {
  return (
    <div className=" flex justify-between items-center w-full box-border mb-6">
      <div className=" flex items-center">
        <div className=" text-[32px] leading-8 font-bold">
          Вет<span className=" text-[#ff8732]">март</span>
        </div>
        <div className=" ml-8 text-[14px] font-medium leading-[16.8px] text-black mr-10">Ветеринарный магазин в Виннице с 2022 года</div>
      </div>

      <Input placeholder="Поиск товара" className="w-[950px] h-[46px] px-6 py-1 text-sm rounded-[48px]" />

      <div className=" flex gap-2 ml-[35px] cursor-pointer">
        {ICONS.map((icon) => (
          <div key={icon.id} className=" flex justify-center items-center w-[46px] h-[45px] bg-white rounded-full justify-around">
            <Image width={15} height={15} src={icon.src} alt={icon.alt} />
            {/* <span className="iconText text-sm text-[#333] mt-2">{icon.text}</span> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBar;
