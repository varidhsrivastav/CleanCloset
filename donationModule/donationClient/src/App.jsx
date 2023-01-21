import React from "react";
import ReactDOM from "react-dom";
// import Navbar from "userClient/Navbar";
// import Footer from "userClient/Footer"

import "./index.css";
import DonationLandingPage from "./Pages/DonationLandingPage/DonationLandingPage";
import DonationTimelineContent from "./Pages/DonationClientForm/DonationTimelineContents/DonationTimelineContent";
import DonationSignupForm from "./Pages/DonationClientForm/DonationSignInForm/DonationSignupForm";
import DonationClientForm from "./Pages/DonationClientForm/DonationClientForm";
 

const App = () => (
  <div className="contaier">
   {/* <Navbar/> */}
   {/* <DonationLandingPage/> */}
   {/* <DonationTimelineContent/> */}
   {/* <DonationSignupForm/> */}
   <DonationClientForm/>
{/* <Footer/> */}
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
