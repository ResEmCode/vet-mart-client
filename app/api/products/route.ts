import { NextResponse } from "next/server";
import type { $Enums, Product, ProductVariant } from "@prisma/client";

import { prisma } from "@/prisma/prisma-client";
import { convertPrismaFilters, toArrayKeyObject } from "@/server/helpers";

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);

  const type = searchParams.get("type") as $Enums.productTypeList;
  const animal = searchParams.get("animal");

  if (!type || !animal) return NextResponse.json({ message: "Нет нужных параметров" });

  const productKeys: Array<keyof Product> = [
    "name",
    "id",
    "country",
    "description",
    "brand",
    "images",
    "keywords",
    "productType",
    "categoryId",
    "createdAt",
    "updatedAt",
  ];

  const productVariantKeys: Array<keyof ProductVariant> = [
    "id",
    "article",
    "price",
    "currency",
    "count",
    "unit",
    "available",
    "productId",
    "createdAt",
    "updatedAt",
  ];

  const filteredProduct = toArrayKeyObject(searchParams, productKeys);

  const filteredProductVariant = toArrayKeyObject(searchParams, productVariantKeys);

  const newProductObj = convertPrismaFilters<typeof filteredProduct>(filteredProduct);
  const newProductVariantsObj = convertPrismaFilters<typeof filteredProductVariant>(filteredProductVariant) as any;

  const newProducts: any[] = [];

  // Происходит конвертация русского на английский
  const data: {
    [key: string]: string;
  } = { cats: "кошки", dogs: "собаки" };

  const productVariants = await prisma.productVariant.findMany({
    where: {
      ...newProductVariantsObj,
      product: {
        ...newProductObj,
        category: {
          name: data[animal],
        },
        productType: type,
      },
    },
    include: {
      product: true,
    },
  });

  // ---------------

  // Собираем в массив объекты с данными карточки
  productVariants.forEach((item) => {
    if (true) {
      newProducts.push({
        id: item.id,
        count: item.count,
        unit: item.unit,
        currency: item.currency,
        price: item.price,
        name: item.product.name,
        productId: item.product.id,
        image: item.product.images[0],
      });
    }
  });

  return NextResponse.json(newProducts);
};
