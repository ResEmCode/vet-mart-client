"use client";

import { create } from "zustand";

interface RememberTypes {
  remember: boolean;
  setRemember: (value: boolean | null) => void;
}

export const useRemember = create<RememberTypes>((set) => ({
    remember: false,
  setRemember: (value) => set((state) => ({ remember: value ?? !state.remember })),
}));
