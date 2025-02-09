"use client";

import { Typography } from "@/shared/ui/custom";
import { Button } from "@/shared/ui/shadcn";
import { useState } from "react";
import { DiscountModal } from "../DiscountModal/DiscountModal";

export const DiscountHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-between gap-[20px] mb-[30px]">
      <Typography variant="paragraph20_regular" tag="h2">
        Скидки:
      </Typography>
      <Button variant="default" onClick={() => setIsOpen(true)}>
        Добавить скидку
      </Button>
      <DiscountModal isOpen={isOpen} closeModal={() => setIsOpen(false)} />
    </div>
  );
};
