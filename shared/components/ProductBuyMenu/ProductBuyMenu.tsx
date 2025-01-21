"use client";

import { useState } from "react";

import { Button, Checkbox } from "@/shared/ui/shadcn";
import { cn } from "@/shared/lib/utils";

import { MenuRow } from "./components";
import { useCart } from "@/shared/store";
import { CounterMenu } from "@/shared/ui/custom";
import { useCartCount } from "../Cart/hooks";

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

interface ProductBuyMenuProps {
  title: string;
}

export const ProductBuyMenu = ({ title }: ProductBuyMenuProps) => {
  const [activePriceIndex, setActivePriceIndex] = useState(0);
  const addCart = useCart((state) => state.addCart);
  const { count, decrement, increment } = useCartCount(activePriceIndex);

  const onAddCart = () => {
    const cardObject = {
      title,
      id: activePriceIndex,
      price: packingVariants[activePriceIndex].payment,
      weight: packingVariants[activePriceIndex].weight,
    };

    addCart(cardObject);
  };

  return (
    <div className="flex flex-col gap-[30px]">
      <MenuRow title="Фасовка">
        <div className="flex items-center gap-8">
          {packingVariants.map((variant, index) => (
            <Button
              variant={"outline"}
              className={cn(" max-h-[65px] h-full flex flex-col border-[3px] p-2 rounded-[4px] border-transparent", {
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
          <Button variant={"link"}>Где забрать?</Button>
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
        {Number(count) >= 1 ? (
          <CounterMenu count={count} decrement={decrement} increment={increment} maxCount={10} minCount={1} />
        ) : (
          <Button variant="default" onClick={onAddCart} disabled={!packingVariants[activePriceIndex].isWarehouse}>
            Добавить в корзину
          </Button>
        )}
      </MenuRow>
    </div>
  );
};
