"use client";

import React, { useEffect, useState } from "react";

import { Typography } from "../../ui/custom/Typography/Typography";
import { ProductCard } from "@/shared/components";
import { useFilters } from "../Filters/store";
import qs from "qs";
import { useSearchParams } from "next/navigation";
import { getProducts } from "@/shared/api/requests";
import { ResponseProductCard } from "@/@types";
import { ProductCardSkeleton } from "./components";

export const ProductCardList = () => {
  const filters = useFilters((state) => state.filters);
  const setFilters = useFilters((state) => state.setFilters);
  const [products, setProducts] = useState<ResponseProductCard[]>([]);
  const params = useSearchParams();

  useEffect(() => {
    const queryString = params.toString();

    (async () => {
      const { data } = await getProducts({ params: { query: queryString } });
      setProducts(data);
    })();
  }, [filters, params]);

  useEffect(() => {
    if (params.toString()) {
      const queryString = decodeURIComponent(params.toString());
      const data = qs.parse(queryString, { comma: true });
      console.log(data);
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
