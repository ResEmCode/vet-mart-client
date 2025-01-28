"use client";

import { Heart, Home, Search, ShoppingCart, User } from "lucide-react";
import styles from "./BurgerMenu.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";

export const BurgerMenu = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // или любой другой компонент-заглушка
  }

  return (
    window.innerWidth <= 768 && (
      <ul className={styles.inner}>
        <li>
          <Link href="/" className={styles.btn}>
            <Home />
          </Link>
        </li>
        <li>
          <Link href="/cart" className={styles.btn}>
            <ShoppingCart />
          </Link>
        </li>
        <li>
          <Link href="/" className={styles.btn}>
            <Search />
          </Link>
        </li>
        <li>
          <Link href="/profile/favorite" className={styles.btn}>
            <Heart />
          </Link>
        </li>
        <li>
          <Link href="/profile/personal-data" className={styles.btn}>
            <User />
          </Link>
        </li>
      </ul>
    )
  );
};
