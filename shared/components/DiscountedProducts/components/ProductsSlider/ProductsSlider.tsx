import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/shared/ui/shadcn";

import { ProductCard } from "../ProductCard/ProductCard";

interface ProductsSliderProps {
  slider: Array<DiscountedProductSlide>;
}

export const ProductsSlider = ({ slider }: ProductsSliderProps) => {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {slider.map((slide) => (
          <CarouselItem key={slide.id} className="md:basis-1/2 lg:basis-1/3 ">
            <div className="p-1">
              <ProductCard {...slide} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
