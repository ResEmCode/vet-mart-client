"use client";

import { useCart } from "@/shared/store";
import { CheckboxGroup, Typography } from "@/shared/ui/custom";
import { Button, Checkbox } from "@/shared/ui/shadcn";
import React from "react";
import { usePriceCounter } from "../../hooks/usePriceCounter";

export const CartOrderCounter = () => {
  const { price, discount, totalPrice } = usePriceCounter();

  return (
    <div className="max-w-[350px] max-h-[300px] w-full p-6 bg-white rounded-[16px]">
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-5">
          <div className="flex justify-between">
            <Typography color="subtitle" variant="paragraph16_medium" tag="p">
              Товары, 2 шт.
            </Typography>
            <Typography color="subtitle" variant="paragraph16_medium" tag="p">
              {price} ₴
            </Typography>
          </div>
          <div className="flex justify-between">
            <Typography color="subtitle" variant="paragraph16_medium" tag="p">
              Моя скидка
            </Typography>
            <Typography color="subtitle" variant="paragraph16_medium" tag="p">
              {discount} ₴
            </Typography>
          </div>
          <div className="flex justify-between">
            <Typography variant="title24_semibold" tag="h2">
              Итого
            </Typography>
            <Typography variant="title24_semibold" tag="h2">
              {totalPrice} ₴
            </Typography>
          </div>
        </div>
        <div>
          <Button className="w-full" size={"huge"}>
            Заказать
          </Button>
        </div>
        <div>
          <CheckboxGroup className="flex gap-3">
            <CheckboxGroup.Item title="Я соглашаюсь с правилами пользования сайта">
              <Checkbox />
            </CheckboxGroup.Item>
          </CheckboxGroup>
        </div>
      </div>
    </div>
  );
};
