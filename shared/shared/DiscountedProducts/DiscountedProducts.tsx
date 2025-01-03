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

import { Typography } from "../Typography/Typography";

import { ProductsMenu, ProductsSlider } from "./components";

interface DiscountedProductsProps {
  product: DiscountedProduct;
}

export const DiscountedProducts = ({ product }: DiscountedProductsProps) => {
  return (
    <div className="my-24" id="discounted-products">
      <div className="flex items-center gap-16 mb-12">
        <Typography variant="title48_semibold" tag="h2">
          Товары со скидкой
        </Typography>
        <ProductsMenu productQuery={product.query} />
      </div>

      <ProductsSlider slider={product.slider} />
    </div>
  );
};
