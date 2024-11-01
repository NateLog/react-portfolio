import React from "react";
//import DataDisplay from "@/components/DataDisplay/DataDisplay";
import ReadCSV from "@/components/ReadCSV/ReadCSV";
import styles from "./playground.module.css";
import DataDisplay from "@/components/DataDisplay/DataDisplay";
import LoadSeedData from "@/lib/loaddata";
import Graph from "@/components/Graph/Graph";

function playground() {
  //LoadSeedData();
  return (
    <>
      <h1>Here's the data</h1>
      <Graph />
      {/* <DataDisplay /> */}
    </>
  );
}

export default playground;
