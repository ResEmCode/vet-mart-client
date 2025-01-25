import React from "react";

import { Filters, ProductCardList } from "@/shared/components";
import { Container } from "@/shared/ui/custom";

import styles from "./page.module.css";

const CategoryPage = () => {
  return (
    <Container className="mb-[60px] mt-[40px]">
      <div className="flex gap-[40px] justify-between">
        <div className={styles.filters}>
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

export default CategoryPage;
