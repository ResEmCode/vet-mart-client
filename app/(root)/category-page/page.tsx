import React from "react";

import { Container, Navigation, ProductCardList } from "@/components/shared";

const Page = () => {
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

export default Page;
