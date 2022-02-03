import React from 'react';
import "./Chart.css";
import ChartBar from "./ChartBar.js";

const Chart = (props) => {
  const values = props.datapoints.map((datapoint) => datapoint.value);
  const totalMax = Math.max(...values);

  return (
    <div className="chart">
      {props.datapoints.map((datapoint) => (
        <ChartBar
          key={datapoint.id}
          value={datapoint.value}
          maxValue={totalMax}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
