import type { ComponentProps } from "react";
import * as React from "react";
import { useId } from "react";

import { Input } from "@/components/ui/input";

import styles from "./input-label.module.css";

interface Props extends ComponentProps<"input"> {
  text: string;
  error?: string;
}

export const InputLabel = ({ text, error, ...props }: Props) => {
  const id = useId();
  return (
    <label htmlFor={id} className="block flex flex-col gap-2">
      {text}
      <Input {...props} id={id} className={styles.inputField} />
      {error && <div className="text-red-500">{error}</div>}
    </label>
  );
};
