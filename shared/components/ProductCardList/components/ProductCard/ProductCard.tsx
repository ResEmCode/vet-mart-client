import { Button } from "@/shared/ui/shadcn";
import { Typography } from "../../../../ui/custom/Typography/Typography";
import Link from "next/link";
import { ProductVariant } from "@prisma/client";

interface ProductCardProps {
  name: string;
  id: number;
  variants: ProductVariant[];
}

export const ProductCard = ({ name, id, variants }: ProductCardProps) => {
  return (
    <div className="max-w-[320px] rounded-[24px] p-[20px] bg-white flex items-center gap-2">
      <div className="max-w-[160px]">
        <Typography variant="title18_semibold" tag="h2" className="mb-1">
          {name}
        </Typography>
        <p className="text-gray-400 mb-4">{variants[0].weight}</p>
        <Link className="bg-accent-color rounded-full py-2 px-4 text-white text-[14px]" href={`/product/${id}`}>
          Смотреть товарі
        </Link>
      </div>
      <div>
        <img src="./images/products/image.png" alt="image" className="max-w-[110px] object-cover" />
      </div>
    </div>
  );
};
