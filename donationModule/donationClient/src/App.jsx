import React from "react";
import ReactDOM from "react-dom";
import Navbar from "userClient/Navbar";
import Footer from "userClient/Footer"

import "./index.css";
import DonationLandingPage from "./Pages/DonationLandingPage/DonationLandingPage";
 

const App = () => (
  <div className="contaier">
   <Navbar/>
   <DonationLandingPage/>
<Footer/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
