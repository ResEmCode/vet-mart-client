import { products, users } from "./constants";
import { prisma } from "./prisma-client";
import fs from "fs";
import csv from "csv-parser";
import path from "path";

async function up() {
  await prisma.user.createMany({
    data: users,
  });

  // await prisma.category.createMany({
  //   data: categories,
  // });

  // await prisma.product.createMany({
  //   data: products,
  // });

  const records: any = [];
  const filePath = path.join(__dirname, "excel", "category.csv");
  // let isFirstRow = true; // Флаг для пропуска первой строки

  fs.createReadStream(filePath)
    .pipe(csv({ separator: ";" })) // Указываем разделитель
    .on("data", (data) => records.push(data))
    //   if (isFirstRow) {
    //     isFirstRow = false; // Пропускаем первую строку
    //   } else {
    //     records.push(data);
    //   }
    // })
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
      } finally {
        await prisma.$disconnect();
      }
    });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
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
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
