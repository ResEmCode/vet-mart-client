"use client";

import { useRef, useState } from "react";

import { Button, Checkbox } from "@/components/ui";

import { CheckboxGroup } from "../CheckboxGroup/CheckboxGroup";

import { DataFilters } from "./Filters.data";

import styles from "./Filters.module.css";

export const Filters = () => {
  const [showAll, setShopAll] = useState(false);
  const limit = useRef<number>(2);

  const handleShowAll = () => {
    setShopAll(!showAll);
    if (!showAll) {
      limit.current = DataFilters.length;
    } else {
      limit.current = 2;
    }
  };

  return (
    <div className="flex flex-col gap-6 w-[260px] ">
      {DataFilters.map((group, index) => (
        <CheckboxGroup title={group.title} key={group.title} className={index < limit.current ? styles.active : styles.hidden}>
          {group.checkboxes.map((checkbox) => (
            <CheckboxGroup.Item title={checkbox} key={checkbox}>
              <Checkbox />
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
