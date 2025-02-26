import path from "path";
import { prisma } from "./prisma-client";
import xlsx from "xlsx";
import { $Enums } from "@prisma/client";

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

type CategoryTypes = {
  Категории: "Коты" | "Собаки" | "Птицы" | "Гризуны" | "Рептилии";
  Тип: string;
};
// async function importDataFromExcel(filePath: string) {
//   const workbook = xlsx.readFile(filePath);
//   const sheetName = workbook.SheetNames[0];
//   const sheet = workbook.Sheets[sheetName];
//   const data = xlsx.utils.sheet_to_json(sheet);

//   for (const row of data) {
//     const typedRow = row as Product;
//     // Заполняем таблицу Product

//     const existingProduct = await prisma.product.findFirst({
//       where: { name: typedRow.Название_позиции },
//     });

//     const currentCategory = await prisma.category.findFirst({
//       where: {
//         name: {
//           equals: typedRow.Категория,
//           mode: "insensitive",
//         },
//       },
//     });

//     if (!existingProduct && currentCategory) {
//       await prisma.product.create({
//         data: {
//           name: typedRow.Название_позиции,
//           keywords: typedRow.Ключевые_слова.split(", ").map((item) => item.trim()),
//           country: typedRow.Страна_производитель,
//           description: typedRow.Описание,
//           brand: typedRow.Производитель,
//           images: typedRow.Ссылка_изображения.split(", ").map((item) => item.trim()),
//           productType: productTypeTranslate[typedRow.Тип_продукта],
//           categoryId: currentCategory.id,
//         },
//       });
//     }

//     // Реализовываем таблицу ProductVariants

//     const product = await prisma.product.findFirst({
//       where: {
//         name: {
//           equals: typedRow.Название_позиции,
//           mode: "insensitive",
//         },
//       },
//       select: {
//         id: true,
//       },
//     });

//     if (product) {
//       await prisma.productVariant.create({
//         data: {
//           productId: product.id,

//           article: typedRow.Артикул,
//           price: parseFloat(typedRow.Цена),
//           currency: typedRow.Валюта,
//           count: Number(typedRow.Количество),
//           unit: typedRow.Единица_измерения,
//           available: Boolean(typedRow.Наличие === "+"),
//         },
//       });
//     }
//   }
// }

async function importDataFromExcel(filePath: string) {
  const workbook = xlsx.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const data = xlsx.utils.sheet_to_json(sheet) as CategoryTypes[];

  const uniqueItems = [...new Set(data.map((item) => item.Категории))];

  const newData = uniqueItems.map((item) => ({
    name: item,
    subtitle: "food",
    imageUrl: "https://shop.vsezveri.ru/storage/system/resized/xy_992x559/6fcd2f90d3fa56594cda7e24efc150ee_3953d329.jpg",
  }));

  const categoryData = await prisma.category.createManyAndReturn({
    data: newData,
  });
  const categorySet = new Map();

  categoryData.forEach((item) => categorySet.set(item.name, item.id));

  const newCategoryType = data.map((item) => ({
    name: item.Тип,
    categoryId: categorySet.get(item.Категории),
  }));

  await prisma.categoryType.createMany({
    data: newCategoryType,
  });
}

export async function up() {
  const filePath = path.join(__dirname, "excel", "Categories.xlsx");

  importDataFromExcel(filePath)
    .then(() => {
      console.log("Данные успешно импортированы");
    })
    .catch((error) => {
      console.error("Ошибка при импорте данных:", error);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
}

async function down() {
  // await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  // await prisma.$executeRaw`TRUNCATE TABLE "ProductVariant" RESTART IDENTITY CASCADE`;
  // await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  // await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  // await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductVariant" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (error) {
    console.log(error);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
    return;
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
