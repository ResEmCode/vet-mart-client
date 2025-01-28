"use client";

import React, { useEffect } from "react";


import { FavoriteEmpty, ProductCard } from "@/shared/components";
import { useFavorites } from "@/shared/store";
import { Typography } from "@/shared/ui/custom";

const FavoritePage = () => {
  const favorites = useFavorites((state) => state.favorites);
  const setFavorites = useFavorites((state) => state.setFavorites);

  useEffect(() => {
    const favorites = localStorage.getItem("favorites") ?? "";

    if (favorites) {
      const parsFavorites: any[] = JSON.parse(favorites);
      setFavorites(parsFavorites);
    }
  }, []);

  return (
    <>
      <Typography variant="title48_semibold" tag="h2" className="mb-4">
        Мои избранные
      </Typography>
      {favorites.length ? <div className="flex gap-4 flex-wrap">{favorites?.map((item) => <ProductCard key={item.id} {...item} />)}</div> : <FavoriteEmpty />}
    </>
  );
};

export default FavoritePage;
