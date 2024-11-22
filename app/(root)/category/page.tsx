import React from "react";

import { Container, Filters, Navigation } from "@/components/shared";
import ProductCardList from "@/components/shared/ProductCardList/ProductCardList";

const Category = () => {
  return (
    <Container>
      <Navigation />
      <div className="flex gap-[20px] justify-between">
        <div className="w-[250px]">
          <Filters />
        </div>

        <div className="flex-1">
          <div className="flex flex-col gap-16">
            <ProductCardList />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Category;
