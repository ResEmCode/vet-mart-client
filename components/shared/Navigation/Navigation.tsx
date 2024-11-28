import React from "react";

import { Categories, NavLinks, TopBar } from "./components";


export const Navigation: React.FC = () => {
  return (
    <header className="py-8 flex flex-col items-start gap-6">
      <TopBar />
      <NavLinks />
      <Categories />
    </header>
  );
};
