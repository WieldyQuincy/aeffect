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
                <option>Alabama</option>
                <option>Alaska</option>
                <option>Arizona</option>
                <option>Arkansas</option>
                <option>California</option>
                <option>Colorado</option>
                <option>Conneticut</option>
                <option>Delaware</option>
                <option>Florida</option>
                <option>Georgia</option>
                <option>Hawaii</option>
                <option>Idaho</option>
                <option>Illinois</option>
                <option>Indiana</option>
                <option>Iowa</option>
                <option>Kansas</option>
                <option>Kentucky</option>
                <option>Louisiana</option>
                <option>Maine</option>
                <option>Maryland</option>
                <option>Massachusetts</option>
                <option>Michigan</option>
                <option>Minnesota</option>
                <option>Mississippi</option>
                <option>Missouri</option>
                <option>Montana</option>
                <option>Nebraska</option>
                <option>Nevada</option>
                <option>New Hampshire</option>
                <option>New Jersey</option>
                <option>New Mexico</option>
                <option>New York</option>
                <option>North Carolina</option>
                <option>North Dakota</option>
                <option>Ohio</option>
                <option>Oklahoma</option>
                <option>Oregon</option>
                <option>Pennsylvania</option>
                <option>Rhode Island</option>
                <option>South Carolina</option>
                <option>South Dakota</option>
                <option>Tennessee</option>
                <option>Texas</option>
                <option>Utah</option>
                <option>Vermont</option>
                <option>Virginia</option>
                <option>Washington</option>
                <option>West Virginia</option>
                <option>Wisconsin</option>
                <option>Wyoming</option>
                <option>Puerto Rico</option>
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
