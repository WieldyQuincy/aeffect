import React from "react";
import Sidebar from "../Sidebar/Sidebar.js";
import PtEditForm from "../forms/PtEditForm.js";

class PtFormPg extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md-10">
            <PtEditForm />
          </div>
        </div>
      </div>
    );
  }
}
export default PtFormPg;
