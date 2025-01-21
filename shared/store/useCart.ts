"use client";

import { create } from "zustand";

interface CartTypes {
  cart: any[];
  setCart: (value: any[]) => void;
  addCart: (value: any) => void;
  removeCart: (id: number) => void;
  addCount: (id: number) => void;
  removeCount: (id: number) => void;
}

export const useCart = create<CartTypes>((set) => ({
  cart: [],
  setCart: (value) =>
    set(() => ({
      cart: value,
    })),
  addCart: (value) =>
    set((state) => {
      const findItem = state.cart.find((item) => item.id === value.id);

      if (findItem) {
        const newItem: any = {
          ...findItem,
          count: findItem.count + 1,
        };

        const filteredCart = state.cart.filter((item) => item.id !== value.id);

        return {
          cart: [...filteredCart, newItem],
        };
      }

      return {
        cart: [...state.cart, { ...value, count: 1 }],
      };
    }),
  removeCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),
  addCount: (id) =>
    set((state) => {
      const findItem = state.cart.find((item) => item.id === id);

      if (findItem) {
        const newItem: any = {
          ...findItem,
          count: findItem.count + 1,
        };

        const filteredCart = state.cart.filter((item) => item.id !== id);

        return {
          cart: [...filteredCart, newItem],
        };
      }

      return state;
    }),
  removeCount: (id) =>
    set((state) => {
      const findItem = state.cart.find((item) => item.id === id);

      if (findItem) {
        const newItem: any = {
          ...findItem,
          count: findItem.count - 1,
        };

        const filteredCart = state.cart.filter((item) => item.id !== id);

        return {
          cart: [...filteredCart, newItem],
        };
      }

      return state;
    }),
}));
