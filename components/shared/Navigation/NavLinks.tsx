import React from "react";
import Link from "next/link";

import { Button } from "@/components/ui";

import { NAV_LINKS } from "./navigationdata";

export const NavLinks: React.FC = () => {
  return (
    <nav className="flex justify-between items-center w-full font-medium mb-4 flex-nowrap">
      <ul className="flex list-none">
        {NAV_LINKS.map((link) => (
          <li key={link.id} className="mr-2 flex text-start">
            <Link
              href={link.href}
              className="bg-white px-8 py-3 no-underline text-black rounded-[48px] transition-colors duration-300 text-[15px] leading-5 whitespace-nowrap hover:text-white hover:bg-[#ff8732]"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <Button className="bg-[#FF8732] rounded-[48px] px-8 py-3 mr-5">Обратный звонок</Button>

      <div className="flex items-end ml-auto flex-col">
        <div className="text-[20px] leading-6 text-right font-[600] ml-auto whitespace-nowrap">+ 38 (099) 967-87-57</div>
        <div className="text-[15px] leading-[18.15px] text-[#ff8732] align-right">vetmart@ukr.net</div>
      </div>
    </nav>
  );
};

export default NavLinks;
