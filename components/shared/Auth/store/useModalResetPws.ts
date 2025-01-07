"use client";

import { create } from "zustand";

interface ModalResetPwsTypes {
  isResetPwsOpen: boolean;
  setIsResetPwsOpen: (value: boolean | null) => void;
}

export const useModalResetPws = create<ModalResetPwsTypes>((set) => ({
  isResetPwsOpen: false,
  setIsResetPwsOpen: (value) => set((state) => ({ isResetPwsOpen: value ?? !state.isResetPwsOpen })),
}));
