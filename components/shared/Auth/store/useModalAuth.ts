"use client";

import { create } from "zustand";

interface ModalAuthTypes {
  isAuthOpen: boolean;
  setIsAuthOpen: (value: boolean | null) => void;
}

export const useModalAuth = create<ModalAuthTypes>((set) => ({
  isAuthOpen: false,
  setIsAuthOpen: (value) => set((state) => ({ isAuthOpen: value ?? !state.isAuthOpen })),
}));
