import { CheckboxGroup } from "@/shared/ui/custom";
import React from "react";
import { DataFilters } from "./DataFilters";
import { Button, Checkbox } from "@/shared/ui/shadcn";
import styles from "./FiltersFeed.module.css";
import { useFilter } from "../../hooks/useFilter";

export const FiltersFeed = () => {
  const { filters, onHandleCheckbox, handleShowAll, showAll, limit } = useFilter();

  return (
    <>
      {DataFilters.map((group, index) => (
        <CheckboxGroup title={group.title} key={group.title} className={index < limit.current ? styles.active : styles.hidden}>
          {group.checkboxes.map((checkbox) => (
            <CheckboxGroup.Item title={checkbox} key={checkbox}>
              <Checkbox
                onClick={() => onHandleCheckbox(group.filter, checkbox)}
                checked={filters[group.filter] === checkbox || filters[group.filter]?.includes(checkbox)}
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
    </>
  );
};
