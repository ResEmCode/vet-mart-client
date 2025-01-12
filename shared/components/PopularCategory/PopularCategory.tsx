import { CategoryCard } from "./components";
import { Typography } from "../../ui/custom/Typography/Typography";

import { popularCategories } from "./PopularCategory.data";

export const PopularCategory = () => {
  return (
    <div className="my-[60px]">
      <Typography variant="title48_semibold" tag="h2" className="mb-[20px]">
        Популярные категории
      </Typography>
      <ul className="flex items-center justify-between gap-2 ">
        {popularCategories.map((category) => (
          <CategoryCard key={category.id} {...category} />
        ))}
      </ul>
    </div>
  );
};
