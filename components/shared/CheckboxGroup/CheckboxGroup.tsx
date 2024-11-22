import type { ComponentProps, ReactNode } from "react";

import { Typography } from "../Typography/Typography";

interface CheckboxGroupProps {
  children: ReactNode;
  title?: string;
}

export const CheckboxGroup = ({ children, title }: CheckboxGroupProps) => {
  return (
    <div className="flex flex-col gap-4">
      {title && (
        <Typography tag="h3" variant="title16_bold">
          {title}
        </Typography>
      )}
      <ul className="flex flex-col gap-3">{children}</ul>
    </div>
  );
};

interface CheckboxGroupItemProps extends ComponentProps<"label"> {
  children: ReactNode;
  title: string;
}
CheckboxGroup.Item = ({ children, title, ...props }: CheckboxGroupItemProps) => {
  return (
    <li>
      <label className="flex items-center gap-2" {...props}>
        {children}
        <span>{title}</span>
      </label>
    </li>
  );
};
