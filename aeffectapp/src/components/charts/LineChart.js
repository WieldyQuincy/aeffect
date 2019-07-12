import React from "react";
import Chart from "react-google-charts";
//import { isPattern } from "@babel/types";
//import "./LineChart.css";

class LineChart extends React.Component {
  render() {
    return (
      <div className="card-deck">
        <div className="linechart">
          <Chart
            width={"1000px"}
            height={"300px"}
            chartType="AreaChart"
            loader={
              <div class="spinner-border text-primary" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            }
            data={[
              ["Month", "Sales", "Expenses"],
              [new Date("2012, 01, 02"), 1000, 400],
              [new Date("2012, 05, 21"), 1170, 460],
              [new Date("2012, 06, 14"), 660, 1120],
              [new Date("2012, 10, 12"), 1030, 540]
            ]}
            options={{
              title: "Company Performance",
              hAxis: { title: "Month", titleTextStyle: { color: "#333" } },
              vAxis: { minValue: 0 },
              // For the legend to fit, we make the chart area smaller
              chartArea: {
                width: "80%",
                height: "70%"
              }
              // lineWidth: 25
            }}
            // For tests
            rootProps={{ "data-testid": "1" }}
            chartPackages={["controls"]}
            controls={[
              {
                controlType: "DateRangeFilter",
                options: {
                  filterColumnLabel: "Month",
                  ui: { format: { pattern: "mm" } }
                }
              }
            ]}
          />
        </div>
      </div>
    );
  }
}

export default LineChart;
