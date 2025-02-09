import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { prisma } from "@/prisma/prisma-client";

export const POST = async (req: NextRequest) => {
  try {
    const { discount } = await req.json();
    const article = req.nextUrl.pathname.split("/").pop();

    const product = await prisma.product.findFirst({
      where: {
        variants: {
          some: {
            article: Number(article),
          },
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

    if (!product) return NextResponse.json({ message: "Не найден продукт" }, { status: 400 });

    if (product.discount) return NextResponse.json({ message: "У товара уже имеется скидка" }, { status: 400 });

    await prisma.product.update({
      where: {
        id: Number(product.id),
      },
      data: {
        discount: Number(discount),
      },
    });

    const correctProduct = {
      id: product?.id,
      discount: Number(discount),
      articles: product?.variants.map((variant) => variant.article),
    };

    return NextResponse.json({ message: "скидка добавлена", product: correctProduct }, { status: 200 });
  } catch (error) {
    console.error("Error sending message:", error);
    throw new Error("Произошла ошибка при добавлении скидки");
  }
};

// export const GET = async (req: NextRequest) => {
//   try {
//     const article = req.nextUrl.pathname.split("/").pop();

//     const products = await prisma.productVariant.findMany({
//       where: {
//         article: Number(article),
//       },
//       select: {
//         article: true,
//         product: {
//           select: {
//             discount: true,
//           },
//         },
//       },
//     });

//     return NextResponse.json({ products }, { status: 200 });
//   } catch (error) {
//     console.error("Error sending message:", error);
//     throw new Error("Произошла ошибка при получении товаров со скидкой");
//   }
// };
