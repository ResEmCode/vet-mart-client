import { Button } from "@/shared/ui/shadcn";
import { Typography } from "../../ui/custom/Typography/Typography";
import Link from "next/link";

interface ProductCardProps {
  name: string;
  weight: string;
  id: number;
}

export const ProductCard = ({ name, weight, id }: ProductCardProps) => {
  return (
    <div className="max-w-[320px] rounded-[24px] p-[20px] bg-white flex items-center gap-2">
      <div className="max-w-[160px]">
        <Typography variant="title18_semibold" tag="h2" className="mb-1">
          {name}
        </Typography>
        <p className="text-gray-400 mb-2">{weight}</p>
        <Link href={`/product/${id}`}>Смотреть товарі</Link>
      </div>
      <div>
        <img src="./image.png" alt="image" className="max-w-[110px] object-cover" />
      </div>
    </div>
  );
};
