"use client";

import * as React from "react";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, Button } from "@/shared/ui/shadcn";
import { cn } from "@/shared/lib/utils";

import styles from "./ProductSlider.module.css";

interface ProductSliderProps {
  images: string[];
}

export const ProductSlider = ({ images }: ProductSliderProps) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <>
      <Carousel
        opts={{
          align: "start",
        }}
        orientation="vertical"
        className="w-full max-w-xs h-[365px] text-center"
      >
        <CarouselContent className="-mt-1 h-[360px]">
          {images?.map((image, index) => (
            <CarouselItem key={image} className="pt-1 md:basis-1/3">
              <div className="p-1">
                <div>
                  <Button
                    variant={"outline"}
                    className={cn("border-[3px] border-transparent max-w-[120px] w-full h-full rounded-[4px] p-2", {
                      [styles.active]: index === activeIndex,
                    })}
                    onClick={() => setActiveIndex(index)}
                  >
                    <img className="w-[100px] h-[100px] object-cover" src={image} alt="product" />
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div>
        <img className="w-[450px] h-[470px] object-cover" src={images[activeIndex]} alt="" />
      </div>
    </>
  );
};
