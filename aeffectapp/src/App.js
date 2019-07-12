import React from "react";
import "./App.css";
import "./components/charts/LineChart.css";
import Navbar from "./components/Navbar/Navbar.js";
import SearchPage from "./components/pages/SearchPage";
import FormPage from "./components/pages/FormPage";
import Home from "./components/pages/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search" component={SearchPage} />
          <Route path="/form" component={FormPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
