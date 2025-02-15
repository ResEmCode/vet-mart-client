"use client";

import React from "react";

import { CartOrderEmpty } from "@/shared/components/CartOrder";
import { useCart } from "@/shared/store";
import { Container } from "@/shared/ui/custom";

import AdressOption from "./components/AdressOption";
import CartOption from "./components/CartOption";
import { DeliveryOption } from "./components/DeliveryOption";
import { PersonalOption } from "./components/PersonalOption";

const CartPage = () => {
  const cart = useCart((state) => state.cart);

  return (
    <Container className="mb-20">
      <div className="flex flex-col gap-[40px]">
        {cart.length > 0 ? (
          <>
            <CartOption />
            <PersonalOption />
            <DeliveryOption />
            <AdressOption />
          </>
        ) : (
          <CartOrderEmpty />
        )}
      </div>
    </Container>
  );
};

export default CartPage;
