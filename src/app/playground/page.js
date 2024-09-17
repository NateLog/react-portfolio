import React from "react";
//import DataDisplay from "@/components/DataDisplay/DataDisplay";
import ReadCSV from "@/components/ReadCSV/ReadCSV";
import styles from "./playground.module.css";
import DataDisplay from "@/components/DataDisplay/DataDisplay";
import LoadSeedData from "@/lib/loaddata";

function playground() {
  //LoadSeedData();
  return (
    <>
      <h1>Here's the data</h1>

      <DataDisplay />
    </>
  );
}

export default playground;
