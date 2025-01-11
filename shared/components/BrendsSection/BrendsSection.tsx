import Image from "next/image";

import { Container } from "../Container/Container";

import styles from "./BrendsSection.module.css";

const data = ["/brends/optimeal.png", "/brends/gourmet.png", "/brends/clubpaws.png", "/brends/royalcanin.png", "/brends/proplan.png"];

export const BrendsSection = () => {
  return (
    <div className=" bg-white my-20">
      <Container>
        <div className="flex items-center justify-between">
          {data.map((brend, index) => (
            <div className={styles.card} key={index}>
              <Image src={brend} alt="brend" width={153} height={52} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
