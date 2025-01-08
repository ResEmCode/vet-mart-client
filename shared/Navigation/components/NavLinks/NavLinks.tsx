"use client";

import React, { useState } from "react";
import Link from "next/link";

import { Typography } from "@/shared/components";
import { CategoriesModal } from "@/shared/ui";

import { NAV_LINKS } from "../navigation.data";

export const NavLinks: React.FC = () => {
  const [isCategoriesOpen, setCategoriesOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center w-full font-medium flex-nowrap">
      <ul className="flex items-center gap-4">
        {NAV_LINKS.map((link, index) => (
          <li
            key={link.id}
            className="relative flex text-start"
            onMouseEnter={() => index === 0 && setCategoriesOpen(true)}
            onMouseLeave={() => index === 0 && setCategoriesOpen(false)}
          >
            <Link
              href={link.href}
              className="bg-white px-[32px] py-[12px] text-black rounded-[48px] transition-colors duration-200 text-[15px] leading-5 hover:text-white hover:bg-[#ff8732]"
            >
              {link.name}
            </Link>

            {index === 0 && isCategoriesOpen && (
              <div className="absolute top-full left-0 z-10">
                <CategoriesModal />
              </div>
            )}
          </li>
        ))}
      </ul>

      <div className="flex items-end ml-auto flex-col">
        <Typography tag="span" variant="title18_semibold">
          + 38 (099) 967-87-57
        </Typography>
        <Typography tag="span" variant="paragraph15_medium" color="accent">
          vetmart@ukr.net
        </Typography>
      </div>
    </nav>
  );
};
