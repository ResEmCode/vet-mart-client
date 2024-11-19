import { Typography } from "../Typography/Typography";

import styles from "./Category.module.css";

interface CategoryCardProps {
  title: string;
  text: string;
  url: string;
}

export const CategoryCard = ({ title, text, url }: CategoryCardProps) => {
  return (
    <li className={styles.inner}>
      <img src={url} alt="icon" className="w-20 h-20 rounded-full object-cover mb-2" />
      <Typography variant="title18_semibold" tag="h3">
        {title}
      </Typography>
      <p className="text-sm text-gray-300 text-center">{text}</p>
    </li>
  );
};
