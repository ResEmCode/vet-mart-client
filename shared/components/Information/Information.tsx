import React from "react";

// import { HeaderSlider } from "@/shared/components/Header/components/HeaderSlider";

import styles from "./Information.module.css";
import { cn } from "@/shared/lib/utils";
import { InformationSlider } from "./components";

export const Information = () => {
  return (
    <div className={styles.inner}>
      <div className={styles.slider_block}>
        <InformationSlider />
      </div>
      <div className={styles.items}>
        <div className={styles.item}>Курьер по области</div>
        <div className={styles.item}>Консультация по ветпрепоратам</div>
      </div>
    </div>
  );
};
