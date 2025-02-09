import styles from "./Discount.module.css";
import Link from "next/link";
import { ExternalLink, Pencil, Trash2 } from "lucide-react";
interface DiscountCardProps {
  discount: number;
  articles: number[];
  id: number;
  onDelete: (productId: string) => void;
  onEdit: (id: number) => void;
}

export const DiscountCard = ({ discount, articles, id, onDelete, onEdit }: DiscountCardProps) => {
  const renderArticles = () => articles.join(",");

  return (
    <li className={styles.card}>
      <span>{discount}%</span>
      <div className="text-center">{renderArticles()}</div>
      <div className="flex justify-between gap-2">
        <Link href={`/product/${id}?article=${articles[0]}`} className="inline-block text-center">
          <ExternalLink />
        </Link>
        <button onClick={() => onEdit(id)}>
          <Pencil />
        </button>
        <button onClick={() => onDelete(id.toString())}>
          <Trash2 />
        </button>
      </div>
    </li>
  );
};
