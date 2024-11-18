import React from "react";
import Link from "next/link";

import { Button } from "@/components/ui";

import styles from "./Navigation.module.css";

const NAV_LINKS = [
  { id: 1, name: "Главная", href: "/" },
  { id: 2, name: "О нас", href: "/about" },
  { id: 3, name: "Оплата и доставка", href: "/payment" },
  { id: 4, name: "Возврат и обмен", href: "/return" },
  { id: 5, name: "Контакты", href: "/contacts" },
  { id: 6, name: "Новости", href: "/news" },
];

const NavLinks = () => {
  return (
    <nav className={styles.navLinks}>
      <ul>
        {NAV_LINKS.map((link) => (
          <li key={link.id} className={styles.navLinkItem}>
            <Link href={link.href} className={styles.navLink}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <Button className="px-8 py-3 mr-5 ">Обратный звонок</Button>

      <div className={styles.contact}>
        <div className={styles.phone}>+ 38 (099) 967-87-57</div>
        <div className={styles.email}>vetmart@ukr.net</div>
      </div>
    </nav>
  );
};

export default NavLinks;
