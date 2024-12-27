import { categories, products, users } from "./constants";
import { prisma } from "./prisma-client";
import fs from "fs";
import csv from "csv-parser";
import path from "path";
import { productsVariant } from "./constants/product-variant";

async function up() {
  await prisma.user.createMany({
    data: users,
  });

  const records: any = [];
  const filePath = path.join(__dirname, "excel", "category.csv");

  // ---------------------Category

  fs.createReadStream(filePath)
    .pipe(csv({ separator: ";" })) // Указываем разделитель
    .on("data", (data) => records.push(data))
    .on("end", async () => {
      try {
        await prisma.category.createMany({
          data: records.map((record: any) => ({
            name: record["name"],
            subtitle: record["subtitle"],
            imageUrl: record["imageUrl"],
          })),
        });
        console.log("Данные успешно импортированы.");
      } catch (error) {
        console.error("Ошибка при импорте данных:", error);
      }
    });

  // -------------------------
  const records2: any = [];
  const filePath2 = path.join(__dirname, "excel", "products.csv");

  fs.createReadStream(filePath2)
    .pipe(csv({ separator: ";" })) // Указываем разделитель
    .on("data", (data) => {
      // Проверка и парсинг данных
      const article = parseInt(data["article"], 10);
      const price = parseFloat(data["price"]);
      const salePrice = data["salePrice"] === "-" ? null : parseFloat(data["salePrice"]);
      const categoryId = parseInt(data["categoryId"], 10);

      console.log({
        article: article,
        country: data["country"] || null, // Если значение отсутствует, установите null
        name: data["name"],
        imageUrl: data["imageUrl"],
        price: price,
        description: data["description"] || null, // Если значение отсутствует, установите null
        isAvailable: data["isAvailable"] === "Да",
        composition: data["composition"] || null, // Если значение отсутствует, установите null
        sale: data["sale"] === "Да",
        salePrice: salePrice || null, // Если значение отсутствует или указано '-', установите null
        categoryId: categoryId,
      });

      if (!isNaN(article) && !isNaN(price) && !isNaN(categoryId)) {
        records2.push({
          article: article,
          country: data["country"] || null, // Если значение отсутствует, установите null
          name: data["name"],
          imageUrl: data["imageUrl"],
          price: price,
          description: data["description"] || null, // Если значение отсутствует, установите null
          isAvailable: data["isAvailable"] === "Да",
          composition: data["composition"] || null, // Если значение отсутствует, установите null
          sale: data["sale"] === "Да",
          salePrice: salePrice || null, // Если значение отсутствует или указано '-', установите null
          categoryId: categoryId,
        });
      }
    })
    .on("end", async () => {
      try {
        await prisma.product.createMany({
          data: records2,
        });
        await prisma.productVariant.createMany({
          data: productsVariant,
        });
        console.log("Данные успешно импортированы.");
      } catch (error) {
        console.error("Ошибка при импорте данных:", error);
      } finally {
        await prisma.$disconnect();
      }
    });

    
}


async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductVariant" RESTART IDENTITY CASCADE`;
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
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
