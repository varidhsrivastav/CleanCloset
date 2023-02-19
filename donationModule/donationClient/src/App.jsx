import React from "react";
import ReactDOM from "react-dom";
import { useEffect } from "react";
// import Navbar from "userClient/Navbar";
// import Footer from "userClient/Footer";

import "./index.css";
import DonationLandingPage from "./Pages/DonationLandingPage/DonationLandingPage";
import DonationTimelineContent from "./Pages/DonationClientForm/DonationTimelineContents/DonationTimelineContent";
import DonationFormContext from "./Pages/DonationRegistrationForm/DonationFormContext/DonationFormContext";
import DonationRegistration from "./Pages/DonationRegistrationForm/DonationRegistration";
import DonationDashbaord from "./Pages/DonationDashboard/DonationDashbaord";
import DonationDashboardContext, {
  DashboardContext,
} from "./Pages/DonationDashboard/DonatationDshboardContext/DonationDashboardContext";
import DonationSignupForm from "./Pages/DonationClientForm/DonationSignInForm/DonationSignupForm";
// import DonationClientMForm from "./Pages/DonationClientMForm/DonationClientMForm";
// import DBasicRegistration from "./Pages/DonationClientMForm/Stages/DBasicRegistration";

const App = () => (
  <div className="contaier">
    {/* <Navbar /> */}
    {/* <DonationLandingPage/> */}
    {/* <DonationTimelineContent/> */}
    {/* <DonationSignupForm/> */}
    {/* <DonationFormContext>
      <DonationRegistration/>
    </DonationFormContext> */}
    {/* <DonationDashboardContext>
      <DonationDashbaord />
    </DonationDashboardContext> */}
    {/* <Footer /> */}
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
