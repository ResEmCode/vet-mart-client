"use client";

import React from "react";
import { Minus, Plus, X } from "lucide-react";

import styles from "./CartCard.module.css";
import { Typography } from "../../../ui/custom/Typography/Typography";
import { cn } from "@/shared/lib/utils";
import { useCount } from "../hooks";

interface DrawerCardProps {
  title: string;
  weight: string;
  price: string;
  oldPrice: string;
}

export const CartCard = ({ title, weight, price, oldPrice }: DrawerCardProps) => {
  const { count, increment, decrement } = useCount();

  return (
    <div className={styles.card}>
      <img src="/images/products/image.png" alt="images" className="max-w-[100px] w-full" />
      <div className="max-w-[220px] w-full">
        <div className="mb-[20px]">
          <Typography tag="h2" variant="title16_semibold" className="mb[12px]">
            {title}
          </Typography>
          <p className="text-gray-400 text-[14px]">Вага: {weight}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-semibold">{Number(price) * count}₴</span>
            <span className="font-semibold text-accent-color line-through">{Number(oldPrice) * count}₴</span>
          </div>
          <div className={styles.button_count}>
            <button className={cn(styles.button, styles.left_btn)} onClick={decrement} disabled={count === 1}>
              <Minus width={16} className={styles.icon} />
            </button>
            <span className={styles.count}>{count}</span>
            <button className={cn(styles.button, styles.right_btn)} onClick={increment} disabled={count === 10}>
              <Plus width={16} className={styles.icon} />
            </button>
          </div>
        </div>
      </div>
      <button className={styles.btn_close}>
        <X width={16} height={16} className={styles.icon_close} />
      </button>
    </div>
  );
};
