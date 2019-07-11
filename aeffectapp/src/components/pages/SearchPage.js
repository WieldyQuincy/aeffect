import React from "react";
import Sidebar from "../Sidebar/Sidebar.js";
import PtTable from "../tables/PtTable.js";

class PtSearch extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md-10">
            <PtTable />
          </div>
        </div>
      </div>
    );
  }
}
export default PtSearch;
