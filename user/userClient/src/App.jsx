import React, { Fragment, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";

// from donationModule
import DonationLandingPage from "donationClient/DonationLandingPage";
import DonationTimelineContent from "donationClient/DonationTimelineContent";
import DonationSignupForm from "donationClient/DonationSignupForm";
import DonationDashboard from "donationClient/DonationDashboard";
import DonationFormContext from "donationClient/DonationFormContext";
import DonationRegistration from "donationClient/DonationRegistration";
import DonationDashboardContext from "donationClient/DonationDashboardContext";

// Footer Header
import Footer from "./Componants/Pages/Footer/Footer";
import Navbar from "./Componants/Pages/Navbar/Navbar";
import "./Componants/GlobalCss/ButtonScss.css";
// Differenet Componants
import LazyLoad from "./Componants/Pages/LazyLoad/LazyLoad";
const LandingPage = lazy(() =>
  import("./Componants/Pages/LandingPage/LandingPage")
);
const ContactUs = lazy(() => import("./Componants/Pages/ContactUs/ContactUs"));
const AboutUs = lazy(() => import("./Componants/Pages/AboutUs/AboutUs.jsx"));

const App = () => (
  <div className="">
    <Suspense
      fallback={
        <div>
          <LazyLoad />
        </div>
      }
    >
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route
            exact
            path="/DonorLandingPage"
            element={<DonationLandingPage />}
          />
          <Route
            exact
            path="/DonorLandingPage/DonorRegistraion"
            element={
              <Fragment>
                <DonationFormContext>
                  <DonationRegistration />
                </DonationFormContext>
              </Fragment>
            }
          />
          <Route
          exact
            path="/DonorDashboard"
            element={
              <Fragment>
                <DonationDashboardContext>
                  <DonationDashboard />
                </DonationDashboardContext>
              </Fragment>
            }
          />
          <Route exact path="/AboutUs" element={<AboutUs />} />
          <Route exact path="/ContactUs" element={<ContactUs />} />
        </Routes>
        {window.location.pathname !== "/DonationRegistraion" ? (
          <Footer />
        ) : null}
      </Router>
    </Suspense>
    {/* <Navbar/> */}
    {/* <LandingPage/> */}
    {/* <AboutUs/> */}
    {/* <ContactUs/> */}
    {/* <Footer/> */}
    {/* <LazyLoad/> */}
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
