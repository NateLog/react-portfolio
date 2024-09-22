import { sql } from "@vercel/postgres";
import { promises as fs, writeFileSync } from "fs";
import { NextResponse } from "next/server";
import PrismaQuery from "@/lib/prisma";
import { countryCodes } from "@/DATA/countryCodeJSON";

export async function FormatSourceToJSON() {
  const popTable = await GetSidewaysCSVData("./src/DATA/PopPCByTime.csv");
  const incomeTable = await GetCSVData(
    "./src/DATA/IncomePCByTime.csv",
    "incomepercap"
  );
  const lifeTable = await GetCSVData(
    "./src/DATA/lifeExpectancyByTime.csv",
    "lifeExpectancy"
  );
  const initialYear = 1800;

  const sourceAllData = countryCodes.map((country) => {
    let countryData = GetCountryData(
      country.countryCode,
      popTable,
      lifeTable,
      incomeTable,
      initialYear
    );
    let newCountry = {
      ...country,
      initialYear,
      data: countryData,
    };
    return newCountry;
  });

  const objectified = ConvertArrayToObject(sourceAllData, "countryCode");

  const JSONToFile = (obj, filename) =>
    writeFileSync(`${filename}.json`, JSON.stringify(obj, null, 2));

  JSONToFile(objectified, "./src/DATA/sourceData");
}

function ConvertArrayToObject(array, key) {
  const initialValue = {};
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: item,
    };
  }, initialValue);
}

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

async function GetCSVData(path, thirdParameter) {
  const rawData = await fs.readFile(path, "utf8");

  const lines = rawData.split("\n");

  const objectifiedData = lines.map((line) => {
    const columns = line.split(",");
    const dataObj = {
      countrycode: columns[0],
      year: Number(columns[1]),
      [thirdParameter]: Number(columns[2]),
    };
    return dataObj;
  });

  const head = objectifiedData.shift();

  return objectifiedData;
}

async function GetSidewaysCSVData(path) {
  const rawData = await fs.readFile(path, "utf8");

  const lines = rawData.split("\n");

  const objectifiedData = lines.map((line) => {
    const columns = line.split(",");

    return columns;
  });

  const head = objectifiedData.shift();

  return objectifiedData;
}

function FormatStringtoNumber(old) {
  let symbolCheck = {
    M: "000000",
    k: "000",
  };
  let resultString = "Format Failed";
  let pos = old.indexOf("M") === -1 ? old.indexOf("k") : old.indexOf("M");
  //console.log(pos);
  let letter = pos > -1 ? old.at(pos) : false;
  //console.log(letter);
  if (letter) {
    let decimalPlaces = old.length - old.indexOf(".") - 2;
    let noPoint = old.replace(".", "");
    resultString = noPoint.replace(
      letter,
      symbolCheck[letter].slice(decimalPlaces)
    );
    // console.log(resultString);
  }
  return Number(resultString);
}

function GetCountryData(
  countryCode,
  popData,
  lifeTable,
  incomeData,
  initialYear
) {
  for (let i = 0; i < popData.length; i++) {
    let currentCountryPop = popData[i];
    if (countryCode === currentCountryPop[0]) {
      currentCountryPop.shift();
      currentCountryPop.shift();

      let incomeFilteredForCountry = incomeData.filter(
        (country) => countryCode === country.countrycode
      );
      let lifeFilteredForCountry = lifeTable.filter(
        (country) => countryCode === country.countrycode
      );
      // console.log(incomeFilteredForCountry);

      let countryData = BuildCountryObj(
        currentCountryPop,
        lifeFilteredForCountry,
        incomeFilteredForCountry,
        initialYear
      );
      //console.log(countryData);
      return countryData;
    }
  }
  return "noCode";
}

function BuildCountryObj(popData, lifeData, incomeData, initialYear) {
  //console.log(incomeData);
  let dataArrayofObjs = popData.map((pop, index) => {
    let year = initialYear + index;

    let incomeFiltered = FilterDataByYear(incomeData, year, "incomepercap");
    let lifeFiltered = FilterDataByYear(lifeData, year, "lifeExpectancy");
    if (typeof pop === "string") {
      pop = FormatStringtoNumber(pop);
    }
    let newYear = {
      population: pop,
      lifeexpect: lifeFiltered,
      income: incomeFiltered,
    };
    //console.log(newYear);
    return newYear;
  });
  return dataArrayofObjs;
}

function FilterDataByYear(data, thisyear, parameter) {
  let dataForYear = data.find((oneYear) => oneYear.year === thisyear);
  //console.log(thisyear);
  // console.log(incomeData);
  //console.log(incomeForCountryForYear);
  return dataForYear?.[parameter];
}
