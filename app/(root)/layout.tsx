import type { ReactNode } from "react";

import { Footer, Navigation } from "@/shared/components";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="wrapper">
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
