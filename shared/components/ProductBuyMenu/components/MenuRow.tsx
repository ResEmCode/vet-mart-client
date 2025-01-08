import type { ReactNode } from "react";

import { cn } from "@/shared/lib/utils";

interface MenuRowProps {
  children: ReactNode;
  title: string;
  className?: string;
}

export const MenuRow = ({ title, children, className }: MenuRowProps) => {
  return (
    <div className={cn("flex items-center gap-[50px]", className)}>
      <span className="font-medium max-w-[100px] w-full">{title}</span>
      {children}
    </div>
  );
};
