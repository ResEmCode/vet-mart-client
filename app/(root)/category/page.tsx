import React from "react";

import { Filters, ProductCardList } from "@/shared/components";

const Category = () => {
  return (
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
  );
};

export default Category;
