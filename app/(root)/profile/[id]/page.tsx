"use client";

import React from "react";
import { signOut, useSession } from "next-auth/react";

const ProfilePage = () => {
  const { data } = useSession();

  const onClickSignOut = async () => {
    await signOut({
      callbackUrl: "/",
    });
  };

  return (
    <div>
      <span>{data?.user.name}</span>
      <button onClick={onClickSignOut}>выйти</button>
    </div>
  );
};

export default ProfilePage;
