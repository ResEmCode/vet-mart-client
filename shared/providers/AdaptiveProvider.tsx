"use client";
import React, { ReactNode } from "react";

interface AdaptiveProviderProps {
  children: ReactNode;
}

export const AdaptiveProvider = ({ children }: AdaptiveProviderProps) => {
  //   useEffect(() => {
  //     const handleResize = () => {
  //       setWindowWidth(window.innerWidth);
  //     };

  //     window.addEventListener("resize", handleResize);

  //     // Удаляем обработчик события при размонтировании компонента
  //     return () => window.removeEventListener("resize", handleResize);
  //   }, []);
  return <>{children}</>;
};
