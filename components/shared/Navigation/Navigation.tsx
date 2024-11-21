import React from "react";

import { Categories, NavLinks, TopBar } from "./components";

export const Navigation: React.FC = () => {
  return (
    <header className="p-8 max-w-[1408px] w-full flex flex-col items-start">
      <TopBar />
      <NavLinks />
      <Categories />
    </header>
  );
};
