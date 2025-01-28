"use client";

import React, { useEffect, useState } from "react";

import { Typography } from "../../ui/custom/Typography/Typography";
import { useFilters } from "../Filters/store";
import qs from "qs";
import { getProducts } from "@/shared/api/requests";
import { ResponseProductCard } from "@/@types";
import { ProductCard, ProductCardSkeleton } from "./components";

interface ProductCardListProps {
  params: {
    type: string;
    animal: string;
  };
}

export const ProductCardList = ({ params }: ProductCardListProps) => {
  const filters = useFilters((state) => state.filters);
  const setFilters = useFilters((state) => state.setFilters);
  const [products, setProducts] = useState<ResponseProductCard[]>([]);

  useEffect(() => {
    if (params) {
      const queryString = new URLSearchParams(params).toString();

      (async () => {
        const { data } = await getProducts({ params: { query: queryString } });
        setProducts(data);
      })();
    }
  }, [filters, params]);

  useEffect(() => {
    if (params) {
      const queryString = new URLSearchParams(params).toString();
      const data = qs.parse(queryString, { comma: true });

      setFilters(data);
    }
  }, []);

  return (
    <div>
      <Typography variant="title48_semibold" tag="h2" className="mb-[20px]">
        Сухой корм
      </Typography>

      <div className="grid grid-cols-3 gap-[20px]">
        {products.length > 0
          ? products.map((item) => <ProductCard key={item.id} {...item} />)
          : [...new Array(6)].map((_, index) => <ProductCardSkeleton key={index} />)}
      </div>
    </div>
  );
};
