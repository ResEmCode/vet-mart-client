"use client";

import { useRef, useState, useEffect } from "react";

import { Button, Checkbox } from "@/shared/ui";

import { CheckboxGroup } from "../CheckboxGroup/CheckboxGroup";

import styles from "./Filters.module.css";

type FilterGroup = {
  title: string;
  checkbox: string[];
};

export const Filters = () => {
  const [showAll, setShowAll] = useState(false);
  const [filtersData, setFiltersData] = useState<FilterGroup[]>([]);
  const limit = useRef<number>(2);

  const handleShowAll = () => {
    setShowAll(!showAll);
    limit.current = !showAll ? filtersData.length : 2;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/filters/");
        console.log("Response:", res);
        if (!res.ok) {
          throw new Error(`Ошибка HTTP: ${res.status}`);
        }
        const data: FilterGroup[] = await res.json();
        setFiltersData(data);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-6 w-[260px]">
      {filtersData.slice(0, limit.current).map((group, index) => (
        <CheckboxGroup title={group.title} key={group.title}>
          {group.checkbox.map((checkbox) => (
            <CheckboxGroup.Item title={checkbox} key={checkbox}>
              <Checkbox />
            </CheckboxGroup.Item>
          ))}
        </CheckboxGroup>
      ))}
      {filtersData.length > 2 && (
        <div className="text-primary">
          <Button onClick={handleShowAll}>{!showAll ? "+ показать всё" : "скрыть"}</Button>
        </div>
      )}
    </div>
  );
};
