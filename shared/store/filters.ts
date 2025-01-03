import { create } from "zustand";

interface FiltersState {
  weight: string | null;
  setWeight: (weight: string | null) => void;
}

export const useFiltersStore = create<FiltersState>((set) => ({
  weight: null,
  setWeight: (weight) => set({ weight }),
}));
