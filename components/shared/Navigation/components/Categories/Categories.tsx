"use client";

import React, { useState } from "react";
import Link from "next/link";

import { Typography } from "@/components/shared/Typography/Typography";

import type { CategoryWithModalProps } from "../navigation.data";
import { CATEGORIES } from "../navigation.data";

export const CategoryWithModal: React.FC<CategoryWithModalProps> = ({ category }) => {
  return (
    <div className="relative group">
      <div className="flex-1">
        <Link href={`/category/${category.href.split("/")[2]}`} className="flex-1">
          <div className="bg-white rounded-[48px] flex items-center p-3 transition-colors duration-200 group-hover:bg-[#ff8732] group-hover:text-white">
            <div className="flex items-center gap-[15px]">
              <img width={48} height={48} src="/image.png" alt={category.name} className="border rounded-full" />
              <div className="flex flex-col">
                <Typography tag="h2" variant="title18_semibold" className="text-black group-hover:text-white">
                  {category.name}
                </Typography>
                <Typography tag="span" variant="paragraph14_regular" color="subtitle" className="text-gray-500 group-hover:text-white">
                  {category.description}
                </Typography>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export const Categories: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<number | null>(null);

  return (
    <div className="relative">
      <div className="w-full flex gap-[20px] text-black">
        {CATEGORIES.map((category: CategoryWithModalProps["category"]) => (
          <CategoryWithModal key={category.id} category={category} activeCategoryId={activeCategoryId} setActiveCategoryId={setActiveCategoryId} />
        ))}
      </div>
    </div>
  );
};
