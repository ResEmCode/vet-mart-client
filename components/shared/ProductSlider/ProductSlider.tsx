"use client";

import * as React from "react";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

import styles from "./ProductSlider.module.css";

const ImageVariants = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_77gcC33wPYvj-PxrU3aPZkEYA8T9dbNCUg&s",
  "https://www.smurfitkappa.com/-/m/images/spotlight-teaser-image-1250-x-914/pet-food-jpg.jpg?rev=ded9ab4508f948e9aaa04a4a6d12fad5",
  "https://cs10.pikabu.ru/post_img/2019/12/28/7/1577531889179623112.jpg",
  "https://memepedia.ru/wp-content/uploads/2023/01/kot-dingus-mem-360x270.jpg",
];

export const ProductSlider = () => {
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
          {ImageVariants.map((iamge, index) => (
            <CarouselItem key={index} className="pt-1 md:basis-1/3">
              <div className="p-1">
                <div>
                  <button
                    className={cn("border-[3px] border-transparent", {
                      [styles.active]: index === activeIndex,
                    })}
                    onClick={() => setActiveIndex(index)}
                  >
                    <img className="w-[100px] h-[100px] object-cover" src={iamge} alt="product" />
                  </button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div>
        <img className="w-[450px] h-[470px] object-cover" src={ImageVariants[activeIndex]} alt="" />
      </div>
    </>
  );
};
