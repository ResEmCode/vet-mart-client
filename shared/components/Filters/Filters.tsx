"use client";

import { useEffect, useRef, useState } from "react";

import { CheckboxGroup } from "../../ui/custom/CheckboxGroup/CheckboxGroup";

import styles from "./Filters.module.css";
import { DataFilters } from "./DataFilters";
import { Button, Checkbox } from "@/shared/ui/shadcn";
import { FilterTypes, useFilters } from "./store";
import { usePathname, useRouter } from "next/navigation";
import qs from "qs";

export interface DataFilterGroup {
  title: string;
  checkboxes: string[];
}

export const Filters = () => {
  const [showAll, setShopAll] = useState(false);
  const limit = useRef<number>(2);
  const { filters, setFilter } = useFilters();
  const router = useRouter();
  const pathname = usePathname();

  const handleShowAll = () => {
    setShopAll(!showAll);
    if (!showAll) {
      limit.current = DataFilters.length;
    } else {
      limit.current = 2;
    }
  };

  const onHandleCheckbox = async (filter: keyof Omit<FilterTypes, "type">, value: string) => {
    setFilter({ filter, value });
  };

  useEffect(() => {
    const testQuery = qs.stringify(filters, { arrayFormat: "comma" });
    router.replace(pathname + "?" + testQuery);
  }, [filters]);

  return (
    <div className="flex flex-col gap-6 bg-white p-[20px] rounded-[4px]">
      {DataFilters.map((group, index) => (
        <CheckboxGroup title={group.title} key={group.title} className={index < limit.current ? styles.active : styles.hidden}>
          {group.checkboxes.map((checkbox) => (
            <CheckboxGroup.Item title={checkbox} key={checkbox}>
              <Checkbox
                onClick={() => onHandleCheckbox(group.filter as keyof Omit<FilterTypes, "type">, checkbox)}
                // checked={Boolean(filters[group.filter] === checkbox || filters[group.filter]?.includes(checkbox))}
              />
            </CheckboxGroup.Item>
          ))}
        </CheckboxGroup>
      ))}
      {DataFilters.length > 2 && (
        <div className="text-primary">
          <Button onClick={handleShowAll}>{!showAll ? "+ показать всё" : "скрыть"}</Button>
        </div>
      )}
    </div>
  );
};
