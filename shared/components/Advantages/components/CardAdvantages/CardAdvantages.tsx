import React from "react";
import styles from "./CardAdvantages.module.css"

import { Typography } from "@/shared/ui/custom/Typography/Typography";

interface CardAdvantagesProps {
  title: string;
  text: string;
  imageUrl: string;
}

export const CardAdvantages = ({ title, text, imageUrl }: CardAdvantagesProps) => {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={title} className="w-[95px] h-[95px]" />
      <Typography color="accent" className={styles.title} tag="h3" variant="title24_bold">
        {title}
      </Typography>
      <Typography color="subtitle" className="text-sm text-center mt-2" tag="span" variant="paragraph15_medium">
        {text}
      </Typography>
    </div>
  );
};
