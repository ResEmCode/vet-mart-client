"use client";

import { Product, ProductVariant } from "@prisma/client";
import { create } from "zustand";

export type CombinedType = Omit<Product, "images"> & ProductVariant & { image: string };

interface ProductTypes {
  products: CombinedType[];
  setProducts: (value: CombinedType[]) => void;
}

export const useProducts = create<ProductTypes>((set) => ({
  products: [],
  setProducts: (value) =>
    set(() => ({
      products: value,
    })),
}));
