import { Typography } from "@/components/shared/Typography/Typography";
import { Button } from "@/components/ui";

export const ProductCard = () => {
  return (
    <div className="flex gap-2 max-w-[440px]">
      <div>
        <Typography tag="h2" variant="title24_semibold">
          Сухий корм для котів happy pet
        </Typography>
        <span className="text-gray-400 mb-2 inline-block">10 000г</span>
        <div className="mb-3">
          <p className="text-2xl">329 ₴</p>
          <p className="text-primary text-xl">
            <s>529 ₴</s>
          </p>
        </div>
        <Button variant="default">Смотреть товарі</Button>
      </div>
      <img src="/image.png" alt="food" className="w-48 h-48" />
    </div>
  );
};
