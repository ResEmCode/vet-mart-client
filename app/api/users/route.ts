import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { prisma } from "@/prisma/prisma-client";
import type { User, Prisma } from "@prisma/client";

export async function GET() {
  const users: User[] = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(req: NextRequest) {
  const data: unknown = await req.json();

  if (typeof data === "object" && data !== null && "email" in data && "password" in data) {
    const userData: Prisma.UserCreateInput = data as Prisma.UserCreateInput;

    const user: User = await prisma.user.create({
      data: userData,
    });

    return NextResponse.json(user);
  }

  return NextResponse.json({ error: "Invalid input" }, { status: 400 });
}
