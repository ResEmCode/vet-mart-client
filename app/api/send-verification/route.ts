import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import twilio from "twilio";

import { prisma } from "@/prisma/prisma-client";

const accoutSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_ACCOUNT_TOKEN;

const client = twilio(accoutSid, authToken);

export const POST = async (req: NextRequest) => {
  const { email, phone } = await req.json();
  try {
    const user = await prisma.user.findFirst({ where: { email } });

    if (!user) return NextResponse.json({ error: "Пользователь не найден" }, { status: 404 });

    const code = Math.floor(Math.random() * 10000)
      .toString()
      .padStart(4, "0");

    await prisma.verificationPhoneCode.create({
      data: {
        otp: code,
        phone,
        userId: user.id,
      },
    });

    const message = await client.messages.create({
      body: `Код подтверждения: ${code}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phone,
    });
    console.log("Message sent:", message);

    return NextResponse.json({ code, message: "Код отправлен" }, { status: 200 });
  } catch (error) {
    console.error("Error sending message:", error);
    throw new Error("Произошла ошибка при отправке смс");
  }
};
