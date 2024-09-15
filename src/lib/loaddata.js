import { promises as fs } from "fs";
import PrismaQuery from "./prisma.js";

async function InsertInitialData(JSONDataArray) {
  const countDataEntered = await PrismaQuery("createMany", JSONDataArray);
  return countDataEntered;
}

async function GetCSVData(path) {
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

async function main() {
  console.log("it's  running!");
  const path = "@/DATA/IncomePCByTime.csv";
  const JSONDataArray = await GetCSVData(path);
  const countDataEntered = await PrismaQuery("createMany", JSONDataArray);
  return countDataEntered;
}
export default main;
