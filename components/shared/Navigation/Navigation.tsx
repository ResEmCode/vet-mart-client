import React from "react";

import { Categories } from "@/components/shared/Navigation/components/Categories/Categories";
import { NavLinks } from "@/components/shared/Navigation/components/NavLinks/NavLinks";
import { TopBar } from "@/components/shared/Navigation/components/TopBar/TopBar";

export const Navigation: React.FC = () => {
  return (
    <header className="py-8 flex flex-col items-start gap-6">
      <TopBar />
      <NavLinks />
      <Categories />
    </header>
  );
};
