"use client";

import { Typography } from "@/shared/ui/custom/Typography/Typography";
import Link from "next/link";
import styles from "./MenuBar.module.css";
import { MENU_DATA } from "./MenuBar.data";
import { usePathname, useSearchParams } from "next/navigation";
import { cn } from "@/shared/lib/utils";

export const MenuBar = () => {
  //   const [isCategoriesOpen, setCategoriesOpen] = useState(false);

  const pathname = usePathname();

  return (
    <nav className="flex justify-between items-center w-full gap-4">
      <ul className={styles.items}>
        {MENU_DATA.map((link) => (
          <li key={link.id} className={styles.item}>
            <Link href={link.href} className={cn(styles.link, { [styles.active]: link.href === pathname })}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className={styles.info} >
        <Link href="tel:+38099967-87-57" className={styles.phone}>
          + 38 (099) 967-87-57
        </Link>
        <Link href="mailto:vetmart@ukr.net" className={styles.email}>
          vetmart@ukr.net
        </Link>
      </div>
    </nav>
  );
};

