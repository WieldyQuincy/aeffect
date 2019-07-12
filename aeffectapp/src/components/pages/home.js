import React from "react";
import Sidebar from "../Sidebar/Sidebar.js";
import PtForm from "../forms/PtForm.js";
import LineChart from "../charts/LineChart.js";

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
        </div>
      </div>
    );
  }
}
export default Home;
