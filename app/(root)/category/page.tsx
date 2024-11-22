import React from "react";

import { Container, Navigation } from "@/components/shared";
import ProductCardList from "@/components/shared/ProductCardList/ProductCardList";

const Category = () => {
  return (
    <Container>
      <Navigation />
      <div className="flex gap-[80px]">
        <div className="w-[250px]">filters</div>

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
