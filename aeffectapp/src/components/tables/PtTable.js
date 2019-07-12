import React from "react";
import "./PtTable.css";

class PtTable extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     states = null
  //   };
  // }

  // componentDidMount() {
  //   this.getStates();
  //   console.log(JSON.stringify(this.state.states));
  // }
  // getstates() {
  //   fetch("https://localhost:5001/api/states/")
  //     .then(response => response.json())
  //     .then(data => this.setState({ states: data}))
  //     .then(console.log(JSON.stringify(this.state.states)));
  // }

  render() {
    return (
      <div id="PtTable">
        <table className="table table-bordered table-striped">
          <thead className="thead-dark bg-primary">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">DOB</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>12/4/1987</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>02/15/1962</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>04/30/1998</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default PtTable;
