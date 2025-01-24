import { Typography } from "@/shared/ui/custom/Typography/Typography";
import { Button } from "@/shared/ui/shadcn";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  title: string;
  weight: string;
  price: string;
  oldPrice: string;
}

export const ProductCard = ({ title, weight, price, oldPrice }: ProductCardProps) => {
  return (
    <div className={styles.product}>
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
      <img src="/images/products/image.png" alt="food" className="max-w-48 max-h-48" />
    </div>
  );
};
