"use client";

import React from "react";

import { CartOrderCard, CartOrderEmpty } from "@/shared/components/CartOrder";
import { useCart } from "@/shared/store";
import { Container, Typography } from "@/shared/ui/custom";

const CartPage = () => {
  const cart = useCart((state) => state.cart);

  return (
    <Container>
      <div className="p-6 bg-white flex flex-col gap-[40px] rounded-[16px]">
        <div className="flex flex-col gap-3">
          <Typography variant="title36_semibold" tag="h2">
            Корзина
          </Typography>

          {/* Проверить работоспособность корзины при более 5 товаров */}

          <Typography variant="paragraph14_regular" color="subtitle" tag="p">
            {cart.length > 0 ? `В корзине ${cart.length} ${cart.length === 1 ? "товар" : "товара"}` : ""}
          </Typography>
        </div>
        {cart.length > 0 ? (
          cart.map((item) => <CartOrderCard key={item.id} id={item.id} title={item.title} price={item.price} count={item.count} weight={item.weight} />)
        ) : (
          <CartOrderEmpty />
        )}
      </div>
    </Container>
  );
};

export default CartPage;
