import React from "react";
import clsx from "clsx";

import styles from "./Typography.module.css";

type Tag = "h1" | "h2" | "h3" | "p" | "span";

type TypographyVariant = "title48_semibold" | "title24_semibold" | "title18_semibold" | "title24_bold" | "paragraph15_medium" | "paragraph14_regular";

type TypographyVariantColor = "default" | "accent" | "primary" | "subtitle";

interface TypographyProps {
  tag: Tag;
  variant: TypographyVariant;
  color?: TypographyVariantColor;
  children: React.ReactNode;
  className?: string;
}

const Typography = ({ tag, variant, color = "default", children, className, ...props }: TypographyProps) => {
  const Component = tag;

  return (
    <Component className={clsx(styles[variant], styles[color], className)} {...props}>
      {children}
    </Component>
  );
};

export { Typography };
