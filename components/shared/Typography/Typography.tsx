import React from "react";
import styles from "./Typography.module.css";
import { cn } from "@/lib/utils";
import clsx from "clsx";

type tag = "h1" | "h2" | "h3" | "p" | "span";

type TypographyVariant = "title48_semibold" | "title18_semibold" | "title24_bold" | "paragraph15_medium" | "paragraph14_regular";

interface TypographyProps {
  tag: tag;
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

export default Typography;
