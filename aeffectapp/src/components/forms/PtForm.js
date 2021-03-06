import React from "react";
import "./PtForm.css";

class PtForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      states: null,
      ptId: null,
      firstName: null,
      lastName: null,
      dob: null,
      address: null,
      address2: null,
      city: null,
      state: null,
      zipCode: null,
      account: null,
      medRecord: null,
      unitId: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    debugger;

    const postBody = JSON.stringify({
      ptId: this.state.ptId,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      dob: this.state.dob,
      address: this.state.address,
      address2: this.state.address2,
      city: this.state.city,
      state: this.state.state,
      zipCode: this.state.zipCode,
      account: this.state.account,
      medRecord: this.state.medRecord,
      unitId: this.state.unitId
    });

    fetch("https://localhost:5001/api/patients/add", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: { "Content-Type": "application/json" },
      body: postBody
    });
  }

  componentDidMount() {
    this.getStates();
    //console.log(JSON.stringify(this.state.states));
  }

  getStates() {
    fetch("https://localhost:5001/api/FormPg")
      .then(response => response.json())
      .then(data => this.setState({ states: data }));
  }

  render() {
    if (this.state.states === null) {
      return null;
    }
    // console.log(JSON.stringify(this.state.states));
    return (
      <div id="ptform">
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-1">
              <label htmlFor="ptId">ID</label>
              <input
                type="Number"
                className="form-control"
                id="ptId"
                name="ptId"
                placeholder="ID"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="firstName">First Name</label>
              <input
                type="Name"
                className="form-control"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="Name"
                className="form-control"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="dob">Date of Birth</label>
              <input
                type="Date"
                className="form-control"
                id="dob"
                name="dob"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              placeholder="1234 Main St"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address2">Address 2</label>
            <input
              type="text"
              className="form-control"
              id="address2"
              name="address2"
              placeholder="Apartment, studio, or floor"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="city">City</label>
              <input
                type="text"
                className="form-control"
                id="city"
                name="city"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="state">State</label>
              <select
                id="state"
                name="state"
                className="form-control"
                defaultValue="Choose..."
                onChange={this.handleChange}
              >
                <option>Choose...</option>

                {this.state.states.map(myUnitedState => (
                  <option key={myUnitedState.stateId}>
                    {myUnitedState.stateName}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="zipCode">Zip</label>
              <input
                type="number"
                className="form-control"
                id="zipCode"
                name="zipCode"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="account">Account #</label>
              <input
                type="number"
                className="form-control"
                id="account"
                name="account"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="medRecord">Medical Record #</label>
              <input
                type="number"
                className="form-control"
                id="medRecord"
                name="medRecord"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="unitId">Unit</label>
              <select
                className="form-control"
                id="unitId"
                name="unitId"
                onChange={this.handleChange}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
          </div>
          <button id="pt-form-submit" type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default PtForm;
