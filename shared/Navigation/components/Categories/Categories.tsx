"use client";

import React, { useState } from "react";
import Link from "next/link";

import { Typography } from "@/shared/components";

import type { CategoryWithModalProps } from "../navigation.data";
import { CATEGORIES } from "../navigation.data";

export const CategoryWithModal: React.FC<CategoryWithModalProps> = ({ category }) => {
  return (
    <Link
      href={`/category/${category.href.split("/")[2]}`}
      className="flex-1 rounded-[48px] p-3 bg-white hover:bg-accent-color hover:text-white  transition-colors duration-200"
    >
      <div className="flex items-center gap-[15px]">
        <img width={48} height={48} src="/image.png" alt={category.name} className="rounded-full" />
        <div className="flex flex-col">
          <Typography tag="h2" variant="title18_semibold">
            {category.name}
          </Typography>
          <Typography tag="span" variant="paragraph14_regular" color="subtitle">
            {category.description}
          </Typography>
        </div>
      </div>
    </Link>
  );
};

export const Categories: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<number | null>(null);

  return (
    <div className="w-full">
      <div className="w-full flex justify-between gap-[20px]">
        {CATEGORIES.map((category: CategoryWithModalProps["category"]) => (
          <CategoryWithModal key={category.id} category={category} activeCategoryId={activeCategoryId} setActiveCategoryId={setActiveCategoryId} />
        ))}
      </div>
    </div>
  );
};
