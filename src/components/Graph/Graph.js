import React from "react";
import { RetrieveAllData } from "@/utils";
import * as d3 from "d3";
import AxisX from "../AxisX/AxisX";
import styles from "@/components/Graph/Graph.module.css";

function Graph() {
  return (
    <svg className={styles.wrapper}>
      <AxisX />
    </svg>
  );
}

export default Graph;
