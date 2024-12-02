"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export const HeaderSlider = () => {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  const items = [
    { id: "item-1", name: "Item 1", description: "Description 1" },
    { id: "item-2", name: "Item 2", description: "Description 2" },
    { id: "item-3", name: "Item 3", description: "Description 3" },
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full h-full overflow-hidden rounded-lg flex"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="flex w-full h-full">
        {items.map((item) => (
          <CarouselItem key={item.id} className="flex-shrink-0 w-full h-full ">
            <div className="flex items-center justify-center w-full h-full bg-white rounded-md ">
              <div className="text-lg font-semibold text-gray-800">{item.name}</div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 transform bg-gray-300 rounded-full shadow-md hover:bg-gray-400">←</CarouselPrevious>
      <CarouselNext className="absolute right-4 transform  bg-gray-300 rounded-full shadow-md hover:bg-gray-400">→</CarouselNext>
    </Carousel>
  );
};
