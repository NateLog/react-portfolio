/*
  Warnings:

  - You are about to drop the `incomepercapbycountry` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "incomepercapbycountry";

-- CreateTable
CREATE TABLE "Incomes" (
    "id" SERIAL NOT NULL,
    "countrycode" CHAR(3) NOT NULL,
    "year" SMALLINT NOT NULL,
    "incomepercap" DECIMAL(10,1) NOT NULL,

    CONSTRAINT "Incomes_pkey" PRIMARY KEY ("id")
);
