import React from "react";
import Link from "next/link";

import { Filters, ProductCardList } from "@/shared/components";
import { cn } from "@/shared/lib/utils";
import { Container } from "@/shared/ui/custom";

import { ProductType } from "./product.data";

import styles from "./page.module.css";

interface CategoryPageProps {
  searchParams: Promise<{
    type: string;
    animal: string;
  }>;
}

const CategoryPage = async ({ searchParams }: CategoryPageProps) => {
  const params = await searchParams;
  const { animal, type } = params;
  const productTypes = ProductType[animal as keyof typeof ProductType] || [];

  const currentProduct = productTypes.find((product) => product.type === type);

  return (
    <Container className="mb-[60px] mt-[40px]">
      <ul className="flex gap-4 mb-20 flex-wrap">
        {productTypes.map((data) => (
          <li className={styles.item}>
            <Link
              href={{
                pathname: "/category",
                query: {
                  animal: params.animal,
                  type: data.type,
                },
              }}
              key={data.name}
              className={cn(styles.link, { [styles.active]: data.type === params.type })}
            >
              {data.name}
            </Link>
          </li>
        ))}

        {/* <ul className={styles.items}>
        {MENU_DATA.map((link) => (
          <li key={link.id} className={styles.item}>
            <Link href={link.href}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul> */}
      </ul>
      <div className="flex gap-[40px] justify-between">
        <div className={styles.filters}>
          <Filters params={params} />
        </div>

        <div className="flex-1">
          <div className="flex flex-col gap-16">{params && <ProductCardList params={params} title={currentProduct?.title || ""} />}</div>
        </div>
      </div>
    </Container>
  );
};

export default CategoryPage;
