"use client";

import { useState } from "react";

import { Button, Checkbox } from "@/shared/ui/shadcn";
import { cn } from "@/shared/lib/utils";

import { MenuRow } from "./components";
import { useCart } from "@/shared/store";
import { CounterMenu } from "@/shared/ui/custom";
import { useCartCount } from "../Cart/hooks";
import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation";
import { ProductVariant } from "@prisma/client";

interface ProductBuyMenuProps {
  title: string;
  variants: ProductVariant[];
  // currentId: number,
  id: number;
  activeVariant: ProductVariant;
}

export const ProductBuyMenu = ({ title, variants, id, activeVariant }: ProductBuyMenuProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  // const article = Number(searchParams.get("article"));

  const [activeVariantIndex, setActiveVariantIndex] = useState<number>(activeVariant.article);

  const addCart = useCart((state) => state.addCart);
  const { count, decrement, increment } = useCartCount(activeVariantIndex);

  const onAddCart = () => {
    const cardObject = {
      title,
      id: activeVariantIndex,
      price: activeVariant?.price,
      weight: activeVariant?.count,
    };

    addCart(cardObject);
  };

  const onClickBtn = (index: number) => {
    const newArticle = variants[index].id;
    setActiveVariantIndex(newArticle);
    router.replace(`http://localhost:3000/product/${id}?article=${newArticle}`);
  };

  return (
    <div className="flex flex-col gap-[30px]">
      <MenuRow title="Фасовка">
        <div className="flex items-center gap-8">
          {variants.map((variant, index) => (
            <Button
              variant={"outline"}
              className={cn(" max-h-[65px] h-full flex flex-col border-[3px] p-2 rounded-[4px] border-transparent", {
                "border-accent-color": variants[index].id === activeVariantIndex,
              })}
              key={variant.id}
              onClick={() => onClickBtn(index)}
            >
              <span className="font-medium text-subtitle">
                {variant.count} {variant.unit}
              </span>
              <span className="font-medium">
                {variant.price} {variant.currency}
              </span>
            </Button>
          ))}
        </div>
      </MenuRow>
      <MenuRow title="Доставка">
        <div className="text-[14px] w-full font-medium text-subtitle">
          в день заказа курьером, от {activeVariant?.price} {activeVariant?.currency}
        </div>
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
          {activeVariant?.available ? (
            <>
              <Checkbox checked />
              <div className="text-[14px]">На складе</div>
            </>
          ) : (
            <div className="text-[14px]">Отсуствует</div>
          )}
        </div>
      </MenuRow>
      <MenuRow title={`${activeVariant?.price} ${activeVariant?.currency}`} className="text-[20px] text-accent-color font-medium">
        {Number(count) >= 1 ? (
          <CounterMenu count={count} decrement={decrement} increment={increment} maxCount={10} minCount={1} />
        ) : (
          <Button variant="default" onClick={onAddCart} disabled={!activeVariant?.available}>
            Добавить в корзину
          </Button>
        )}
      </MenuRow>
    </div>
  );
};
