"use client";

import { create } from "zustand";

interface FavoritesTypes {
  favorites: any[];
  setFavorites: (value: any[]) => void;
  changeFavorite: (id: any) => void;
}

export const useFavorites = create<FavoritesTypes>((set) => ({
  favorites: [],
  setFavorites: (value) =>
    set(() => ({
      favorites: value,
    })),
  changeFavorite: (value) =>
    set((state) => {
      const findProduct = state.favorites.find((item) => Number(item.id) === Number(value.id));

      if (findProduct) {
        const newFavorites = state.favorites.filter((item) => Number(item.id) !== Number(value.id));

        return { favorites: newFavorites };
      }

      return { favorites: [...state.favorites, value] };
    }),
}));
