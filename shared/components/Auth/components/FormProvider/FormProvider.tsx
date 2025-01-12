import { Typography } from "@/shared/ui/custom";
import { ReactNode } from "react";

interface FormProviderProps {
  children: ReactNode;
  title?: string;
}

export const FormProvider = ({ children, title }: FormProviderProps) => {
  return (
    <div>
      <Typography tag="h2" variant="title24_bold" className="mb-[20px]">
        {title}
      </Typography>
      <div>{children}</div>
    </div>
  );
};
