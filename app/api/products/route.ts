import { NextResponse } from "next/server";

import { prisma } from "@/prisma/prisma-client";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const filter = {
    weight: searchParams.get("weight")?.split(",") || undefined,
    brand: searchParams.get("brand") || undefined,
    feedClass: searchParams.get("feedClass") || undefined,
    purpose: searchParams.get("purpose") || undefined,
    age: searchParams.get("age") || undefined,
    ingredients: searchParams.get("ingredients") || undefined,
    price: searchParams.get("price") || undefined,
  };

  const weightsWithKg = filter.weight?.map((weight) => `${weight}кг`);
  // const cleanFilter = Object.fromEntries(Object.entries(filter).filter(([_, value]) => value !== undefined));

  const products = await prisma.product.findMany({
    include: {
      variants: true,
    },
    where: {
      variants: {
        some: {
          weight: {
            in: weightsWithKg,
          },
        },
      },
    },
  });

  return NextResponse.json(products);
}
