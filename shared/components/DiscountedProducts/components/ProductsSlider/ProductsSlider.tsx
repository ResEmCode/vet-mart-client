import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/shared/ui/shadcn";

import { ProductCard } from "../ProductCard/ProductCard";
import { ProductSliderTypes } from "../../DiscountedProducts.data";
import styles from "./ProductSlider.module.css";

interface ProductsSliderProps {
  slider: Array<ProductSliderTypes>;
}

export const ProductsSlider = ({ slider }: ProductsSliderProps) => {
  return (
    <Carousel className="w-full m-auto">
      <CarouselContent>
        {slider.map((slide) => (
          <CarouselItem key={slide.id} className={styles.slider}>
            <div className={styles.card}>
              <ProductCard {...slide} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious variant={"primary"} className="p-0" />
      <CarouselNext variant={"primary"} className="p-0" />
    </Carousel>
  );
};
