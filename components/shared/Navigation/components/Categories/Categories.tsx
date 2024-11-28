import React from "react";
import Link from "next/link";

import { Typography } from "@/components/shared/Typography/Typography";

import { CATEGORIES } from "../navigation.data";

export const Categories: React.FC = () => {
  return (
    <div className="w-full flex gap-[20px]">
      {CATEGORIES.map((category) => (
        <Link key={category.id} href={category.href} className="flex-1">
          <div className="bg-white rounded-[48px] flex items-center p-3 group hover:bg-[#ff8732] hover:text-white transition-colors duration-200">
            <div className="flex items-center gap-[15px]">
              <img width={48} height={48} src="/image.png" alt={category.name} className="border rounded-full" />
              <div className="flex flex-col">
                <Typography tag="h2" variant="title18_semibold" className="group-hover:text-white">
                  {category.name}
                </Typography>
                <Typography tag="span" variant="paragraph14_regular" color="subtitle" className="group-hover:text-white">
                  {category.description}
                </Typography>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
