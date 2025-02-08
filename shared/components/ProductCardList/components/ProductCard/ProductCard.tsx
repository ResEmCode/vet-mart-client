import { Button } from "@/shared/ui/shadcn";
import { Typography } from "../../../../ui/custom/Typography/Typography";
import Link from "next/link";
import { ProductVariant } from "@prisma/client";
import styles from "./ProductCard.module.css";
import { LikeSvg } from "@/shared/ui/icons";
import { cn } from "@/shared/lib/utils";
import { useFavorites } from "@/shared/store";
import { checkFavorite } from "../../utils/checkFavorite";

interface ProductCardProps {
  name: string;
  id: number;
  price: number;
  image: string;
  productId: number;
  count: number;
  unit: string;
}

export const ProductCard = ({ name, id, price, image, productId, count, unit }: ProductCardProps) => {
  const changeFavorite = useFavorites((state) => state.changeFavorite);
  const favorite = checkFavorite(id);

  const onFavoriteProduct = () => {
    changeFavorite({
      name,
      id,
    });
  };

  return (
    <div className={styles.card}>
      <button className={styles.favorite} onClick={onFavoriteProduct}>
        <LikeSvg className={cn(styles.icon, favorite && styles.active)} />
      </button>
      <div className="max-w-[160px]">
        <Typography variant="title18_semibold" tag="h2" className="mb-1">
          {name}
        </Typography>
        <p className="text-gray-400">
          {count} {unit}
        </p>
        <p className="text-gray-600 mb-4 font-medium">{price} грн.</p>
        <Link className="bg-accent-color rounded-full py-2 px-4 text-white text-[14px]" href={`/product/${productId}?article=${id}`}>
          Смотреть товарі
        </Link>
      </div>
      <div>
        <img src={image} alt="image" className="max-w-[110px] object-cover" />
      </div>
    </div>
  );
};
