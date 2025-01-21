import { Typography } from "@/shared/ui/custom/Typography/Typography";
import Link from "next/link";

export const LogoBlock = () => {
  return (
    <div className="flex items-center gap-[32px] justify-between max-w-[400px]">
      <Link href="/">
        <Typography variant="title36_semibold" tag="h2">
          <span>Вет</span>
          <span className="text-accent-color">Маркет</span>
        </Typography>
      </Link>
      <Typography variant="paragraph14_medium" tag="p" className="max-w-[200px]">
        Ветеринарный магазин в Виннице с 2022 года
      </Typography>
    </div>
  );
};
