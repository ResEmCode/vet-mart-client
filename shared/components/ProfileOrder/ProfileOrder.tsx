import { Typography } from "@/shared/ui/custom";
import { CompleteSvg } from "@/shared/ui/icons";
import React from "react";
import { CardOrder } from "./components/CardOrder/CardOrder";

interface ProfileOrderProps {
  order: string;
  data: string;
  status: string;
}

export const ProfileOrder = ({ order, data, status }: ProfileOrderProps) => {
  return (
    <div className="flex justify-between items-center bg-white px-6 py-4">
      <div className="flex gap-5">
        <Typography variant="paragraph12_regular" tag="p">
          {order}
        </Typography>
        <Typography variant="paragraph12_regular" tag="p">
          {data}
        </Typography>
      </div>
      <div className="max-w-[600px] w-full">
        <CardOrder title="Картошка" weight="1кг" price="5" oldPrice="7" />
      </div>
      <div className="flex items-center gap-3">
        <CompleteSvg />
        <Typography variant="paragraph12_regular" tag="p" color="complete">
          {status}
        </Typography>
      </div>
    </div>
  );
};
