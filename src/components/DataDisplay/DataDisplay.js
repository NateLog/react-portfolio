import React from "react";
import { promises as fs } from "fs";
import { FormatSourceToJSON } from "@/utils";
import CheckBoxList from "../CheckBoxList/CheckBoxList";
import { countryCodes } from "@/DATA/countryCodeJSON";

async function DataDisplay({ params }) {
  const file = await fs.readFile(
    process.cwd() + "/src/DATA/sourceData.json",
    "utf8"
  );
  const allData = JSON.parse(file);

  //FormatSourceToJSON();

  return (
    <div>
      <CheckBoxList objList={countryCodes} paramKey="countryCode" />
    </div>
  );
}

export default DataDisplay;
