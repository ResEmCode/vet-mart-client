"use client";

import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";

import { Categories, Header, MenuBar } from "./components";
import { useModalResetPws } from "../Auth/store";
import { Container } from "../Container/Container";
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
    <Container className="mb-[40px]">
      <div className="my-4 flex flex-col items-start gap-6">
        <Header />
        <MenuBar />
        <Categories />
        {/* <Modal isOpen={isResetPwsOpen} closeModal={() => setIsResetPwsOpen(false)}>
          <NewPswForm link={link} />
        </Modal> */}
      </div>
    </Container>
  );
};
