"use client";

import { create } from "zustand";

interface AuthModalTypes {
  isAuthOpen: boolean;
  setIsAuthOpen: (value: boolean | null) => void;
}

export const useAuthModal = create<AuthModalTypes>((set) => ({
  isAuthOpen: false,
  setIsAuthOpen: (value) => set((state) => ({ isAuthOpen: value ?? !state.isAuthOpen })),
}));
