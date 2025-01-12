import { cn } from "@/shared/lib/utils";
import styles from "./Spiner.module.css";

interface SpinnerProps {
  className?: string;
}
export const Spinner = ({ className }: SpinnerProps) => {
  return <div className={cn(styles.spinner, className)} />;
};

export default Spinner;
