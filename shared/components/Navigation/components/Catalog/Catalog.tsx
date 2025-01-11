import styles from "./Catalog.module.css";
import { CATALOG_DATA } from "./Catalog.data";
import { CartSvg, LikeSvg, ProfileSvg } from "@/shared/ui/icons";

export const Catalog = () => {
  return (
    <div className="flex gap-2 ml-[35px]">
      <button className={styles.button}>
        <CartSvg className={styles.icon} />
      </button>
      <button className={styles.button}>
        <LikeSvg className={styles.icon} />
      </button>
      <button className={styles.button}>
        <ProfileSvg className={styles.icon} />
      </button>
    </div>
  );
};
