
import { Container } from "../../ui/custom/Container/Container";

import styles from "./BrendsSection.module.css";

const data = [
  "/images/brends/optimeal.png",
  "/images/brends/gourmet.png",
  "/images/brends/clubpaws.png",
  "/images/brends/royalcanin.png",
  "/images/brends/proplan.png",
];

export const BrendsSection = () => {
  return (
    <div className=" bg-white my-20">
      <Container>
        <div className="flex items-center justify-between">
          {data.map((brend, index) => (
            <div className={styles.card} key={index}>
              <img src={brend} alt="brend" className="w-[150px] h-[52px]" />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
