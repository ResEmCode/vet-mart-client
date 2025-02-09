import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { prisma } from "@/prisma/prisma-client";

export const PATCH = async (req: NextRequest, { params }: { params: Promise<{ productId: number }> }) => {
  const { productId } = await params;
  const { discount } = await req.json();

  try {
    await prisma.product.update({
      where: {
        id: Number(productId),
      },
      data: {
        discount: Number(discount),
      },
    });

    return NextResponse.json({ message: "скидка обновлена", product: { id: productId, discount } }, { status: 200 });
  } catch (error) {
    console.error("Error sending message:", error);
    throw new Error("Произошла ошибка при обновлении скидки");
  }
};
