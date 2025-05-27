import { prisma } from "@/db/prisma";
import sampleData from "./sample-data";

async function main() {
  await prisma.product.deleteMany(); // delete all existing products on the database

  await prisma.product.createMany({ data: sampleData.products }); // seed the database
}

main();
