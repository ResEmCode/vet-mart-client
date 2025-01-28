import { Typography } from "@/shared/ui/custom";
import { getProductType } from "@/shared/utils/helpers";
import { ProductVariant } from "@prisma/client";

interface CharacteristicsProductProps {
  activeVariant: ProductVariant;
  country: string;
  productType: string;
}

export const CharacteristicsProduct = ({ activeVariant, country, productType }: CharacteristicsProductProps) => {
  const translateProductType = getProductType(productType);

  const characteristics = [
    {
      id: 1,
      title: "Артикул",
      value: `${activeVariant.article}`,
    },
    {
      id: 2,
      title: "Страна производства",
      value: `${country}`,
    },
    {
      id: 3,
      title: "Вес",
      value: ` ${activeVariant.count} ${activeVariant.unit}`,
    },
    {
      id: 4,
      title: "Тип",
      value: `${translateProductType}`,
    },
  ];

  return (
    <>
      <Typography variant="title24_bold" tag="h2">
        Характеристики
      </Typography>
      <ul className="flex flex-col gap-2 w-full">
        {characteristics.map((characteristic) => (
          <li key={characteristic.id} className="flex items-center justify-between">
            <span>{characteristic.title}</span>
            <span>{characteristic.value}</span>
          </li>
        ))}
      </ul>
    </>
  );
};
