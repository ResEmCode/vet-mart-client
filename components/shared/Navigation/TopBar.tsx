import React from "react";

import { Input } from "@/components/ui";

import styles from "./Navigation.module.css";

const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <div className={styles.logoSection}>
        <div className={styles.logo}>
          Вет<span>март</span>
        </div>
        <div className={styles.subtitle}>Ветеринарный магазин в Виннице с 2022 года</div>
      </div>

      <Input placeholder="Поиск товара" className="w-[950px] h-[46px] px-6 py-1 text-sm bg-#ff8732 rounded-[48px]" />

      <div className={styles.icons}>
        <img className={styles.icon} src="/images/profile.png" alt="Profile" />
        <img className={styles.icon} src="/images/profile.png" alt="Profile" />
        <img className={styles.icon} src="/images/profile.png" alt="Profile" />
      </div>
    </div>
  );
};

export default TopBar;
