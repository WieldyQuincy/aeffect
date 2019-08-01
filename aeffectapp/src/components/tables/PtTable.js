import React from "react";
import "./PtTable.css";
import { Link } from "react-router-dom";
// import { isNumericLiteral } from "@babel/types";

class PtTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      patients: null
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getPatients();
  }

  handleChange(event) {
    if (event.target.value !== "") {
      const search = event.target.value;
      this.searchPt(search);
    } else {
      this.getPatients();
    }
  }

  // handleDelete = patientId => {
  //   fetch("https://localhost:5001/api/PtSearchPg/delete" + patientId, {});
  // };

  // handleDelete(id) {
  //   fetch("https://localhost:5001/api/PtSearchPg/delete" + id, {
  //     method: "DELETE"
  //   });
  // }

  searchPt(search) {
    fetch("https://localhost:5001/api/PtSearchPg/search/" + search)
      .then(response => response.json())
      .then(data => this.setState({ patients: data }));
  }

  getPatients() {
    fetch("https://localhost:5001/api/PtSearchPg")
      .then(response => response.json())
      .then(data => this.setState({ patients: data }));
  }

  render() {
    if (this.state.patients === null) {
      return null;
    }
    // console.log(JSON.stringify(this.state.patients));
    return (
      <div id="PtTable">
        <div className="input-group mb-3 col-md-4">
          <div className="input-group-prepend">
            <button
              className="btn btn-primary"
              type="button"
              id="button-addon1"
            >
              Search
            </button>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <table className="table table-bordered table-striped table-sm">
            <thead className="thead-dark bg-primary">
              <tr>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">DOB</th>
                <th scope="col">Unit ID</th>
                <th scope="col" className="btnColumn" />
              </tr>
            </thead>
            <tbody>
              {this.state.patients.map(patient => (
                <tr key={patient.patientId}>
                  <td>{patient.firstName}</td>
                  <td>{patient.lastName}</td>
                  <td>{patient.dob}</td>
                  <td>{patient.unitId}</td>
                  <td align="center">
                    <Link
                      to={`/PtEditPg?patientId=${patient.patientId}`}
                    >
                      <button
                        type="button"
                        className="btn btn-sm btn-warning btnspace"
                      >
                        Edit
                      </button>
                    </Link>
                    <button
                      type="button"
                      className="btn btn-sm btn-danger"
                      //onClick={this.handleDelete(patient.patientId)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default PtTable;

/* <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>12/4/1987</td>
                <td align="center">
                  <button type="button" className="btn btn-warning btnspace">
                    Edit
                  </button>
                  <button type="button" className="btn btn-danger">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>02/15/1962</td>
                <td align="center">
                  <button type="button" className="btn btn-warning btnspace">
                    Edit
                  </button>
                  <button type="button" className="btn btn-danger">
                    Delete
                  </button>
                </td>
              </tr> */
/* <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>04/30/1998</td>
                <td align="center">
                  <button type="button" className="btn btn-warning btnspace">
                    Edit
                  </button>
                  <button type="button" className="btn btn-danger">
                    Delete
                  </button>
                </td>
              </tr> */
