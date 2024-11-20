import React from "react";

import { Categories } from "@/components/shared/Navigation/Categories";
import { NavLinks } from "@/components/shared/Navigation/NavLinks";
import { TopBar } from "@/components/shared/Navigation/TopBar";

export const Navigation: React.FC = () => {
  return (
    <header className="p-8 max-w-[1408px] w-full flex flex-col items-start">
      <TopBar />
      <NavLinks />
      <Categories />
    </header>
  );
};

export default Navigation;
