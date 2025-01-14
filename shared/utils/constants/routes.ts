export const ROUTES = {
  MAIN: "/",
  CATEGORY: "/category",
};

type RouterStakingType = string[];

export const routerStaking = (...routes: RouterStakingType) => {
  return routes.join("");
};

export const queryStaking = (routes: Array<string>, query: Record<string, string>) => {
  const queryString = new URLSearchParams(query);
  const path = routes.join("");
  return path + "?" + queryString;
};
