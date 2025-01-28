import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { prisma } from "@/prisma/prisma-client";

export async function GET(req: NextRequest) {
  try {
    const { pathname } = req.nextUrl;
    const id = pathname.split("/").pop();

    // const queryParams = new URLSearchParams(search);
    // const article = queryParams.get("article");

    const product = await prisma.product.findFirst({
      where: {
        id: Number(id),
      },
      include: {
        variants: true,
      },
    });

    // const productVariant = await prisma.productVariant.findUnique({
    //   where: { id: Number(id) },
    //   select: {
    //     productId: true,
    //   },
    // });

    // const product = await prisma.product.findUnique({
    //   where: { id: Number(productVariant?.productId) },
    //   include: {
    //     variants: true,
    //   },
    // });

    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json(error);
  }
}
