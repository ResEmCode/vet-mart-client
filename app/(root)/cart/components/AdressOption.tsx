import React from "react";

import { Typography } from "@/shared/ui/custom";
import { Input, Textarea } from "@/shared/ui/shadcn";

const AdressOption = () => {
  return (
    <div className="p-6 bg-white flex flex-col gap-[40px] rounded-[16px]">
      <Typography variant="title24_semibold" tag="p">
        4. Адрес доставки
      </Typography>
      <Input variant="outline" placeholder="м. Винница" />
      <Textarea className="h-[150px]" placeholder="Комментарий к заказу" />
    </div>
  );
};

export default AdressOption;
