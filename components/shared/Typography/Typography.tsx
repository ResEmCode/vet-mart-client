import React from "react";
import clsx from "clsx";

import styles from "./Typography.module.css";

type Tag = "h1" | "h2" | "h3" | "p" | "span";

type TypographyVariant = "title48_semibold" | "title24_semibold" | "title18_semibold" | "title24_bold" | "paragraph15_medium" | "paragraph14_regular";

interface TypographyProps {
  tag: Tag;
  variant: TypographyVariant;
  children: React.ReactNode;
  className?: string;
}

const Typography = ({ tag, variant, children, className, ...props }: TypographyProps) => {
  const Component = tag;

  return (
    <Component className={clsx(styles[variant], className)} {...props}>
      {children}
    </Component>
  );
};

export { Typography };
