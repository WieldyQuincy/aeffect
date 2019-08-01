import React from "react";
import Sidebar from "../Sidebar/Sidebar.js";
import PtForm from "../forms/PtForm.js";

class PtFormPg extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md-10">
            <PtForm />
          </div>
        </div>
      </div>
    );
  }
}
export default PtFormPg;
