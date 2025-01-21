"use client";

import React from "react";

import { Container } from "@/shared/ui/custom";

import PersonalPage from "./personal-data/page";

const ProfilePage = () => {
  return (
    <Container className="flex gap-[100px]">
      <PersonalPage />
    </Container>
  );
};

export default ProfilePage;
