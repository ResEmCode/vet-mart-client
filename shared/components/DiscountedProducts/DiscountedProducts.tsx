"use client";

import { useState } from "react";
import { Typography } from "../../ui/custom/Typography/Typography";

import { ProductsMenu, ProductsSlider } from "./components";
import { productsData } from "./DiscountedProducts.data";

export const DiscountedProducts = () => {
  const [productId, setProductId] = useState(0);

  return (
    <div className="my-[60px]">
      <div className="flex items-center gap-16 mb-[20px]">
        <Typography variant="title48_semibold" tag="h2">
          Товары со скидкой
        </Typography>
        <ProductsMenu title={productsData[productId].title} onClick={(index) => setProductId(index)} />
      </div>

      <ProductsSlider slider={productsData[productId].slider} />
    </div>
  );
};
