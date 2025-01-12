"use client";

import { create } from "zustand";

type FormVariants = "login" | "register" | "reset-password" | "new-password";
interface ActiveFormTypes {
  activeForm: FormVariants;
  setActiveForm: (value: FormVariants | null) => void;
}

export const useActiveForm = create<ActiveFormTypes>((set) => ({
  activeForm: "login",
  setActiveForm: (value) => set((state) => ({ activeForm: value ?? "login" })),
}));
