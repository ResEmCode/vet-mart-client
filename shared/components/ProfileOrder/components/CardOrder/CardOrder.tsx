"use client";

import React from "react";

import styles from "./CardOrder.module.css";
import { Typography } from "@/shared/ui/custom";
import { cn } from "@/shared/lib/utils";

interface DrawerCardProps {
  title: string;
  weight: string;
  price: string;
  oldPrice: string;
  count: number;
}

export const CardOrder = ({ title, weight, price, oldPrice, count = 1 }: DrawerCardProps) => {
  return (
    <div className={styles.card}>
      <img src="/images/products/image.png" alt="images" className="max-w-[100px] w-full" />
      <div className="max-w-[160px] w-full">
        <div className="mb-[20px]">
          <Typography tag="h2" variant="title16_semibold" className="mb[12px]">
            {title}
          </Typography>
          <Typography tag="h2" color="subtitle" variant="paragraph12_regular">
            Вага: {weight}
          </Typography>
        </div>
        <div className="flex items-center justify-between gap-8">
          <div className="flex flex-col justify-between">
            <span className="font-semibold">{Number(price) * count}₴</span>
            <span className="font-semibold text-accent-color line-through">{Number(oldPrice) * count}₴</span>
          </div>
          <div>1шт.</div>
        </div>
      </div>
    </div>
  );
};
