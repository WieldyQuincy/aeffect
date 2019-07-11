import React from "react";
import "./PtForm.css";

class PtForm extends React.Component {
  render() {
    return (
      <div id="ptform">
        <form>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label for="inputFirstName">First Name</label>
              <input
                type="Name"
                className="form-control"
                id="inputFirstName"
                placeholder="First Name"
              />
            </div>
            <div className="form-group col-md-5">
              <label for="inputLastName">Last Name</label>
              <input
                type="Name"
                className="form-control"
                id="inputLastName"
                placeholder="Last Name"
              />
            </div>
            <div className="form-group col-md-3">
              <label for="inputDOB">Date of Birth</label>
              <input type="Date" className="form-control" id="inputDOB" />
            </div>
          </div>
          <div className="form-group">
            <label for="inputAddress">Address</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div className="form-group">
            <label for="inputAddress2">Address 2</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputCity">City</label>
              <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="form-group col-md-4">
              <label for="inputState">State</label>
              <select id="inputState" className="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div className="form-group col-md-2">
              <label for="inputZip">Zip</label>
              <input type="text" className="form-control" id="inputZip" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label for="inputAccount">Account #</label>
              <input type="number" className="form-control" id="inputAccount" />
            </div>
            <div className="form-group col-md-4">
              <label for="inputMedRec">Medical Record #</label>
              <input type="number" className="form-control" id="inputMedRec" />
            </div>
            <div className="form-group col-md-4">
              <label for="inputUnit">Unit</label>
              <select className="form-control" id="inputAccount">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default PtForm;
