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
  variants: ProductVariant[];
  // favorite: boolean;
}

export const ProductCard = ({ name, id, variants }: ProductCardProps) => {
  const changeFavorite = useFavorites((state) => state.changeFavorite);
  const favorite = checkFavorite(variants[0].id);

  const onFavoriteProduct = () => {
    changeFavorite({
      name,
      id,
      variants,
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
        <p className="text-gray-400">{variants[0].weight}</p>
        <p className="text-gray-600 mb-4 font-medium">{variants[0].price} грн.</p>
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
