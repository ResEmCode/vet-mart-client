"use client";

import { useState } from "react";

import { Checkbox } from "@/components/ui";

import { CheckboxGroup } from "../CheckboxGroup/CheckboxGroup";

import { DataFilters } from "./Filters.data";

export const Filters = () => {
  const [showAll, setShopAll] = useState(false);

  const listItems = showAll ? DataFilters : DataFilters.slice(0, 2);

  return (
    <div className="flex flex-col gap-6 w-[260px] ">
      {listItems.map((group) => (
        <CheckboxGroup title={group.title} key={group.title}>
          {group.checkboxes.map((checkbox) => (
            <CheckboxGroup.Item title={checkbox} key={checkbox}>
              <Checkbox />
            </CheckboxGroup.Item>
          ))}
        </CheckboxGroup>
      ))}
      {DataFilters.length > 2 && (
        <div className="text-primary">
          <button onClick={() => setShopAll(!showAll)}>{!showAll ? "+ показать всё" : "скрыть"}</button>
        </div>
      )}
    </div>
  );
};
