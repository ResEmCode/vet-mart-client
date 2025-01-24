"use client";

import React from "react";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/shared/ui/shadcn";

export const InformationSlider = () => {
  const items = [
    { id: "item-1", imageUrl: "/images/products/image.png", description: "Description 1" },
    { id: "item-2", imageUrl: "/images/products/image.png", description: "Description 2" },
    { id: "item-3", imageUrl: "/images/products/image.png", description: "Description 3" },
  ];

  return (
    <Carousel className="w-full max-w-[540px] m-auto">
      <CarouselContent>
        {items.map((item) => (
          <CarouselItem className="flex justify-center" key={item.id}>
            <img src={item.imageUrl} alt="" />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious variant={"primary"} className="p-0 max-xl:left-2" />
      <CarouselNext variant={"primary"} className="p-0 max-xl:right-2" />
    </Carousel>
  );
};
