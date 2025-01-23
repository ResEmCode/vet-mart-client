"use client";

import React from "react";
import { X } from "lucide-react";

import styles from "./CartCard.module.css";

import { useCart } from "@/shared/store";
import { CounterMenu, Typography } from "@/shared/ui/custom";
import { useCartCount } from "../../hooks";

interface DrawerCardProps {
  title: string;
  weight: string;
  price: string;
  oldPrice: string;
  id: number;
}

export const CartCard = ({ title, weight, price, oldPrice, id }: DrawerCardProps) => {
  const removeCard = useCart((state) => state.removeCart);

  const { count, decrement, increment } = useCartCount(Number(id));

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
            {oldPrice && <span className="font-semibold text-accent-color line-through">{Number(oldPrice) * count}₴</span>}
          </div>
          <CounterMenu count={count} decrement={decrement} increment={increment} maxCount={10} minCount={1} />
        </div>
      </div>
      <button className={styles.btn_close} onClick={() => removeCard(id)}>
        <X width={16} height={16} className={styles.icon_close} />
      </button>
    </div>
  );
};
