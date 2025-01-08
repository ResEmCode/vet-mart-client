import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

import { prisma } from "@/prisma/prisma-client";

export async function GET(req: NextRequest) {
  try {
    const code = req.nextUrl.searchParams.get("code");

    if (!code) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    const decoded = jwt.verify(code, "test") as { email: string };

    const user = await prisma.user.findFirst({ where: { email: decoded?.email } });

    if (!user) throw new Error("Неверный код подтверждения");

    return NextResponse.redirect(new URL(`/?recovery=${code}`, req.url));

    // const verificationCode = await prisma.verificationCode.findFirst({
    //   where: {
    //     code,
    //   },
    // });

    // if (!verificationCode) {
    //   return NextResponse.json({ error: "Неверный код" }, { status: 400 });
    // }

    // await prisma.user.update({
    //   where: {
    //     id: Number(verificationCode.userId),
    //   },
    //   data: {
    //     verified: new Date(),
    //   },
    // });

    // await prisma.verificationCode.delete({
    //   where: {
    //     id: verificationCode.id,
    //   },
    // });

    // return NextResponse.redirect(new URL("/?verified", req.url));
  } catch (error) {
    console.error(error);
    console.log("[VERIFY_GET] Server error", error);
  }
}
