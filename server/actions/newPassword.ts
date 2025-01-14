"use server";

import { hashSync } from "bcrypt";
import jwt from "jsonwebtoken";

import { prisma } from "@/prisma/prisma-client";

export const newPassword = async (newPassword: string, link: string) => {
  try {
    const decoded = jwt.verify(link, process.env.NEXTAUTH_SECRET ?? "Sekret") as { email: string };

    const { email } = decoded;

    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) throw new Error("Ошибка смены пароля");

    const newHashPsw = hashSync(newPassword, 10);

    await prisma.user.update({
      where: {
        email,
      },
      data: {
        password: newHashPsw,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
