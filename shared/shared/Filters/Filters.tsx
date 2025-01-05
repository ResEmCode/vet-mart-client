"use client";

import { useRef, useState } from "react";

import { CheckboxGroup } from "../CheckboxGroup/CheckboxGroup";

import styles from "./Filters.module.css";
import { DataFilters } from "./DataFilters";
import { Button, Checkbox } from "@/shared/ui";
import { useFiltersStore } from "@/shared/store/filters";

export interface DataFilterGroup {
  title: string;
  checkboxes: string[];
}

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

  const setWeight = useFiltersStore((state) => state.setWeight);

  const onClickCheckbox = (group: DataFilterGroup, value: string) => {
    if (group.title === "Вага упаковки") {
      setWeight(value);
    }

    console.log(group.title, value);
  };

  return (
    <div className="flex flex-col gap-6 w-[260px] ">
      {DataFilters.map((group, index) => (
        <CheckboxGroup title={group.title} key={group.title} className={index < limit.current ? styles.active : styles.hidden}>
          {group.checkboxes.map((checkbox) => (
            <CheckboxGroup.Item onClick={() => onClickCheckbox(group, checkbox)} title={checkbox} key={checkbox}>
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
