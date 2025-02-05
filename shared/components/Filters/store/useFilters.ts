import { create } from "zustand";

interface FiltersState<T> {
  filters: T | null;
  setFilters: (value: T) => void;
}

interface FiltersTypes {}

export const useFilters = create<FiltersState<Record<string, any>>>((set) => ({
  filters: {},
  setFilters: (value) => set({ filters: value }),
}));
