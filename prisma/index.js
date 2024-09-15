const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function PrismaQuery(object, queryType) {
  if (queryType === "createmany") {
    await prisma.Incomes.createMany({
      data: [
        {
          countrycode: "nmw",
          year: 2024,
          incomepercap: 1000000,
        },
        {
          countrycode: "nmw",
          year: 2024,
          incomepercap: 1000000,
        },
      ],
    });
  }

  //  const alldata = await prisma.Incomes.findMany();
  //  console.log(alldata);
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
