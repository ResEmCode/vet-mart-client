import React from "react";
import Image from "next/image";

import { Typography } from "@/shared/components/Typography/Typography";

interface AdvantagesProps {
  id: number;
  title: string;
  text: string;
  imageUrl: string;
}

const data: AdvantagesProps[] = [
  {
    id: 1,
    title: "Доставка по области",
    text: "от 500 ₴ бесплатно",
    imageUrl: "/advantages/delivery.png",
  },
  {
    id: 2,
    title: "Консультация",
    text: "Поможем подобрать нужные ветпрепараты, корм и т.д.",
    imageUrl: "/advantages/consultaion.png",
  },
  {
    id: 3,
    title: "Заказ нужного вам товара",
    text: "Мы привезем вам то, что нужно!",
    imageUrl: "/advantages/offer.png",
  },
  {
    id: 4,
    title: "Выгоднее чем у других",
    text: "Наша стоимость ниже чем у других зоомагазинов",
    imageUrl: "/advantages/profit.png",
  },
];

export const CardAdvantages = () => {
  return (
    <div className="flex justify-center items-center gap-10">
      {data.map((card) => (
        <div key={card.id} className="rounded-sm shadow-md bg-white flex flex-col justify-center items-center max-w-[330px] w-full p-[50px] h-[220px]">
          <Image src={card.imageUrl} alt={card.title} width={95} height={95} />
          <Typography color="accent" className="text-lg font-bold text-center mt-4" tag="h3" variant="title24_bold">
            {card.title}
          </Typography>
          <Typography color="subtitle" className="text-sm text-center mt-2" tag="span" variant="paragraph15_medium">
            {card.text}
          </Typography>
        </div>
      ))}
    </div>
  );
};
