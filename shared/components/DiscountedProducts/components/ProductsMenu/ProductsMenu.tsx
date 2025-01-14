import { Button } from "@/shared/ui/shadcn";

import { productsData } from "../../DiscountedProducts.data";
import { cn } from "@/shared/lib/utils";

interface ProductsMenuProps {
  title: string;
  onClick: (index: number) => void;
}

export const ProductsMenu = ({ title, onClick }: ProductsMenuProps) => {
  return (
    <ul className="flex items-center gap-4">
      {productsData.map((item, index) => (
        <li key={item.title}>
          <Button
            onClick={() => onClick(index)}
            variant={item.title === title ? "active" : "primary"}
          >
            {item.title}
          </Button>
        </li>
      ))}
    </ul>
  );
};
