"use client";

import React from "react";
import Image from "next/image";

import { Typography } from "@/shared/shared";
import { Button } from "@/shared/ui";
import { useCountChange } from "@/shared/hooks/useCountChange";

interface ProductCardProps {
  name: string;
  price: number;
  imageUrl: string;
}

const ProductCard = ({ name, price, imageUrl }: ProductCardProps) => {
  const { count, increment, decrement, handlePrice } = useCountChange();

  return (
    <div className="flex gap-2 bg-white p-4 rounded-sm w-full p-7">
      <div className="flex flex-col gap-4">
        <Typography className="w-[156px]" variant="title18_semibold" tag="h2">
          {name}
        </Typography>
        <Typography variant="paragraph14_regular" tag="span" color="subtitle">
          вес
        </Typography>
        <div className="flex items-center gap-4">
          <div>
            <Button className="bg-orange-500 text-white p-2" onClick={decrement}>
              -
            </Button>
            <Typography className="px-2 py-1" variant="paragraph14_regular" tag="span">
              {count}
            </Typography>
            <Button className="bg-orange-500 text-white p-2" onClick={increment}>
              +
            </Button>
          </div>
          <Typography variant="title18_semibold" tag="h2">
            {handlePrice(price)} ₴
          </Typography>
        </div>
        <Button>Смотреть товары</Button>
      </div>
      <Image src={imageUrl} alt="image" width={100} height={200} />
    </div>
  );
};

export default ProductCard;
