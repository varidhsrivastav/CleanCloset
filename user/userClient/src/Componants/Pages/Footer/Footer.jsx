import React from "react";
import "./Footer.css"
const Footer = () => {
  return (
    <div className="FooterMainContainer">
      <div className="FooterComponants ">
        <div className="FooterMainSection">
        <div className="container FooterMainSection">
        <div className="FooterLogo">
            <h1>
              Clean
              <br /> Closet
            </h1>
            <p>Copyright @ 2023</p>
          </div>
          <div className="FooterMenu">
            <h4>Menu</h4>
            <div className="FooterMenuLinks">
            
            <a href="/">Home</a>
            <a href="/">Home</a>
            <a href="/">Home</a>
            <a href="/">Home</a>
            </div>
          </div>
          <div className="FooterContactUs">
            <h4>Contact Us</h4>
            <div className="FooterContactUsLinks">
              <a href="/">Facebook</a>
              <a href="/">Facebook</a>
              <a href="/">Facebook</a>
            </div>
          </div>
          <div className="FooterSocialMedia">
            <h4>Social Media</h4>
            <a href="/">icon</a>
            <a href="/">icon</a>
            <a href="/">icon</a>
          </div>
        </div>
    
        </div>
      </div>
    </div>
  );
};

export default Footer;
