import React, { useCallback } from "react";

export const useCountChange = (defaultCount: number = 1) => {
  const [count, setCount] = React.useState(defaultCount);

  const increment = useCallback(() => setCount((prev) => prev + 1), []);

  const decrement = useCallback(() => setCount((prev) => Math.max(0, prev - 1)), []);

  const handlePrice = (price: number | string): number => {
    return Number(price) * count;
  };

  return { count, increment, decrement, handlePrice, setCount };
};
