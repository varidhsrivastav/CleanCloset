import React from "react";
import "./Navbar.css";
import logo from "./Image/CleanCloset.png"
import { Link } from "react-router-dom";

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
          <a className="navbar-brand"  to="/">
            <img src={logo} alt="" />
          </a>

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
                <a to="/" className="nav-link">
                  <span data-hover="Home">Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a to="/about" className="nav-link">
                  <span data-hover="About">About</span>
                </a>
              </li>
              <li className="nav-item">
                <a to="/project" className="nav-link">
                  <span data-hover="Projects">Projects</span>
                </a>
              </li>
              <li className="nav-item">
                <a to="/resume" className="nav-link">
                  <span data-hover="Resume">Resume</span>
                </a>
              </li>
            </ul>
            <ul className="navbar-nav" id="DonateButtonNav">
              <a to="/contact" className="nav-link">
                
                <button class="button-86" role="button">
                Register NGO
              </button>
            
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
