"use client";

import { create } from "zustand";

interface CartDrawerTypes {
  isDarwerOpen: boolean;
  setIsDrawerOpen: (value: boolean | null) => void;
}

export const useCartDrawer= create<CartDrawerTypes>((set) => ({
  isDarwerOpen: false,
  setIsDrawerOpen: (value) => set((state) => ({ isDarwerOpen: value ?? !state.isDarwerOpen })),
}));
