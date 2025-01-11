import { NextResponse } from "next/server";

import { prisma } from "@/prisma/prisma-client";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const paramsObject: Record<string, string | { in: string[] }> = {};
  searchParams.forEach((value, key) => {
    paramsObject[key] = value.includes(",") ? { in: value.split(",") } : value;
  });

  delete paramsObject?.type;

  console.log(paramsObject);

  const products = await prisma.product.findMany({
    include: {
      variants: true,
    },
    where: {
      variants: {
        some: paramsObject,
      },
    },
  });

  return NextResponse.json(products);
}
