import { NextResponse } from "next/server";

import { prisma } from "@/prisma/prisma-client";

export async function GET() {
  const data = await prisma.filters.findMany();
  return NextResponse.json(data);
}
