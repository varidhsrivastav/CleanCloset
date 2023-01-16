import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import Footer from "./Componants/Pages/Footer/Footer";
import LandingPage from "./Componants/Pages/LandingPage/LandingPage";
import Navbar from "./Componants/Pages/Navbar/Navbar";

import "./index.css";

const App = () => (
  <div className="">
 <Navbar/>
 <LandingPage/>
 <Footer/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
