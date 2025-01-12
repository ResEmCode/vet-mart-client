"use client";

import type { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
// import NextTopLoader from "nextjs-toploader";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  return (
    <SessionProvider>

      <div>{children}</div>
    </SessionProvider>
  );
};
