"use client";

import { useState } from "react";
import { Typography } from "../../ui/custom/Typography/Typography";

import { ProductsMenu, ProductsSlider } from "./components";
import { productsData } from "./DiscountedProducts.data";

import styles from "./DiscountedProducts.module.css";

export const DiscountedProducts = () => {
  const [productId, setProductId] = useState(0);

  return (
    <div className="my-[60px]">
      <div className={styles.buttons_row}>
        <Typography variant="title48_semibold" tag="h2">
          Товары со скидкой
        </Typography>
        <ProductsMenu title={productsData[productId].title} onClick={(index) => setProductId(index)} />
      </div>

      <ProductsSlider slider={productsData[productId].slider} />
    </div>
  );
};
