import React from "react";
import Sidebar from "../Sidebar/Sidebar.js";
import LineChart from "../charts/LineChart.js";
import PieChart from "../charts/PieChart";

class Home extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md-10">
            <LineChart />
          </div>
          <div>
            <PieChart />
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
