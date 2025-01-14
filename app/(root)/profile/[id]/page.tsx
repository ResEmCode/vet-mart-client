"use client";

import React from "react";
import { signOut, useSession } from "next-auth/react";
import { LogOut } from "lucide-react";

import { Container } from "@/shared/ui/custom";

const ProfilePage = () => {
  const { data } = useSession();

  const onClickSignOut = async () => {
    await signOut({
      callbackUrl: "/",
    });
  };

  return (
    <Container>
      <div className="flex gap-1 justify-between items-start">
        <div>
          <img src={data?.user.image ?? "/images/user/image.png"} alt="profile" className="rounded-full object-cover  w-[120px] h-[120px] mb-2" />
          <span>{data?.user.name}</span>
        </div>
        <button onClick={onClickSignOut} className="p-2 bg-gray-300 rounded-[4px] flex items-center gap-1 hover:bg-gray-200">
          <LogOut width={24} className="text-gray-500" />
          <span className="text-gray-700 font-semibold">Выйти</span>
        </button>
      </div>
    </Container>
  );
};

export default ProfilePage;
