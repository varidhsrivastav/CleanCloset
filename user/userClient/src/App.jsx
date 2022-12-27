import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Componants/Pages/Navbar/Navbar";

import "./index.css";

const App = () => (
  <div className="container">
    <Navbar/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
