interface DiscountedProduct {
  title: string;
  slider: DiscountedProductSlide[];
}

interface DiscountedProductSlide {
  id: number;
  title: string;
  weight: string;
  price: string;
  oldPrice: string;
}
