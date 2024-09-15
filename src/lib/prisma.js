import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function PrismaQuery(queryType, arr) {
  console.log(queryType);
  if (queryType === "createMany") {
    const filteredArray = arr.filter(
      (entry, index) =>
        typeof entry.countrycode === "string" && entry.countrycode.length === 3
    );

    await prisma.incomes.createMany({
      data: [...filteredArray],
    });
  }
  if (queryType === "all") {
    const data = await prisma.incomes.findMany();
    return data;
  }
}

PrismaQuery()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
export default PrismaQuery;
