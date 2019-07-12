import React from "react";
import "./PtForm.css";

class PtForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      states: null
    };
  }

  componentDidMount() {
    this.getStates();
    //console.log(JSON.stringify(this.state.states));
  }

  getStates() {
    fetch("https://localhost:5001/api/FormPg")
      .then(response => response.json())
      .then(data => this.setState({ states: data }));
    // .then(console.log(JSON.stringify(this.state.states)));
  }

  render() {
    return (
      <div id="ptform">
        {alert(console.log(JSON.stringify(this.state.states)))}
        <form>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="inputFirstName">First Name</label>
              <input
                type="Name"
                className="form-control"
                id="inputFirstName"
                placeholder="First Name"
              />
            </div>
            <div className="form-group col-md-5">
              <label htmlFor="inputLastName">Last Name</label>
              <input
                type="Name"
                className="form-control"
                id="inputLastName"
                placeholder="Last Name"
              />
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="inputDOB">Date of Birth</label>
              <input type="Date" className="form-control" id="inputDOB" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress">Address</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress2">Address 2</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputCity">City</label>
              <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputState">State</label>
              <select
                id="inputState"
                className="form-control"
                defaultValue="Choose..."
              >
                <option>Choose...</option>
                {/* {this.props.states.map(myUnitedState => (
                  <option>{myUnitedState.StateName}</option>
                ))} */}
              </select>
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputZip">Zip</label>
              <input type="text" className="form-control" id="inputZip" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="inputAccount">Account #</label>
              <input type="number" className="form-control" id="inputAccount" />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputMedRec">Medical Record #</label>
              <input type="number" className="form-control" id="inputMedRec" />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputUnit">Unit</label>
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
