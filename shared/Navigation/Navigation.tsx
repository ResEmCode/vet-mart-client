"use client";

import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";

import { NewPswForm } from "../components/Auth/components";
import { useModalResetPws } from "../components/Auth/store";
import { CategoriesModal, Modal } from "@/shared/ui";
import { NavLinks, TopBar } from ".";

export const Navigation: React.FC = () => {
  const searchParams = useSearchParams();

  const { setIsResetPwsOpen, isResetPwsOpen } = useModalResetPws();

  useEffect(() => {
    if (searchParams.has("recovery")) {
      setIsResetPwsOpen(true);
    }
  }, []);

  const link = searchParams.get("recovery");

  return (
    <header className="py-8 flex flex-col items-start gap-6">
      <TopBar />
      <NavLinks />
      <CategoriesModal />
      <Modal isOpen={isResetPwsOpen} closeModal={() => setIsResetPwsOpen(false)}>
        <NewPswForm link={link} />
      </Modal>
    </header>
  );
};
