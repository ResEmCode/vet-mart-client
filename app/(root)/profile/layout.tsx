"use client";

import { ProfileSidebar } from "@/shared/components/ProfileSidebar/ProfileSidebar";
import { Container } from "@/shared/ui/custom";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container className="flex gap-[30px]">
      <ProfileSidebar />

      <main>{children}</main>
    </Container>
  );
};

export default ProfileLayout;
