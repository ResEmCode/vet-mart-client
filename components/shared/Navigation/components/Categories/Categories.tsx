import React from "react";
import Link from "next/link";

import { CATEGORIES } from "../navigation.data";

export const Categories: React.FC = () => {
  return (
    <div className="w-full flex gap-[20px]">
      {CATEGORIES.map((category) => (
        <Link key={category.id} href={category.href} className="flex-1">
          <div className="w-full bg-white rounded-[48px] flex items-center px-3 py-3 group hover:bg-[#ff8732] hover:text-white whitespace-nowrap transition-colors duration-300">
            <div className="flex items-center gap-[15px] w-full">
              <div className="w-[50px] h-[50px] bg-[#dde5ec] rounded-full flex-shrink-0" />
              <div className="flex flex-col">
                <div className="text-[18px] font-[600] mb-1 group-hover:text-white transition-colors duration-300">{category.name}</div>
                <div className="text-[#8598a7] text-[14px] leading-[16.94px] whitespace-nowrap group-hover:text-white">{category.description}</div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
