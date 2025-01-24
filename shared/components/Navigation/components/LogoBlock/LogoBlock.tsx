import { Typography } from "@/shared/ui/custom/Typography/Typography";
import Link from "next/link";
import styles from "./LogoBlock.module.css";

export const LogoBlock = () => {
  return (
    <div className={styles.logo}>
      <Link href="/">
        <Typography variant="title36_semibold" tag="h2">
          <span>Вет</span>
          <span className="text-accent-color">Маркет</span>
        </Typography>
      </Link>
      <Typography variant="paragraph14_medium" tag="p" className={styles.subtitle}>
        Ветеринарный магазин в Виннице с 2022 года
      </Typography>
    </div>
  );
};
