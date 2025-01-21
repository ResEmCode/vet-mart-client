import { useCart } from "@/shared/store";
import { useCallback } from "react";

export const useCartCount = (id: number) => {
  const count = useCart((state) => state.cart).find((item) => Number(item.id) === id)?.count;
  const addCount = useCart((state) => state.addCount);
  const removeCount = useCart((state) => state.removeCount);

  const increment = useCallback(() => addCount(id), [addCount, id]);
  const decrement = useCallback(() => removeCount(id), [removeCount, id]);

  return { count, increment, decrement };
};
