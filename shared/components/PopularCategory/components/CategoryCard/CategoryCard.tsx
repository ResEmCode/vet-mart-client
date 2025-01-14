import { Typography } from "../../../../ui/custom/Typography/Typography";

import styles from "./Category.module.css";

interface CategoryCardProps {
  title: string;
  text: string;
  url: string;
}

export const CategoryCard = ({ title, text, url }: CategoryCardProps) => {
  return (
    <li className={styles.item}>
      <img src={url} alt="icon" className="w-20 h-20 rounded-full object-cover mb-2" />
      <div className="h-[60px] text-center flex flex-col gap-1">
        <Typography variant="title18_semibold" tag="h3">
          {title}
        </Typography>
        <Typography variant="paragraph14_regular" tag="span" color="subtitle">
          {text}
        </Typography>
      </div>
    </li>
  );
};
