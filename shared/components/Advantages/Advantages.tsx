import React from "react";

import { Typography } from "../../ui/custom/Typography/Typography";

import { CardAdvantages } from "./components";
import { ADVANTAGE_DATA } from "./Advantage.data";

import styles from "./Advantage.module.css";

export const Advantages = () => {
  return (
    <div className="my-[60px]">
      <Typography variant="title48_semibold" tag="h2" className="mb-[20px]">
        Почему мы?
      </Typography>
      <div className={styles.cards}>
        {ADVANTAGE_DATA.map((card) => (
          <CardAdvantages {...card} />
        ))}
      </div>
    </div>
  );
};
