import React, { useCallback } from "react";

export const useCountChange = (defaultCount: number = 1) => {
  const [count, setCount] = React.useState(defaultCount);

  const increment = useCallback(() => setCount((prev) => prev + 1), []);
  const decrement = useCallback(() => setCount((prev) => prev - 1), []);

  return { count, increment, decrement, setCount };
};
