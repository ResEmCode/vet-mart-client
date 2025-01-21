import React from "react";

import { ProfileOrder } from "@/shared/components/ProfileOrder/ProfileOrder";
import { Typography } from "@/shared/ui/custom";

const OrderPage = () => {
  return (
    <>
      <Typography variant="title48_semibold" tag="h2" className="mb-4">
        Мои заказы
      </Typography>
      <div className="flex flex-col gap-5 mb-[40px]">
        <ProfileOrder order="Заказ No1" data="12.12.2022" status />
        <ProfileOrder order="Заказ No2" data="13.12.2022" status={false} />
        {/* <ProfileOrder order="Заказ No2" data="09.05.2024" status="Выполнен" /> */}
      </div>
    </>
  );
};

export default OrderPage;
