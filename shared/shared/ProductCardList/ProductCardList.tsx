"use client";

import React, { useEffect, useState } from "react";
import { Typography } from "../Typography/Typography";
import ProductCard from "./components/ProductCard/ProductCard";
import { useFiltersStore } from "@/shared/store/filters";

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

const ProductCardList: React.FC = () => {
  const { weight } = useFiltersStore();
  const [products, setProducts] = useState<Product[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`/api/products${weight ? `?weight=${weight}` : ""}`, {
      cache: "no-cache",
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [weight]);

  console.log(products);

  return (
    <div>
      <Typography variant="title48_semibold" tag="h2">
        Сухой корм
      </Typography>
      <div className="grid grid-cols-3 gap-[20px]">{products?.map((item) => <ProductCard key={item.id} {...item} />)}</div>
    </div>
  );
};

export default ProductCardList;
