"use client";

import { ComponentProps, forwardRef, ReactNode, useId } from "react";
import styles from "./InputIcon.module.css";
import { cn } from "@/shared/lib/utils";

interface InputIconProps extends ComponentProps<"input"> {
  renderPrevElement?: () => ReactNode;
  renderNextElement?: () => ReactNode;
  className?: string;
}

export const InputIcon = forwardRef<HTMLInputElement, InputIconProps>(({ renderPrevElement, renderNextElement, className, ...props }, ref) => {
  const id = useId();
  return (
    <label htmlFor={id} className={cn(styles.label, className)}>
      {renderPrevElement && renderPrevElement()}
      <input id={id} type="text" className={styles.input} ref={ref} {...props} />
      {renderNextElement && renderNextElement()}
    </label>
  );
});
