"use server";

import jwt from "jsonwebtoken";
import { prisma } from "@/prisma/prisma-client";
import { sendResetPsw } from "../services";

export const resetPassword = async (email: string) => {
  try {
    const user = await prisma.user.findFirst({ where: { email } });
    console.log(user);
    if (!user) return { error: "Пользователь не найден", success: false };

    const token = jwt.sign(
      {
        email,
      },
      process.env.NEXTAUTH_SECRET ?? "Sekret",
      {
        expiresIn: "15m",
      },
    );
    await prisma.user.update({
      where: {
        email,
      },
      data: {
        resetPswLink: token,
      },
    });

    await sendResetPsw(email, token);

    return { error: null, success: true };
  } catch (error) {
    return { error, success: false };
  }
};
