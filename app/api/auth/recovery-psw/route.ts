import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import type { JwtPayload } from "jsonwebtoken";
import jwt from "jsonwebtoken";

import { prisma } from "@/prisma/prisma-client";

interface DecodedToken extends JwtPayload {
  email: string;
}

export async function GET(req: NextRequest) {
  try {
    const code = req.nextUrl.searchParams.get("code");

    if (!code) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    const decoded: string | JwtPayload = jwt.verify(code, process.env.NEXTAUTH_SECRET ?? "Sekret") as DecodedToken;

    const user = await prisma.user.findFirst({ where: { email: decoded?.email } });

    if (!user) throw new Error("Неверный код подтверждения");

    return NextResponse.redirect(new URL(`/?recovery=${code}`, req.url));
  } catch (error) {
    console.error(error);
    console.log("[VERIFY_GET] Server error", error);
  }
}
