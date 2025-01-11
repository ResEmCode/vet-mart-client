"use client";

import React, { useState } from "react";
import { LogoBlock } from "../LogoBlock/LogoBlock";

import { Catalog } from "../Catalog/Catalog";
import { InputIcon } from "@/shared/ui/custom";
import { ClearSvg, SearchSvg } from "@/shared/ui/icons";
import styles from "./Header.module.css";

export const Header = () => {
  // const [openDrawer, setOpenDrawer] = React.useState(false);

  // const { isAuthOpen, setIsAuthOpen } = useModalAuth();
  const [searchValue, setSearchValue] = useState("");

  const rendedIcon =
    searchValue.length > 0 ? (
      <button onClick={() => setSearchValue("")}>
        <ClearSvg className={styles.close_icon} />
      </button>
    ) : (
      <SearchSvg className={styles.icon} />
    );
  return (
    <>
      {/* {openDrawer && <Drawer closeDrawer={() => setOpenDrawer(false)} />}
      {isAuthOpen && <AuthForm closeModal={() => setIsAuthOpen(false)} />} */}

      <header className="flex items-center justify-between w-full gap-4">
        <LogoBlock />
        {/* <Input placeholder="Поиск товара..." className={styles.search} /> */}
        <InputIcon
          placeholder="Поиск товара..."
          className={styles.input}
          renderNextElement={() => rendedIcon}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Catalog />
      </header>
    </>
  );
};
