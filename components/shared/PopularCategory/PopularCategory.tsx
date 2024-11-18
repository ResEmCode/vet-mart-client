import { CategoryCard } from "../CategoryCard/CategoryCard";
import { Typography } from "../Typography/Typography";

import { popularCategories } from "./PopularCategory.data";

export const PopularCategory = () => {
  return (
    <div>
      <Typography variant="title48_semibold" tag="h2" className="mb-8">
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
