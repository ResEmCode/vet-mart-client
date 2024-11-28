"use client";

import React from "react";
import Image from "next/image";

import { Typography } from "@/components/shared";
import { Button } from "@/components/ui";
import { useCountChange } from "@/hooks/useCountChange";

interface ProductCardProps {
  title: string;
  weight: string;
  price: string;
}

const ProductCard = ({ title, weight, price }: ProductCardProps) => {
  const { count, increment, decrement } = useCountChange();

  return (
    <div className="flex gap-2 bg-white p-4 rounded-sm w-full p-7">
      <div className="flex flex-col gap-4">
        <Typography className="w-[156px]" variant="title18_semibold" tag="h2">
          {title}
        </Typography>
        <Typography variant="paragraph14_regular" tag="span" color="subtitle">
          {weight}
        </Typography>
        <div className="flex items-center gap-4">
          <div>
            <button className="bg-orange-500 text-white p-2" onClick={decrement}>
              -
            </button>
            <Typography className="px-2 py-1" variant="paragraph14_regular" tag="span">
              {count}
            </Typography>
            <button className="bg-orange-500 text-white p-2" onClick={increment}>
              +
            </button>
          </div>
          <Typography variant="title18_semibold" tag="h2">
            {price}
          </Typography>
        </div>
        <Button>Смотреть товары</Button>
      </div>
      <Image src="/image.png" alt="image" width={130} height={130} />
    </div>
  );
};

export default ProductCard;
