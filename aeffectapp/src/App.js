import React from "react";
import "./App.css";
import "./components/cards/LineChart.css";
import Navbar from "./components/Navbar/Navbar.js";
import SearchPage from "./components/pages/SearchPage";
import FormPage from "./components/pages/FormPage";

function App() {
  return (
    <div>
      <Navbar />
      {/*<SearchPage />*/}
      <FormPage />
    </div>
  );
}

export default App;
