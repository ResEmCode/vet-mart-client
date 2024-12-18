"use client";

import React from "react";
import Image from "next/image";
import { X } from "lucide-react";

import { Button } from "@/components/ui";
import { useCountChange } from "@/hooks/useCountChange";

import { Typography } from "../../Typography/Typography";

interface DrawerCardProps {
  title: string;
  weight: string;
  price: string;
  oldPrice: string;
}

export const DrawerCard = ({ title, weight, price, oldPrice }: DrawerCardProps) => {
  const { count, increment, decrement, handlePrice } = useCountChange();

  return (
    <div className="py-5 bg-white">
      <div className="flex items-center justify-between">
        <Image src="/image.png" alt="image" width={100} height={100} />
        <div className="flex flex-col gap-2">
          <Typography variant="title16_bold" tag="h2" className="max-w-[200px]">
            {title}
          </Typography>
          <Typography variant="paragraph12_regular" tag="span" color="subtitle">
            Вага: {weight} г
          </Typography>
          <div className="flex items-center gap-10">
            <div className="flex flex-col">
              <Typography variant="paragraph20_regular" tag="span">
                {handlePrice(price)} ₴
              </Typography>
              <Typography variant="title18_semibold" tag="span" color="accent">
                {oldPrice} ₴
              </Typography>
            </div>
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
          </div>
        </div>
        <div>
          <X className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};
