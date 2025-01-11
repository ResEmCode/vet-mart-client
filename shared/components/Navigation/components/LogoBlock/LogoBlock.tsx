import { Typography } from "@/shared/components/Typography/Typography";

export const LogoBlock = () => {
  return (
    <div className="flex items-center gap-[32px] justify-between max-w-[400px]">
      <Typography variant="title36_semibold" tag="h2">
        <span>Вет</span>
        <span className="text-accent-color">Маркет</span>
      </Typography>
      <Typography variant="paragraph14_medium" tag="p" className="max-w-[200px]">
        Ветеринарный магазин в Виннице с 2022 года
      </Typography>
    </div>
  );
};
