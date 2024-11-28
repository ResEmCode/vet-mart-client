import React from "react";

import { Carousel } from "@/components/ui";
import { CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

import { Typography } from "../Typography/Typography";

import { ReviewsCard } from "./components/ReviewsCard";

export const Reviews = () => {
  return (
    <div className="flex flex-col gap-10 pt-12">
      <Typography tag="h2" variant="title48_semibold">
        Отзывы про магазин
      </Typography>
      <Carousel className="pb-12">
        <CarouselContent>
          <CarouselItem className="basis-1/3">
            <ReviewsCard />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <ReviewsCard />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <ReviewsCard />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
