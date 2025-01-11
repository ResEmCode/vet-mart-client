import type { ComponentProps } from "react";
import * as React from "react";
import { useId } from "react";

import { Input } from "@/shared/ui/shadcn";

import styles from "./InputLabel.module.css";

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
