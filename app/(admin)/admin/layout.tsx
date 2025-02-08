"use client";

import type { ReactNode } from "react";
import Link from "next/link";

import { AsideBar } from "@/shared/admin/components";
import { LogoBlock } from "@/shared/components/Navigation/components";
import { Container } from "@/shared/ui/custom";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Container>
      <div className="mb-[40px] py-[20px] flex justify-between items-center gap-[20px]">
        <LogoBlock />
        <div>
          <Link href="/" className="text-accent-color underline">
            Вернуться на сайт
          </Link>
        </div>
      </div>
      <div className="flex gap-[30px] items-start">
        <AsideBar />
        <div className="p-[20px] w-full bg-white">{children}</div>
      </div>
    </Container>
  );
};

export default AdminLayout;
