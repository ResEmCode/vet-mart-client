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

const fetchProducts = async (weight: string | null): Promise<Product[]> => {
  const queryString = weight ? `?${new URLSearchParams({ weight })}` : "";
  const res = await fetch(`http://localhost:3000/api/products/${queryString}`);
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
};

const ProductCardList: React.FC = () => {
  const { weight } = useFiltersStore();
  const [products, setProducts] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchProducts(weight);
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Неизвестная ошибка");
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, [weight]);

  if (loading) {
    return <div>Загрузка данных...</div>;
  }

  if (error) {
    return (
      <div>
        <p>Ошибка загрузки данных: {error}</p>
        <button onClick={() => window.location.reload()}>Попробовать снова</button>
      </div>
    );
  }

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
