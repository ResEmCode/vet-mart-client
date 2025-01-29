import { useRef, useState } from "react";
import { FilterTypes, useFilters } from "../store";
import { DataFilters } from "../components/FiltersFeed/DataFilters";

export const useFilter = () => {
  const { filters, setFilter } = useFilters();
  const limit = useRef<number>(2);
  const [showAll, setShopAll] = useState(false);

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

  return {
    filters,
    onHandleCheckbox,
    handleShowAll,
    showAll,
    limit,
  };
};
