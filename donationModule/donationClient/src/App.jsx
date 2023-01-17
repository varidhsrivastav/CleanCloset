import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import DonationLandingPage from "./Pages/DonationLandingPage/DonationLandingPage";

const App = () => (
  <div className="contaier">
   <DonationLandingPage/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
