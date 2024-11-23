import React from "react";

import { Categories } from "./components/Categories/Categories";
import { NavLinks } from "./components/NavLinks/NavLinks";
import { TopBar } from "./components/TopBar/TopBar";

export const Navigation: React.FC = () => {
  return (
    <header className="p-8 max-w-[1408px] w-full flex flex-col items-start">
      <TopBar />
      <NavLinks />
      <Categories />
    </header>
  );
};
