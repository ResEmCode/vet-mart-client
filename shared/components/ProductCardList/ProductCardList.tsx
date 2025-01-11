"use client";

import type { FC } from "react";
import React, { useEffect, useState } from "react";

import { Typography } from "../Typography/Typography";
import { ProductCard } from "@/shared/components";
import { CombinedType, useProducts } from "@/shared/store";
import { useFilters } from "../Filters/store";
import qs from "qs";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import { ProductCard } from "../DiscountedProducts/components";

interface Product {
  id: number;
  article: number;
  country: string;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  isAvailable: boolean;
  composition: string;
  sale: boolean;
  salePrice: number | null;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
}

export const ProductCardList: FC = () => {
  const filters = useFilters((state) => state.filters);
  const setFilters = useFilters((state) => state.setFilters);
  const [products, setProducts] = useState<CombinedType[]>([]);
  const params = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const queryString = params.toString();

    fetch(`/api/products?${queryString}`)
      .then((res) => res.json())
      .then((res) => setProducts(res));
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
      <Typography variant="title48_semibold" tag="h2">
        Сухой корм
      </Typography>
      <div className="grid grid-cols-3 gap-[20px]">
        {products.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
