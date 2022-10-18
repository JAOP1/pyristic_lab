import React, { useEffect, useState } from "react";
import "@carbon/charts/styles.css";
import { LineChart } from "@carbon/charts-react";


export const CarbonChart = ({ data }) => {
    const [ chartConfig, setChartConfig]  = useState({
        "title": "Results in the objective function",
        "axes": {
          "bottom": {
            "title": "Iteration",
            "mapsTo": "x",
            "scaleType": "labels"
          },
          "left": {
            "mapsTo": "y",
            "title": "Objective function",
            "scaleType": "linear"
          }
        },
        "curve": "curveMonotoneX",
        "data": {
            "loading": false
        },
        "height": "400px"
      });

      useEffect(() => {
        let config = {...chartConfig};
        config.data.loading = true;
        if( data.length !== 0 )
            config.data.loading = false;
        setChartConfig(config);
      }, [data]);
    return (		
    <LineChart
        data={data}
        options={chartConfig}>
    </LineChart>
    );
};