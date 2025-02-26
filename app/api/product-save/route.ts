// Import necessary modules
import { NextResponse } from "next/server";

// Define the POST handler for the file upload
export const POST = (req: Request) => {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get("name");

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

  if (name) {
    // const filePath = path.join(__dirname, "..", "..", "uploads", "excel", name);
    // const module = await import(filePath);
    // console.log(filePath)
    // const filePath = path.resolve("D:/WebProjects/Organisations/ReSemCode/vet-mart-client/uploads/excel", name);
    // console.log(filePath);
    // importDataFromExcel(filePath);
  }

  return NextResponse.json({ Message: "true", status: 200 });
};

// type Product = {
//   Артикул: number;
//   Название_позиции: string;
//   Ключевые_слова: string;
//   Описание: string;
//   Цена: string;
//   Валюта: string;
//   Количество: number;
//   Единица_измерения: string;
//   Ссылка_изображения: string;
//   Наличие: string;
//   Страна_производитель: string;
//   Категория: string;
//   Производитель: string;
//   Тип_продукта: "игрушка" | "корм" | "ветпрепорат" | "разное";
// };

// const productTypeTranslate = {
//   игрушка: $Enums.productTypeList.toys,
//   корм: $Enums.productTypeList.food,
//   ветпрепорат: $Enums.productTypeList.veterinaryDrugs,
//   разное: $Enums.productTypeList.different,
// };
