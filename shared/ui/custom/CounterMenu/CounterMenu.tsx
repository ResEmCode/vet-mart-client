import { Minus, Plus } from "lucide-react";
import styles from "./CounterMenu.module.css";
import { cn } from "@/shared/lib/utils";
import { useCart } from "@/shared/store";

interface CounterMenuProps {
  maxCount: number;
  minCount: number;
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const CounterMenu = ({ maxCount, minCount, increment, decrement, count }: CounterMenuProps) => {


  return (
    <div className={styles.button_count}>
      <button className={cn(styles.button, styles.left_btn)} onClick={decrement} disabled={count <= minCount}>
        <Minus width={16} className={styles.icon} />
      </button>
      <span className={styles.count}>{count}</span>
      <button className={cn(styles.button, styles.right_btn)} onClick={increment} disabled={count >= maxCount}>
        <Plus width={16} className={styles.icon} />
      </button>
    </div>
  );
};
