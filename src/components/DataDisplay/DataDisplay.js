import React from "react";

import { sql } from "@vercel/postgres";
import {
  CreatePopulationTable,
  RetrieveData,
  InsertInitialData,
  GetCSVData,
} from "@/utils";

//const JSONCSV = await GetCSVData("./src/DATA/IncomePCByTime.csv");
//await InsertInitialData(JSONCSV);

async function DataDisplay({ params }) {
  const data = await RetrieveData("all");
  console.log(data);

  return <div> </div>;
}

export default DataDisplay;
