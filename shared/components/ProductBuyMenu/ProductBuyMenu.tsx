"use client";

import { useState } from "react";

import { Button, Checkbox } from "@/shared/ui/shadcn";
import { cn } from "@/shared/lib/utils";

import { MenuRow } from "./components";

const packingVariants = [
  {
    id: 1,
    weight: 500,
    payment: 299,
    isWarehouse: true,
  },
  {
    id: 2,
    weight: 1000,
    payment: 499,
    isWarehouse: true,
  },
  {
    id: 3,
    weight: 10000,
    payment: 1000,
    isWarehouse: false,
  },
];
export const ProductBuyMenu = () => {
  const [activePriceIndex, setActivePriceIndex] = useState(0);
  return (
    <div className="flex flex-col gap-[30px]">
      <MenuRow title="Фасовка">
        <div className="flex items-center gap-8">
          {packingVariants.map((variant, index) => (
            <Button
              className={cn("flex flex-col border-[3px] p-2 rounded-[20px] border-transparent", {
                "border-accent-color": index === activePriceIndex,
              })}
              key={variant.id}
              onClick={() => setActivePriceIndex(index)}
            >
              <span className="font-medium text-subtitle">{variant.weight}г.</span>
              <span className="font-medium">{variant.payment} грн.</span>
            </Button>
          ))}
        </div>
      </MenuRow>
      <MenuRow title="Доставка">
        <div className="text-[14px] w-full font-medium text-subtitle">в день заказа курьером, от {packingVariants[1].payment} грн</div>
      </MenuRow>
      <MenuRow title="Самовывоз">
        <div>
          <span className="text-[14px] w-full text-subtitle mr-2">сегодня в нашем магазине</span>
          <Button className="text-[14px] border-b-2 text-accent-color border-accent">Где забрать?</Button>
        </div>
      </MenuRow>
      <hr />
      <MenuRow title="Наличие">
        <div className="flex items-center gap-2">
          {packingVariants[activePriceIndex].isWarehouse ? (
            <>
              <Checkbox checked />
              <div className="text-[14px]">На складе</div>
            </>
          ) : (
            <div className="text-[14px]">Отсуствует</div>
          )}
        </div>
      </MenuRow>
      <MenuRow title={`${packingVariants[activePriceIndex].payment} грн.`} className="text-[20px] text-accent-color font-medium">
        <Button variant="default">Добавить в корзину</Button>
      </MenuRow>
    </div>
  );
};
