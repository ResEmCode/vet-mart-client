"use client";

import { convertArrayValue } from "@/shared/components/Filters/helpers";
import { create } from "zustand";

export type FilterTypes = {
  type: "cats" | "dogs" | "birds" | "rodents";
  weight: string[];
  brand: string[];
  feedType: string[];
  purpose: string[];
  age: string[];
  ingredients: string[];
};

type StateValue = { filter: keyof Omit<FilterTypes, "type">; value: string };

interface FiltersTypes {
  filters: Partial<FilterTypes>;
  setFilter: (value: StateValue) => void;
  setType: (value: FilterTypes["type"]) => void;
  setFilters: (value: Partial<FilterTypes>) => void;
}

export const useFilters = create<FiltersTypes>((set) => ({
  filters: {},
  setFilter: (value) =>
    set((state) => {
      const newValue = checkValue(state.filters, value);
      return {
        filters: { ...state.filters, [value.filter]: newValue },
      };
    }),
  setType: (value) =>
    set((state) => {
      return { filters: { ...state.filters, type: value } };
    }),
  setFilters: (value) =>
    set((state) => {
      const newValue = convertArrayValue(value);
      return { filters: { ...state.filters, ...newValue } };
    }),
}));

const checkValue = (filters: Partial<FilterTypes>, payload: StateValue) => {
  const { value, filter } = payload;

  if (filters[filter]?.includes(value)) {
    const newValue = filters[filter]?.filter((item) => item !== value);
    return newValue;
  } else {
    const newValue = [...(filters[filter] ?? []), value];
    return newValue;
  }
};
