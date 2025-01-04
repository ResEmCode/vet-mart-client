"use client";

import { signOut, useSession } from "next-auth/react";
import React from "react";

const ProfilePage = () => {
  const { data } = useSession();

  const onClickSignOut = () => {
    signOut({
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
