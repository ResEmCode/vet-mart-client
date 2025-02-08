"use client"

import { useState } from "react";

import { ModalLoadFile } from "@/shared/admin/components";
import { InputIcon } from "@/shared/ui/custom";
import { ClearSvg, SearchSvg } from "@/shared/ui/icons";
import { Button } from "@/shared/ui/shadcn";

import styles from "./Products.module.css";

export const Products = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isOpen, setIsOen] = useState(false);

  const rendedIcon =
    searchValue.length > 0 ? (
      <button onClick={() => setSearchValue("")}>
        <ClearSvg className={styles.close_icon} />
      </button>
    ) : (
      <SearchSvg className={styles.icon} />
    );

  return (
    <div>
      <div className="flex items-center justify-between">
        <InputIcon
          placeholder="Поиск товара..."
          className={styles.input}
          renderNextElement={() => rendedIcon}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <div className="flex items-center gap-[20px]">
          <Button variant="outline">Информация</Button>
          <Button variant="default" onClick={() => setIsOen(true)}>
            Добавить товары
          </Button>
        </div>
      </div>
      <ModalLoadFile isOpen={isOpen} onClose={setIsOen} />
    </div>
  );
};

