"use client";

import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";

import { Modal } from "@/components/ui";

import { NewPswForm } from "../Auth/components";
import { useModalResetPws } from "../Auth/store";

import { Categories, NavLinks, TopBar } from "./components";

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
      <Categories />
      <Modal isOpen={isResetPwsOpen} closeModal={() => setIsResetPwsOpen(false)}>
        <NewPswForm link={link} />
      </Modal>
    </header>
  );
};
