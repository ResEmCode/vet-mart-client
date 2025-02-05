import { Copy, Trash2 } from "lucide-react";
import styles from "./MediaImgCard.tsx.module.css";

export const MediaImgCard = () => {
  return (
    <li className={styles.item}>
      <img className={styles.img} src="https://avatars.mds.yandex.net/i?id=dc00519bb3380ffcf8e619a0e3a07edc_l-5858460-images-thumbs&n=13" alt="cat" />
      <button className={styles.trash_btn}>
        <Trash2 />
      </button>
      <div className={styles.content}>
        <h3>Кошка !"323</h3>
        <button>
          <Copy />
        </button>
      </div>
    </li>
  );
};
