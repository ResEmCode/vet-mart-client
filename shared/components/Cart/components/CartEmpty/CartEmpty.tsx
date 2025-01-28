import { useCartDrawer } from "@/shared/components/Navigation/store";
import { Typography } from "@/shared/ui/custom";
import { Button } from "@/shared/ui/shadcn";
import Image from "next/image";
import Link from "next/link";

export const CartEmpty = () => {
  const { isDarwerOpen, setIsDrawerOpen } = useCartDrawer();
  return (
    <div className="h-[90vh] flex flex-col justify-center items-center gap-4">
      <Image src={"/images/cart/empty.png"} alt="emptyCart" width={100} height={100} />
      <div className="flex flex-col items-center gap-2">
        <Typography variant="title24_semibold" tag="h2">
          Корзина пустая
        </Typography>
        <Typography color="subtitle" variant="paragraph16_medium" tag="p">
          Добавьте товар в корзину чтобы оформить заказ
        </Typography>
      </div>

      <Button onClick={() => setIsDrawerOpen(false)} variant={"default"} className="rounded-[6px] w-full">
        Вернуться назад
      </Button>
    </div>
  );
};
