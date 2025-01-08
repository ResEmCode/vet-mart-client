import React from "react";

import { HeaderSlider } from "@/shared/components/Header/components/HeaderSlider";

import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.inner}>
      <div className="w-full bg-white rounded-[24px]">
        <HeaderSlider />
      </div>
      <div>
        <div className="max-w-[700px] max-h-[188px]">
          <img src="/image.png" alt="slider-1" />
        </div>
        <div className="max-w-[700px] max-h-[188px]">
          <img src="/image.png" alt="slider-2" />
        </div>
      </div>
    </div>
  );
};
