// "use client";

// import { Button } from "@/components/ui";
// import { Typography } from "../Typography/Typography";
// import { useState } from "react";

// const data = ["Все", "Собаки", "Кошки", "Птицы", "Грызуны"];
// export const DiscountedProducts = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handelActiveButton = (index: number) => {
//     setActiveIndex(index);
//   };
//   return (
//     <div>
//       <div className="flex items-center gap-16">
//         <Typography variant="title48_semibold" tag="h2">
//           Товары со скидкой
//         </Typography>
//         <ul className="flex items-center gap-4">
//           {data.map((button, index) => (
//             <li key={button}>
//               <Button onClick={() => handelActiveButton(index)} variant={`${activeIndex === index ? "default" : "secondary"}`}>
//                 {button}
//               </Button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

import Link from "next/link";

import { Button } from "@/components/ui";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

import { Typography } from "../Typography/Typography";

import { ProductCard } from "./components/ProductCard/ProductCard";
import { productsData } from "./DiscountedProducts.data";

interface DiscountedProductsProps {
  product: ProductsMenu;
}

export const DiscountedProducts = ({ product }: DiscountedProductsProps) => {
  return (
    <div>
      <div className="flex items-center gap-16 mb-12">
        <Typography variant="title48_semibold" tag="h2">
          Товары со скидкой
        </Typography>
        <ul className="flex items-center gap-4">
          {productsData.map((button) => (
            <li key={button.query}>
              <Link href={{ pathname: "/", query: { product: button.query } }}>
                <Button variant={button.query === product ? "default" : "secondary"}>{button.title}</Button>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Slider -------------------- */}
      <Carousel className="w-full">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 ">
              <div className="p-1">
                <ProductCard />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
