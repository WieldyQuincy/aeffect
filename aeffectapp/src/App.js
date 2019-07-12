import React from "react";
import "./App.css";
import "./components/charts/LineChart.css";
import Navbar from "./components/Navbar/Navbar.js";
import SearchPage from "./components/pages/SearchPage";
import FormPage from "./components/pages/FormPage";
import LineChart from "./components/charts/LineChart.js";

function App() {
  return (
    <div>
      <Navbar />
      {/*<SearchPage />*/}
      <FormPage />
      {/*<LineChart />*/}
    </div>
  );
}

export default App;
