import { SkeletonLoader } from "@/shared/ui/loaders";

export const ProductCardSkeleton = () => {
  return (
    <SkeletonLoader width={320} height={200} backgroundColor="#e7e3e3" foregroundColor="#F7F6F6" speed={1100}>
      <SkeletonLoader.Rect height={30} width={160} x={20} y={20} r={4} />
      <SkeletonLoader.Rect height={16} width={90} x={20} y={60} r={4} />
      <SkeletonLoader.Rect height={30} width={160} x={20} y={100} r={200} />
      <SkeletonLoader.Rect height={120} width={120} x={200} y={15} r={4} />
    </SkeletonLoader>
  );
};
