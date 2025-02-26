import path from "path";
import xlsx from "xlsx";
import { $Enums } from "@prisma/client";
import { prisma } from "@/prisma/prisma-client";

export const setProductsByFile = (name: string) => {
  //   const filePath = path.join(process.cwd(), "uploads", "excel", name);
  //   const filePath = path.join(__dirname,  "VetMarket.xlsx");
  //   const filePath = path.join(process.cwd(), `/excel/${name}`);
  //   const fileUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/excel/${name}`;
  // console.log(filePath);
  //   const filePath = path.join(__dirname, "excel", name);
  //   try {
  //     importDataFromExcel(filePath)
  //       .then(() => {
  //         console.log("Данные успешно импортированы");
  //       })
  //       .catch((error) => {
  //         console.error("Ошибка при импорте данных:", error);
  //       })
  //       .finally(async () => {
  //         await prisma.$disconnect();
  //       });
  //   } catch (error) {}
};

async function importDataFromExcel(filePath: string) {
  const workbook = xlsx.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const data = xlsx.utils.sheet_to_json(sheet);

  for (const row of data) {
    const typedRow = row as Product;
    // Заполняем таблицу Product

    const existingProduct = await prisma.product.findFirst({
      where: { name: typedRow.Название_позиции },
    });

    const currentCategory = await prisma.category.findFirst({
      where: {
        name: {
          equals: typedRow.Категория,
          mode: "insensitive",
        },
      },
    });

    if (!existingProduct && currentCategory) {
      await prisma.product.create({
        data: {
          name: typedRow.Название_позиции,
          keywords: typedRow.Ключевые_слова.split(", ").map((item) => item.trim()),
          country: typedRow.Страна_производитель,
          description: typedRow.Описание,
          brand: typedRow.Производитель,
          images: typedRow.Ссылка_изображения.split(", ").map((item) => item.trim()),
          productType: productTypeTranslate[typedRow.Тип_продукта],
          categoryId: currentCategory.id,
        },
      });
    }

    // Реализовываем таблицу ProductVariants

    const product = await prisma.product.findFirst({
      where: {
        name: {
          equals: typedRow.Название_позиции,
          mode: "insensitive",
        },
      },
      select: {
        id: true,
      },
    });

    if (product) {
      await prisma.productVariant.create({
        data: {
          productId: product.id,

          article: typedRow.Артикул,
          price: parseFloat(typedRow.Цена),
          currency: typedRow.Валюта,
          count: Number(typedRow.Количество),
          unit: typedRow.Единица_измерения,
          available: Boolean(typedRow.Наличие === "+"),
        },
      });
    }
  }
}

type Product = {
  Артикул: number;
  Название_позиции: string;
  Ключевые_слова: string;
  Описание: string;
  Цена: string;
  Валюта: string;
  Количество: number;
  Единица_измерения: string;
  Ссылка_изображения: string;
  Наличие: string;
  Страна_производитель: string;
  Категория: string;
  Производитель: string;
  Тип_продукта: "игрушка" | "корм" | "ветпрепорат" | "разное";
};

const productTypeTranslate = {
  игрушка: $Enums.productTypeList.toys,
  корм: $Enums.productTypeList.food,
  ветпрепорат: $Enums.productTypeList.veterinaryDrugs,
  разное: $Enums.productTypeList.different,
};
