import React from "react";

import { ProfileOrder } from "@/shared/components/ProfileOrder/ProfileOrder";

const OrderPage = () => {
  return (
    <div className="flex flex-col gap-5">
      <ProfileOrder order="Заказ No1" data="12.12.2022" status="Выполнен" />
      <ProfileOrder order="Заказ No2" data="09.05.2024" status="Выполнен" />
    </div>
  );
};

export default OrderPage;
