import { NextResponse } from "next/server";
import type { $Enums } from "@prisma/client";

import { prisma } from "@/prisma/prisma-client";

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);

  const type = searchParams.get("type") as $Enums.productTypeList;
  const animal = searchParams.get("animal");

  // console.log(type, animal)
  const paramsObject: Record<string, string | number | { in: (string | number)[] }> = {};
  searchParams.forEach((value, key) => {
    if (key !== "animal" && key !== "type") {
      if (value.includes(",")) {
        paramsObject[key] = { in: value.split(",").map((v) => (isNaN(Number(v)) ? v : Number(v))) };
      } else {
        paramsObject[key] = isNaN(Number(value)) ? value : Number(value);
      }
    }
  });

  // const productQuery = {
  //   brand: paramsObject.brand,
  // };

  // const weight = searchParams.get("weight");
  // console.log(weight)

  // delete paramsObject?.type;

  // const products = await prisma.product.findMany({
  //   include: {
  //     variants: true,
  //   },
  //   where: {
  //     variants: {
  //       some: paramsObject,
  //     },
  //   },
  // });

  const newProducts: any[] = [];

  // Происходит конвертация русского на английский
  const data: {
    [key: string]: string;
  } = { cats: "кошки", dogs: "собаки" };

  if (type && animal) {
    // Ищем categoryId что бы определить какую категорию необходимо нам запросить
    const { id: categoryId } = (await prisma.category.findFirst({
      where: { name: data[animal] },
      select: {
        id: true,
      },
    })) ?? { id: null };

    if (categoryId && type) {
      const productVariants = await prisma.productVariant.findMany({
        where: {
          ...paramsObject,
          product: {
            categoryId,
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
            image: item.product.images[0],
          });
        }
      });

      return NextResponse.json(newProducts);
    }

    // -------------------------------------------------------------------
    // if (categoryId && type) {
    //   // Запрашиваем данные нужной категории и нужного типа
    //   const products = await prisma.product.findMany({
    //     include: {
    //       variants: true,
    //     },
    //     where: {
    //       categoryId: categoryId,
    //       productType: type,
    //       variants: {
    //         some: {
    //           unit: "кг.",
    //         },
    //       },
    //     },
    //   });

    // -------------------------------------------------------------------

    // const newProducts = products.map((product) =>
    //   product.variants.map((item) => ({
    //     ...item,
    //     name: product.name,
    //   })),
    // );

    // return NextResponse.json([]);

    return NextResponse.json([]);
  }

  return NextResponse.json([]);
};
