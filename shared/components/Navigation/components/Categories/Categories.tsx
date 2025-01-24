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
import Image from "next/image";
import { checkTypeQuery } from "@/shared/utils/helpers";

export const Categories: React.FC = () => {
  const queryType = useSearchParams().get("type");
  const setType = useFilters((state) => state.setType);

  useEffect(() => {
    if (checkTypeQuery<FilterTypes["type"]>(queryType)) {
      setType(queryType);
    }
  }, [queryType]);

  return (
    <ul className={styles.categories}>
      {CATEGORIES_MENU.map((category) => (
        <li key={category.id} className={styles.item}>
          <Link href={queryStaking([ROUTES.CATEGORY], { type: category.query })} className={cn(styles.link, { [styles.active]: category.query === queryType })}>
            <Image src="/images/products/image.png" width={48} height={48} alt="category" className={styles.img} />
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
