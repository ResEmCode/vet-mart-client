import React from "react";
import Link from "next/link";

import styles from "./Navigation.module.css";

const CATEGORIES = [
  { id: 1, name: "Кошки", href: "/cats" },
  { id: 2, name: "Собаки", href: "/dogs" },
  { id: 3, name: "Птицы", href: "/birds" },
  { id: 4, name: "Ветпрепараты", href: "/vet-medicines" },
];

const Categories = () => {
  return (
    <div className={styles.categories}>
      {CATEGORIES.map((category) => (
        <Link key={category.id} href={category.href}>
          <div className={styles.category}>
            <div className={styles.circleAndText}>
              <div className={styles.circle} />
              <div className={styles.categoryContent}>
                <div className={styles.categoryTitle}>{category.name}</div>
                <div className={styles.categoryText}>Корма, ветпрепараты, игрушки</div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
