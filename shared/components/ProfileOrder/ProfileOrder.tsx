import { Badge, Typography, VariantsBadge } from "@/shared/ui/custom";
import { CompleteSvg } from "@/shared/ui/icons";
import React from "react";
import { CardOrder } from "./components/CardOrder/CardOrder";
import { CheckCheck, CircleX } from "lucide-react";
import styles from "./ProfileOrder.module.css";

interface ProfileOrderProps {
  order: string;
  data: string;
  status: boolean;
}

export const ProfileOrder = ({ order, data, status }: ProfileOrderProps) => {
  return (
    <div className={styles.data}>
      <div className="max-w-[240px] w-full">
        <div className="flex items-center gap-1 mb-[12px]">
          <Typography variant="title16_bold" tag="p" className="mb-[4px]">
            {order}
          </Typography>
          <Typography variant="paragraph14_medium" tag="p" color="subtitle">
            {data}
          </Typography>
        </div>

        {status ? <Badge variant="success" text="Выполнен" icon={<CheckCheck />} /> : <Badge variant="error" text="Отменён" icon={<CircleX />} />}
      </div>

      <ul className="flex gap-4 flex-wrap">
        <CardOrder title="Картошка" weight="1кг" price="500" oldPrice="700" count={1} />
        <CardOrder title="Картошка" weight="1кг" price="200" oldPrice="700" count={3} />
        <CardOrder title="Картошка" weight="1кг" price="200" oldPrice="700" count={3} />
        <CardOrder title="Картошка" weight="1кг" price="200" oldPrice="700" count={3} />
      </ul>
      {/* <CardOrder title="Картошка" weight="1кг" price="5" oldPrice="7" /> */}
      {/* <div className="max-w-[600px] w-full">
        <CardOrder title="Картошка" weight="1кг" price="5" oldPrice="7" />
      </div> */}

      {/* <CompleteSvg /> */}
      {/* <Typography variant="paragraph12_regular" tag="p" color="complete">
          {status}
        </Typography> */}
    </div>
  );
};
