import { create } from "zustand";

interface FiltersState {
  weight: string | null;
  setWeight: (weight: string | null) => void;
}

export const useFiltersStore = create<FiltersState>((set) => ({
  weight: "0.9",
  setWeight: (weight) => set({ weight }),
}));
