type ResultTypes<T> = {
  [K in keyof T]:
    | {
        in: Array<string | number>;
      }
    | string
    | number;
};

type FilterInput = Record<string, string | string[] | number>;

export const convertPrismaFilters = <T>(filter: FilterInput): Partial<ResultTypes<T>> => {
  const result = {} as Partial<ResultTypes<T>>;

  Object.keys(filter).forEach((key) => {
    const values = filter[key];
    if (Array.isArray(values)) {
      (result as any)[key] = { in: values.map((value) => (isNaN(Number(value)) ? value : Number(value))) };
    } else {
      (result as any)[key] = isNaN(Number(values)) ? values : Number(values);
    }
  });

  return result;
};
