import { create } from "zustand";

interface UseDiscountProductsParams {
  products: any[];
  setProducts: (values: any[]) => void;
  addProduct: (value: any) => void;
  updateProduct: (payload: { productId: string; discount: string }) => void;
}

export const useDiscountProducts = create<UseDiscountProductsParams>((set) => ({
  products: [],
  setProducts: (values) => set(() => ({ products: [...values] })),
  addProduct: (value) => set((state) => ({ products: [value, ...state.products] })),
  updateProduct: (payload) =>
    set((state) => {
      const newObj = state.products.map((item) => {
        if (item.id === Number(payload.productId)) return { ...item, discount: payload.discount };
        return item;
      });

      return { products: newObj };
    }),
}));
