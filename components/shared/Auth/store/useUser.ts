"use client";

import { create } from "zustand";

interface UserTypes {
  email: string;
  setEmail: (value: string) => void;
}

export const useUser = create<UserTypes>((set) => ({
  email: "test2014.de@gmail.com",
  setEmail: (value) => set(() => ({ email: value })),
}));
