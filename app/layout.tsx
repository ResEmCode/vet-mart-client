import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Container, Footer, Navigation } from "@/shared/shared";

import "../styles/global.css";

const inter = Inter({ subsets: ["cyrillic"], variable: "--font-nunito", weight: ["400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "Главная",
  description: "Generated by create next app",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container>
          <Navigation />
          {children}
        </Container>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
