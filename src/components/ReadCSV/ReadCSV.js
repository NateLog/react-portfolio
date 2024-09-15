import React from "react";

import styles from "./ReadCSV.module.css";
import {
  GetCSVData,
  RetrieveAllData,
  InsertData,
  DeleteTableData,
} from "@/utils";

async function ReadCSV() {
  // const objectifiedData = await GetCSVData("./src/DATA/IncomePCByTime.csv");

  // const tableData = await RetrieveAllData();
  //console.log(objectifiedData);
  //InsertData(objectifiedData);
  //DeleteTableData("incomepercapbycountry");

  return (
    <div className={styles.datawrapper}>
      {objectifiedData.map(({ countryCode, year, incomePerCap }) => {
        return (
          <div className={styles.datarow} key={countryCode + year}>
            <span className={styles.databox}>{countryCode + " "}</span>
            <span className={styles.databox}>{year + " "}</span>
            <span className={styles.databox}>{incomePerCap}</span>
          </div>
        );
      })}
    </div>
  );
}

export default ReadCSV;
