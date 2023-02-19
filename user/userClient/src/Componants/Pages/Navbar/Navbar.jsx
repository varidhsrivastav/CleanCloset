import React from "react";
import "./Navbar.css";
import logo from "./Image/cleanclosethighLogo.png"
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  var openNav = () => {
    var lastScrollTop = 0;
    var navbar = document.getElementById("navbar");
    window.addEventListener("scroll", function () {
      var scrollTop = window.pageYOffset || document.createElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        navbar.style.top = "80px";
      } else {
        navbar.style.top = "0";
      }
      lastScrollTop = scrollTop;
    });
  };

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light" onScroll={openNav}>
        <div className="container1" data-aos="fade-down">
          <NavLink to="/" className="navbar-brand">
            <img src={logo} alt="" />
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
              
                <NavLink to="/" className="nav-link">
                  <span data-hover="Home">Home</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/AboutUs" className="nav-link">
                  <span data-hover="About">About</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/ContactUs" className="nav-link">
                  <span data-hover="Contact">Contact</span>
                </NavLink>
              </li>
              <li className="nav-item">
              </li>
            </ul>
            <ul className="navbar-nav" id="DonateButtonNav">
              <NavLink to="/DonorLandingPage" className="nav-link">
                
                <button class="button-18" role="button">
                Donate Now
              </button>
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
