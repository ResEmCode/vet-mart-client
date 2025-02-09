"use client";

import { InputLabel } from "@/shared/ui/custom";
import { Button } from "@/shared/ui/shadcn";
import { FormEvent, useEffect, useState } from "react";

interface DiscountEditFormProps {
  discount: number;
  onUpdate: (value: string) => void;
}

export const DiscountEditForm = ({ discount, onUpdate }: DiscountEditFormProps) => {
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    if (discount >= 0) {
      setValue(discount.toString());
    }
  }, [discount]);

  return (
    <form className="flex flex-col gap-[20px]">
      <InputLabel placeholder="введите новую скидку..." type="text" text="Новая скидка" value={value} onChange={(e) => setValue(e.target.value)} />
      <Button type="button" variant={"default"} className="w-full rounded-[4px]" onClick={() => onUpdate(value)}>
        Изменить скидку
      </Button>
    </form>
  );
};
