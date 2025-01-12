"use server"

import { prisma } from "@/prisma/prisma-client";
import { sendVerificationMail } from "../services";
import { hashSync } from "bcrypt";

export async function registerUser(body: { email: string; fullName: string; password: string }) {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
      },
    });

    if (user) {
      throw new Error("Пользователь уже существует");
    }

    const createdUser = await prisma.user.create({
      data: {
        fullName: body.fullName,
        email: body.email,
        password: hashSync(body.password, 10),
      },
    });

    const code = Math.floor(100000 + Math.random() * 900000).toString();

    await prisma.verificationCode.create({
      data: {
        code,
        userId: createdUser.id,
      },
    });

    await sendVerificationMail(createdUser.email, code);
  } catch (err) {
    console.log("Error [CREATE_USER]", err);
    throw err;
  }
}
