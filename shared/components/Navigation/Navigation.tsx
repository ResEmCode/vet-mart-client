"use client";

import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { Categories, Header, MenuBar } from "./components";

import { Container } from "../../ui/custom/Container/Container";

import { useActiveForm } from "../Auth/store";
import { useAuthModal } from "./store";


export const Navigation: React.FC = () => {
  const searchParams = useSearchParams();

  const setActiveForm = useActiveForm((state) => state.setActiveForm);
  const setIsAuthOpen = useAuthModal((state) => state.setIsAuthOpen);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      if (searchParams.has("recovery")) {
        setActiveForm("new-password");
        setIsAuthOpen(true);
        router.replace("/");
      }
    })();
  }, []);

  useEffect(() => {}, []);

  useEffect(() => {}, []);

  return (
    <Container className="mb-[40px]">

      <div className="my-4 flex flex-col items-start gap-6">
        <Header />
        <MenuBar />
        <Categories />
      </div>
    </Container>
  );
};
