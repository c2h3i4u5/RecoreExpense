import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar.js";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const tatalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoints) => (
        <ChartBar
          key={dataPoints.label}
          value={dataPoints.value}
          maxValue={tatalMaximum}
          label={dataPoints.label}
        />
      ))}

      <ChartBar />
    </div>
  );
};

export default Chart;
