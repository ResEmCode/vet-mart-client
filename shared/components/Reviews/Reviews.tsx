import React from "react";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/shared/ui/shadcn";

import { Typography } from "../../ui/custom/Typography/Typography";

import { ReviewsCard } from "./components/ReviewsCard";

export const Reviews = () => {
  return (
    <div className="my-[60px]">
      <Typography tag="h2" variant="title48_semibold" className="mb-[20px]">
        Отзывы про магазин
      </Typography>
      <Carousel>
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
