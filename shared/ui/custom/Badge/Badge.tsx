import { cn } from "@/shared/lib/utils";
import styles from "./Badge.module.css";
import { ReactNode } from "react";

export type VariantsBadge = "default" | "success" | "error";

interface BadgeProps {
  variant: VariantsBadge;
  className?: string;
  text: string;
  icon?: ReactNode;
}

export const Badge = ({ variant, className, text, icon }: BadgeProps) => {
  return (
    <div className={cn(styles.badge, className, styles[variant], icon && styles.flex)}>
      {icon && <span>{icon}</span>}
      <span> {text}</span>
    </div>
  );
};
