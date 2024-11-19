import Link from "next/link";

import { Button } from "@/components/ui";

import { productsData } from "../../DiscountedProducts.data";

interface ProductsMenuProps {
  productQuery: ProductsMenu;
}

export const ProductsMenu = ({ productQuery }: ProductsMenuProps) => {
  return (
    <ul className="flex items-center gap-4">
      {productsData.map((link) => (
        <li key={link.query}>
          <Link href={{ pathname: "/", query: { product: link.query }, hash: "discounted-products" }}>
            <Button variant={link.query === productQuery ? "default" : "secondary"}>{link.title}</Button>
          </Link>
        </li>
      ))}
    </ul>
  );
};
