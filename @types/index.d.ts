type ProductsMenu = "all" | "dogs" | "cats" | "birds" | "rodents";

interface DiscountedProduct {
  title: string;
  query: ProductsMenu;
  slider: DiscountedProductSlide[];
}

interface DiscountedProductSlide {
  id: number;
  title: string;
  weight: string;
  price: string;
  oldPrice: string;
}
