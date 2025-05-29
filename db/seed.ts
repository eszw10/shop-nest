import { prisma } from "@/db/prisma";
import sampleData from "./sample-data";

async function main() {
  // delete all existing products on the database
  await prisma.product.deleteMany();
  await prisma.account.deleteMany();
  await prisma.session.deleteMany();
  await prisma.verificationToken.deleteMany();
  await prisma.user.deleteMany();

  // seed the database
  await prisma.product.createMany({ data: sampleData.products });
  await prisma.user.createMany({ data: sampleData.users });
}

main();

console.log("🌱 database are seeded successfully!");
