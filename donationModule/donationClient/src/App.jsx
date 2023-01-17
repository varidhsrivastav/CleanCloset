import React from "react";
import ReactDOM from "react-dom";
// import Navbar from "userClient/Navbar"

import "./index.css";
import DonationLandingPage from "./Pages/DonationLandingPage/DonationLandingPage";
 

const App = () => (
  <div className="contaier">
   {/* <Navbar/> */}
   <DonationLandingPage/>

  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
