"use client";

import React, { useEffect, useState } from "react";

import { Typography } from "../../ui/custom/Typography/Typography";
import { Filters, ProductCard } from "@/shared/components";
import { useFilters } from "../Filters/store";
import qs from "qs";
import { useSearchParams } from "next/navigation";
import { getProducts } from "@/shared/api/requests";
import { ResponseProductCard } from "@/@types";
import { ProductCardSkeleton } from "./components";
import styles from "./ProductCardList.module.css";

import { Button } from "@/shared/ui/shadcn";
import { Drawer } from "@/shared/ui/custom";

export const ProductCardList = () => {
  const filters = useFilters((state) => state.filters);
  const setFilters = useFilters((state) => state.setFilters);
  const [products, setProducts] = useState<ResponseProductCard[]>([]);
  const params = useSearchParams();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const queryString = params.toString();

    (async () => {
      const { data } = await getProducts({ params: { query: queryString } });
      setProducts(data);
    })();
  }, [filters, params]);

  useEffect(() => {
    if (params.toString()) {
      const queryString = decodeURIComponent(params.toString());
      const data = qs.parse(queryString, { comma: true });
      console.log(data);
      setFilters(data);
    }
  }, []);

  function handleOpen() {
    setOpen(!open);
  }

  return (
    <>
      {open && (
        <Drawer isOpen title="Фільтри" direction="left" closeDrawer={handleOpen}>
          <Filters />
        </Drawer>
      )}

      <div>
        <Typography variant="title48_semibold" tag="h2" className="mb-[20px]">
          Сухой корм
        </Typography>

        <Button onClick={() => handleOpen()} className={styles.btn} variant={"outline"}>
          Фильтрувати
        </Button>

        <div className={styles.wrapper}>
          {products.length > 0
            ? products.map((item) => <ProductCard key={item.id} {...item} />)
            : [...new Array(6)].map((_, index) => <ProductCardSkeleton key={index} />)}
        </div>
      </div>
    </>
  );
};
