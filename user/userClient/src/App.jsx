import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import LandingPage from "./Componants/Pages/LandingPage/LandingPage";
import Navbar from "./Componants/Pages/Navbar/Navbar";

import "./index.css";

const App = () => (
  <div className="">
 <Navbar/>
 <LandingPage/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
