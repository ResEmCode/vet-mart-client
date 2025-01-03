import { Typography } from "../Typography/Typography";

import styles from "./Category.module.css";

interface CategoryCardProps {
  title: string;
  text: string;
  url: string;
}

export const CategoryCard = ({ title, text }: CategoryCardProps) => {
  return (
    <li className={styles.inner}>
      <img src="./image.png" alt="icon" className="w-20 h-20 rounded-full object-cover mb-2" />
      <Typography variant="title18_semibold" tag="h3" className="text-center">
        {title}
      </Typography>
      <Typography variant="paragraph14_regular" tag="span" color="subtitle" className="text-center">
        {text}
      </Typography>
    </li>
  );
};
