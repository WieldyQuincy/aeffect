import React from "react";
import "./App.css";
import "./components/cards/LineChart.css";
import LineChart from "./components/cards/LineChart";
import Navbar from "./components/Navbar/Navbar.js";
import Sidebar from "./components/Sidebar/Sidebar";
import PtForm from "./components/forms/PtForm";
import PtTable from "./components/tables/PtTable.js";
import PtSearch from "./components/pages/PtSearch.js";

function App() {
  return (
    <div>
      <Navbar />
      <PtSearch />
    </div>
  );
}

export default App;
