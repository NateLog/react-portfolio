-- CreateTable
CREATE TABLE "incomepercapbycountry" (
    "id" SERIAL NOT NULL,
    "countrycode" CHAR(3) NOT NULL,
    "year" SMALLINT NOT NULL,
    "incomepercap" DECIMAL(10,1) NOT NULL,

    CONSTRAINT "incomepercapbycountry_pkey" PRIMARY KEY ("id")
);

