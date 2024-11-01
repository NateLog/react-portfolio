import React from "react";
import * as d3 from "d3";
import styles from "@/components/AxisX/AxisX.module.css";

function AxisX() {
  const xList = d3.scaleLog([1, 100], [0, 60000]);
  //   for (let i = 1; i <= 100; i++) {
  //     console.log(xList(i));
  //   }
  console.log(xList.range());
  return (
    <div className={styles.line}>
      <path stroke="black"></path>
    </div>
  );
}
export default AxisX;
