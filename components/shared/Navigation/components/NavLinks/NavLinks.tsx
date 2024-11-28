import Link from "next/link";

import { Typography } from "@/components/shared/Typography/Typography";
import { Button } from "@/components/ui";

import { NAV_LINKS } from "../navigation.data";

export const NavLinks: React.FC = () => {
  return (
    <nav className="flex justify-between items-center w-full font-medium flex-nowrap">
      <ul className="flex">
        {NAV_LINKS.map((link) => (
          <li key={link.id} className="mr-2 flex text-start">
            <Link
              href={link.href}
              className="bg-white px-[32px] py-[12px] text-black rounded-[48px] transition-colors duration-200 text-[15px] leading-5 hover:text-white hover:bg-[#ff8732]"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      <Button className="bg-[#FF8732] px-[32px] py-[12px]">Обратный звонок</Button>

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
