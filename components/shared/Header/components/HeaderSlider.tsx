"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export const HeaderSlider = () => {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full h-full overflow-hidden rounded-lg flex"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="flex w-full h-full">
        {Array.from({ length: 3 }).map((_, index) => (
          <CarouselItem key={index} className="flex-shrink-0 w-full h-full ">
            <div className="flex items-center justify-center w-full h-full bg-white rounded-md ">
              <div className="text-lg font-semibold text-gray-800">Item {index + 1}</div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 transform bg-gray-300 rounded-full shadow-md hover:bg-gray-400">←</CarouselPrevious>
      <CarouselNext className="absolute right-4 transform  bg-gray-300 rounded-full shadow-md hover:bg-gray-400">→</CarouselNext>
    </Carousel>
  );
};
