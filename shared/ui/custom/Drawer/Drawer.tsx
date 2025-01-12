
import { X } from "lucide-react";
import styles from "./Drawer.module.css";
import { cn } from "@/shared/lib/utils";
import { ReactNode } from "react";
import { Typography } from "../Typography/Typography";

interface DrawerProps {
  closeDrawer: () => void;
  isOpen?: boolean;
  title: string;
  className?: string;
  classNameBody?: string;
  children: ReactNode;
}

export const Drawer = ({ closeDrawer, isOpen = false, title, className, classNameBody, children }: DrawerProps) => {
  return (
    <div className={cn(styles.window, className, { [styles.active]: isOpen })} onClick={closeDrawer}>
      <div className={cn(styles.body, classNameBody)} onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-[20px]">
          <Typography variant="title36_semibold" tag="h2">
            {title}
          </Typography>
          <button onClick={closeDrawer}>
            <X className="cursor-pointer hover:text-gray-500" />
          </button>
        </div>
        <div className="overflow-y-auto h-full">{children}</div>
      </div>
    </div>
  );
};
