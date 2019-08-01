import React from "react";
import "./App.css";
import "./components/charts/LineChart.css";
import Navbar from "./components/Navbar/Navbar.js";
import PtSearchPg from "./components/pages/PtSearchPg";
import PtFormPg from "./components/pages/PtFormPg";
import Home from "./components/pages/home";
import PtEditPg from "./components/pages/PtEditPg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search" component={PtSearchPg} />
          <Route path="/addPatient" component={PtFormPg} />
          <Route path="/PtEditPg" component={PtEditPg} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
