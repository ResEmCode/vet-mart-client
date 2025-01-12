import { cn } from "@/shared/lib/utils";
import styles from "./SkeletonLoader.module.css";
import { CSSProperties, ReactNode } from "react";

interface SkeletonProps {
  className?: string;
  width: number;
  height: number;
  children: ReactNode;
  backgroundColor: string;
  foregroundColor: string;
  speed: number;
}

interface SkeletonStylesTypes extends CSSProperties {
  "--width": string;
  "--height": string;
  "--skeleton-bg-color": string;
  "--skeleton-fg-color": string;
  "--animation-duration": string;
}

export const SkeletonLoader = ({ className, width, height, backgroundColor, foregroundColor, speed, children }: SkeletonProps) => {
  const steles: SkeletonStylesTypes = {
    "--width": `${width}px`,
    "--height": `${height}px`,
    "--skeleton-bg-color": `${backgroundColor}`,
    "--skeleton-fg-color": `${foregroundColor}`,
    "--animation-duration": `${speed}ms`,
  };
  return (
    <div className={cn(styles.skeleton, className)} style={steles}>
      {children}
    </div>
  );
};

interface SkeletonRectProps {
  className?: string;
  x: number;
  y: number;
  r: number;
  width: number;
  height: number;
}

SkeletonLoader.Rect = ({ className, x, y, r, width, height }: SkeletonRectProps) => {
  return (
    <div
      className={cn(styles.rect, className)}
      style={{
        maxWidth: `${width}px`,
        maxHeight: `${height}px`,
        borderRadius: `${r}px`,
        top: `${y}px`,
        left: `${x}px`,
      }}
    />
  );
};

interface SkeletonCircleProps {
  className?: string;
  x: number;
  y: number;
  r: number;
}

SkeletonLoader.Circle = ({ className, x, y, r }: SkeletonCircleProps) => {
  return (
    <div
      className={cn(styles.circle, className)}
      style={{
        maxWidth: `${r * 2}px`,
        maxHeight: `${r * 2}px`,
        top: `${y}px`,
        left: `${x}px`,
      }}
    />
  );
};
