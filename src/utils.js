import { sql } from "@vercel/postgres";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";
import PrismaQuery from "@/lib/prisma";

export async function RetrieveData(queryType) {
  const data = await PrismaQuery(queryType);
  return data;
}

export async function CreatePopulationTable() {
  await sql`CREATE TABLE IncomePerCapByCountry  
( 
  countryCode NCHAR(3), 
  year SMALLINT,
  incomePerCap MONEY
);`;
  return true;
}

export async function InsertInitialData(JSONDataArray) {
  const countDataEntered = await PrismaQuery("createMany", JSONDataArray);
  return countDataEntered;
}

export async function DeleteTableData(tableName) {
  await sql`DELETE FROM ${tableName}`;
}

export async function GetCSVData(path) {
  const rawData = await fs.readFile(path, "utf8");

  const lines = rawData.split("\n");

  const objectifiedData = lines.map((line) => {
    const columns = line.split(",");
    const dataObj = {
      countrycode: columns[0],
      year: Number(columns[1]),
      incomepercap: Number(columns[2]),
    };
    return dataObj;
  });

  const head = objectifiedData.shift();

  return objectifiedData;
}
