import React from "react";

import { Container, Filters, ProductCardList } from "@/shared/components";

const Category = () => {
  return (
    <Container className="mb-[60px] mt-[40px]">
      <div className="flex gap-[40px] justify-between">
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
