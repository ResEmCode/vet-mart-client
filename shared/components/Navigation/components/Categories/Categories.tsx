"use client";

import Link from "next/link";



import styles from "./Categories.module.css";
import { cn } from "@/shared/lib/utils";
import { useSearchParams } from "next/navigation";
import { CATEGORIES_MENU } from "./Categories.data";
import { queryStaking, ROUTES } from "@/shared/utils/constants/routes";
import { FilterTypes, useFilters } from "@/shared/components/Filters/store";
import { useEffect } from "react";
import { Typography } from "@/shared/ui/custom";

export const Categories: React.FC = () => {
  const queryType = useSearchParams().get("type");
  const setType = useFilters((state) => state.setType);

  useEffect(() => {
    if (queryType) {
      setType(queryType as FilterTypes["type"]);
    }
  }, [queryType]);

  return (
    <ul className="flex items-center justify-between w-full">
      {CATEGORIES_MENU.map((category) => (
        <li key={category.id} className={styles.item}>
          <Link href={queryStaking([ROUTES.CATEGORY], { type: category.query })} className={cn(styles.link, { [styles.active]: category.query === queryType })}>
            <img src="./image.png" alt="category" className={styles.img} />
            <div>
              <Typography tag="h2" variant="title18_semibold" className={styles.title}>
                {category.name}
              </Typography>
              <p className={styles.desc}>{category.description}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};
