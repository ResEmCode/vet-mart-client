import type { ComponentProps } from "react";
import * as React from "react";
import { useId } from "react";

import { Input, Variant } from "@/shared/ui/shadcn";

import styles from "./InputLabel.module.css";
import clsx from "clsx";

interface Props extends ComponentProps<"input"> {
  text: string;
  error?: string;
  variant?: Variant;
}

export const InputLabel = ({ text, error, variant = "default", ...props }: Props) => {
  const id = useId();
  return (
    <label htmlFor={id} className="block flex flex-col gap-2">
      {text}
      <Input {...props} variant={variant} id={id} className={clsx(styles.inputField)} />
      {error && <div className="text-red-500">{error}</div>}
    </label>
  );
};
