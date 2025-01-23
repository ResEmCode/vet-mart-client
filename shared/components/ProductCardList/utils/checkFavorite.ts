import { useFavorites } from "@/shared/store";

export const checkFavorite = (id: number) => {
  const favorites = useFavorites((state) => state.favorites);

  const item = favorites.find((item) => item.id === id);

  if (item) return true;

  return false;
};
