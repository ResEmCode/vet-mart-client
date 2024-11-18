import Image from "next/image";
import styles from "./BrendsSection.module.css";

const data = ["/brends/optimeal.png", "/brends/gourmet.png", "/brends/clubpaws.png", "/brends/royalcanin.png", "/brends/proplan.png"];

export const BrendsSection = () => {
  return (
    <div className="flex items-center justify-between my-20">
      {data.map((dat) => (
        <div className={styles.card}>
          <Image src={dat} alt="brend" width={153} height={52} />
        </div>
      ))}
    </div>
  );
};
