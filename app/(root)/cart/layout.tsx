import React from "react";

import { Container } from "@/shared/ui/custom";
import { CartOrderCounter } from "@/shared/components/CartOrder";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <Container className="flex justify-between gap-[40px]">
      <main>{children}</main>

      <CartOrderCounter />
    </Container>
  );
}
