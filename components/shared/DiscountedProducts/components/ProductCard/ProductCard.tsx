import { Typography } from "@/components/shared/Typography/Typography";
import { Button } from "@/components/ui";

interface ProductCardProps {
  title: string;
  weight: string;
  price: string;
  oldPrice: string;
}

export const ProductCard = ({ title, weight, price, oldPrice }: ProductCardProps) => {
  return (
    <div className="flex gap-2 max-w-[440px] bg-white p-4 rounded-sm">
      <div>
        <Typography tag="h2" variant="title24_semibold">
          {title}
        </Typography>
        <span className="text-gray-400 mb-2 inline-block">{weight}</span>
        <div className="mb-3">
          <p className="text-2xl">{price}</p>
          <p className="text-primary text-xl">
            <s>{oldPrice}</s>
          </p>
        </div>
        <Button variant="default">Смотреть товарі</Button>
      </div>
      <img src="/image.png" alt="food" className="w-48 h-48" />
    </div>
  );
};
