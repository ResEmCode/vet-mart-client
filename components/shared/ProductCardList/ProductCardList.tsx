import React from "react";

import { Typography } from "../Typography/Typography";

import { ProductCard } from "./components";

export const ProductCardList = () => {
  return (
    <div>
      <Typography variant="title48_semibold" tag="h2">
        Сухой корм
      </Typography>
      <div className="grid grid-cols-3 gap-[50px]">
        <ProductCard title="Сухий корм для котів happy pet" weight="10 000г" price="329 ₴" />
        <ProductCard title="Сухий корм для котів happy pet" weight="10 000г" price="329 ₴" />
        <ProductCard title="Сухий корм для котів happy pet" weight="10 000г" price="329 ₴" />
        <ProductCard title="Сухий корм для котів happy pet" weight="10 000г" price="329 ₴" />
        <ProductCard title="Сухий корм для котів happy pet" weight="10 000г" price="329 ₴" />
        <ProductCard title="Сухий корм для котів happy pet" weight="10 000г" price="329 ₴" />
      </div>
    </div>
  );
};
