export const toArrayKeyObject = <T, K extends URLSearchParams>(params: K, keys: Array<keyof T>) => {
  const result: Partial<Record<keyof T, any>> = {};
  keys.forEach((key) => {
    const value = params.get(key.toString());

    if (value) {
      result[key] = value?.split(",");
    }
  });
  return result;
};
