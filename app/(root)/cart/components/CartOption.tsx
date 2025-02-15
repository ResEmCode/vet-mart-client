import React from "react";

import { CartOrderCard } from "@/shared/components/CartOrder";
import { useCart } from "@/shared/store";
import { Typography } from "@/shared/ui/custom";

const CartOption = () => {
  const { cart } = useCart((state) => state);
  return (
    <div className="p-6 bg-white flex flex-col gap-[40px] rounded-[16px]">
      <div className="flex flex-col gap-3">
        <Typography variant="title24_semibold" tag="h2">
          1. Корзина
        </Typography>

        <Typography variant="paragraph14_regular" color="subtitle" tag="p">
          {cart.length > 0 ? `В корзине ${cart.length} ${cart.length === 1 ? "товар" : "товара"}` : ""}
        </Typography>
      </div>
      {cart.length > 0 &&
        cart.map((item) => <CartOrderCard key={item.id} id={item.id} title={item.title} price={item.price} count={item.count} weight={item.weight} />)}
    </div>
  );
};

export default CartOption;
