import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import Footer from "./Componants/Pages/Footer/Footer";
import LandingPage from "./Componants/Pages/LandingPage/LandingPage";
import Navbar from "./Componants/Pages/Navbar/Navbar";
import "./Componants/GlobalCss/ButtonScss.css";
import "./index.css";
import AboutUs from "./Componants/Pages/AboutUs/AboutUs";
import ContactUs from "./Componants/Pages/ContactUs/ContactUs";

const App = () => (
  <div className="">
 <Navbar/>
 {/* <LandingPage/> */}
 {/* <AboutUs/> */}
 <ContactUs/>
 <Footer/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
