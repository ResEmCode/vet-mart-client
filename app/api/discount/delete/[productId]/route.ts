import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { prisma } from "@/prisma/prisma-client";

export const DELETE = async (req: NextRequest, { params }: { params: Promise<{ productId: number }> }) => {
  const { productId } = await params;
  if (!productId) return NextResponse.json({ error: "Не указан id товара" }, { status: 400 });

  try {
    const product = await prisma.product.findFirst({
      where: {
        id: Number(productId),
      },
    });

    if (!product) return NextResponse.json({ message: "Ошибка, продукт не найден" }, { status: 400 });

    await prisma.product.update({
      where: {
        id: Number(productId),
      },
      data: {
        discount: null,
      },
    });

    return NextResponse.json({ message: "Скидка была удалена!" }, { status: 200 });
  } catch (error) {
    console.error("Error sending message:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
};
