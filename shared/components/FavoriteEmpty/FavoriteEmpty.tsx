import { Typography } from "@/shared/ui/custom";
import { Button } from "@/shared/ui/shadcn";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export const FavoriteEmpty = () => {
  return (
    <div className="h-[45vh] flex flex-col justify-center items-center gap-4">
      <Image src={"/images/cart/empty.png"} alt="emptyCart" width={100} height={100} />
      <div className="flex flex-col items-center gap-2 text-center">
        <Typography variant="title24_semibold" tag="h2">
          Список избранного пуст
        </Typography>
        <Typography color="subtitle" variant="paragraph16_medium" tag="p">
          Добавьте товар в избранное чтобы отобразить его здесь
        </Typography>
      </div>

      <Link href={"/"}>
        <Button variant={"default"} className="rounded-[6px] w-full">
          Вернуться назад
        </Button>
      </Link>
    </div>
  );
};
