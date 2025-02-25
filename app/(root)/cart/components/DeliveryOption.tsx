import React, { useState } from "react";

import { CheckboxGroup, Typography } from "@/shared/ui/custom";
import { Checkbox } from "@/shared/ui/shadcn";

export const DeliveryOption = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (value: string) => {
    setSelected(value === selected ? null : value);
  };
  return (
    <div className="bg-white p-6 w-full rounded-[16px]">
      <div className="flex flex-col gap-[30px]">
        <Typography variant="title24_semibold" tag="p">
          3. Способ доставки
        </Typography>

        <CheckboxGroup className="flex gap-3">
          <CheckboxGroup.Item title="Самовывоз">
            <Checkbox checked={selected === "Самовывоз"} onCheckedChange={() => handleSelect("Самовывоз")} />
          </CheckboxGroup.Item>
          <CheckboxGroup.Item title="Доставка">
            <Checkbox checked={selected === "Доставка"} onCheckedChange={() => handleSelect("Доставка")} />
          </CheckboxGroup.Item>
          <CheckboxGroup.Item title="Курьером">
            <Checkbox checked={selected === "Курьером"} onCheckedChange={() => handleSelect("Курьером")} />
          </CheckboxGroup.Item>
        </CheckboxGroup>
      </div>
    </div>
  );
};
