import React from "react";

import Categories from "./Categories";
import NavLinks from "./NavLinks";
import TopBar from "./TopBar";

import styles from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <header className={styles.header}>
      <TopBar />
      <NavLinks />
      <Categories />
    </header>
  );
};

export default Navigation;
