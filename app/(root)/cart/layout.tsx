import React from "react";

import CartOrderCounter from "@/shared/components/CartOrder/components/CartOrderCounter/CartOrderCounter";
import { Container } from "@/shared/ui/custom";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <Container className="flex justify-between gap-[40px]">
      <main>{children}</main>

      <CartOrderCounter />
    </Container>
  );
}
