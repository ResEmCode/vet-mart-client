export const convertArrayValue = <T extends Record<string, any>>(object: T) => {
  const paramsObject: Record<string, any[]> = {};
  Object.entries(object).forEach(([key, value]) => {
    paramsObject[key] = Array.isArray(value) ? value : [value];
  });

  return paramsObject;
};
