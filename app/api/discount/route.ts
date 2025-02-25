import { NextResponse } from "next/server";

import { prisma } from "@/prisma/prisma-client";

export const GET = async () => {
  try {
    const products = await prisma.product.findMany({
      where: {
        discount: {
          not: null,
        },
      },
      select: {
        discount: true,
        id: true,
        variants: {
          select: {
            article: true,
          },
        },
      },
    });

    const correctProducts = products.map((item) => ({
      id: item.id,
      discount: item.discount,
      articles: item.variants.map((variant) => variant.article),
    }));

    return NextResponse.json(correctProducts, { status: 200 });
  } catch (error) {
    console.error("Error sending message:", error);
    throw new Error("Произошла ошибка при получении товаров со скидкой");
  }
};
