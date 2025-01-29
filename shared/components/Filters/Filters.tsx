"use client";

import { useEffect } from "react";

import styles from "./Filters.module.css";

import { usePathname, useRouter } from "next/navigation";
import qs from "qs";
import { FiltersFeed } from "./components/FiltersFeed/FiltersFeed";
import { useFilter } from "./hooks/useFilter";

export interface DataFilterGroup {
  title: string;
  checkboxes: string[];
}

export const Filters = () => {
  const router = useRouter();
  const pathname = usePathname();

  const { filters } = useFilter();

  useEffect(() => {
    const testQuery = qs.stringify(filters, { arrayFormat: "comma" });
    router.replace(pathname + "?" + testQuery);
  }, [filters]);

  return (
    <div className={styles.filters}>
      <FiltersFeed />
    </div>
  );
};
