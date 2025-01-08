"use server";

import { hashSync } from "bcrypt";
import jwt from "jsonwebtoken";

import { prisma } from "@/prisma/prisma-client";
import { sendRecoveryPsw, sendVerificationMail } from "@/server/services";

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

    // await sendEmail(
    //   createdUser.email,
    //   "Vet Market / 📝 Подтверждение регистрации",
    //   MailForm({
    //     code,
    //   }),
    // );
  } catch (err) {
    console.log("Error [CREATE_USER]", err);
    throw err;
  }
}

export const recoveryPassword = async (email: string) => {
  try {
    const user = await prisma.user.findFirst({ where: { email } });

    if (!user) throw new Error("Пользователь не найдет");

    const token = jwt.sign(
      {
        email,
      },
      "test",
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

    await sendRecoveryPsw(email, token);
  } catch (error) {
    console.log(error);
  }
};

export const resetPassword = async (newPassword: string, link: string) => {
  try {
    const decoded = jwt.verify(link, "test") as { email: string };

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
