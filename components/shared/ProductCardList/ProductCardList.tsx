import type { FC } from "react";
import React from "react";

import { Typography } from "../Typography/Typography";

import ProductCard from "./components/ProductCard/ProductCard";

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

const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch(`http://localhost:3000/api/products/`);
  if (!res.ok) {
    throw new Error("Failed to fetch products", { cause: res });
  }
  return res.json();
};

const ProductCardList: FC = async () => {
  try {
    const data: Product[] = await fetchProducts();

    return (
      <div>
        <Typography variant="title48_semibold" tag="h2">
          Сухой корм
        </Typography>
        <div className="grid grid-cols-3 gap-[20px]">
          {data.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    );
  } catch (error) {
    return <div>Ошибка загрузки данных: {error instanceof Error ? error.message : "Неизвестная ошибка"}</div>;
  }
};

export default ProductCardList;
