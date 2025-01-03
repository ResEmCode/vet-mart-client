import { NextResponse } from "next/server";

import { prisma } from "@/prisma/prisma-client";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const products = await prisma.product.findMany({
    where: {
      variants: {
        some: {
          weight: searchParams.get("weight") ?? undefined,
          brand: searchParams.get("brand") ?? undefined,
          feedClass: searchParams.get("feedClass") ?? undefined,
          purpose: searchParams.get("purpose") ?? undefined,
          age: searchParams.get("age") ?? undefined,
          ingredients: searchParams.get("ingredients") ?? undefined,
          price: searchParams.get("price") ?? undefined,
        },
      },
    },
    include: {
      variants: true,
    },
  });

  return NextResponse.json(products);
}
