"use client";

import React from "react";

import styles from "./CardOrder.module.css";
import { useCount } from "@/shared/components/Cart/hooks";
import { Typography } from "@/shared/ui/custom";
import { cn } from "@/shared/lib/utils";

interface DrawerCardProps {
  title: string;
  weight: string;
  price: string;
  oldPrice: string;
}

export const CardOrder = ({ title, weight, price, oldPrice }: DrawerCardProps) => {
  const { count } = useCount();

  return (
    <div className={styles.card}>
      <img src="/images/products/image.png" alt="images" className="max-w-[100px] w-full" />
      <div>
        <div className="mb-[20px]">
          <Typography tag="h2" variant="title16_semibold" className="mb[12px]">
            {title}
          </Typography>
          <Typography tag="h2" color="primary" variant="paragraph12_regular">
            Вага: {weight}
          </Typography>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-semibold">{Number(price) * count}₴</span>
            <span className="font-semibold text-accent-color line-through">{Number(oldPrice) * count}₴</span>
          </div>
        </div>
      </div>
    </div>
  );
};
