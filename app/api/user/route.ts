import { NextResponse } from "next/server";

import { prisma } from "@/prisma/prisma-client";

export async function POST(req: Request) {
  try {
    const { fullName, id } = await req.json();

    const updateUser = await prisma.user.update({
      where: {
        id: Number(id),
      },
      data: {
        fullName,
      },
    });
    return NextResponse.json(updateUser);
  } catch (error) {
    console.error(error);
  }
}
