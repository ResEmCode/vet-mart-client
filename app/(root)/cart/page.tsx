"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { CartOrderCard } from "@/shared/components/CartOrder/components/CartOrderCard/CartOrderCard";
import { useCart } from "@/shared/store";
import { Container, Typography } from "@/shared/ui/custom";
import { Button } from "@/shared/ui/shadcn";

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
          <div className="h-[45vh] flex flex-col justify-center items-center gap-4">
            <Image src="/images/cart/empty.png" alt="emptyCart" width={100} height={100} />
            <div className="flex flex-col items-center gap-2">
              <Typography variant="title24_semibold" tag="h2">
                Корзина пуста
              </Typography>
              <Typography color="subtitle" variant="paragraph16_medium" tag="p">
                Добавьте товар в корзину чтобы оформить заказ
              </Typography>
            </div>
            <Link href="/">
              <Button variant="default" className="rounded-[6px] w-full">
                Вернуться назад
              </Button>
            </Link>
          </div>
        )}
      </div>
    </Container>
  );
};

export default CartPage;
