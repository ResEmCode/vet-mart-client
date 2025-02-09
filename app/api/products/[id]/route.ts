import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { prisma } from "@/prisma/prisma-client";

export async function GET(req: NextRequest) {
  try {
    const { pathname } = req.nextUrl;
    const id = pathname.split("/").pop();

    // const queryParams = new URLSearchParams(search);
    // const article = queryParams.get("article");

    if (!id || isNaN(Number(id))) {
      return NextResponse.json({ error: "Некорректный ID продукта" }, { status: 400 });
    }

    const product = await prisma.product.findUnique({
      where: { id: Number(id) },
      include: { variants: true },
    });

    if (!product) {
      return NextResponse.json({ error: "Продукт не найден" }, { status: 404 });
    }
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
    console.error("Ошибка API:", error);
    return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 });
  }
}
