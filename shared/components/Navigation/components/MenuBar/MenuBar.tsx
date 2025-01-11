"use client";

import { Typography } from "@/shared/components/Typography/Typography";
import Link from "next/link";
import styles from "./MenuBar.module.css";
import { MENU_DATA } from "./MenuBar.data";
import { usePathname, useSearchParams } from "next/navigation";
import { cn } from "@/shared/lib/utils";

export const MenuBar = () => {
  //   const [isCategoriesOpen, setCategoriesOpen] = useState(false);

  const pathname = usePathname();

  return (
    <nav className="flex justify-between items-center w-full">
      {/* <ul className="flex items-center gap-4">
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
      </ul> */}
      <ul className="flex items-center gap-2">
        {MENU_DATA.map((link) => (
          <li key={link.id}>
            <Link href={link.href} className={cn(styles.link, { [styles.active]: link.href === pathname })}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-end ml-auto flex-col">
        <Link href="tel:+38099967-87-57" className="text-[18px] font-semibold">
          + 38 (099) 967-87-57
        </Link>
        <Link href="mailto:vetmart@ukr.net" className="text-accent-color">
          vetmart@ukr.net
        </Link>
      </div>
    </nav>
  );
};
