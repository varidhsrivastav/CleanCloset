import React from "react";
import "./Service.css";
import donate from "./Image/solidarity.png";

const Service = () => {
  return (
    <div className="SectionMainContainer">
      <div className="SectionContainer container">
        <div className="ServiceContent">
          <div className="SectionCards">
            <div className="ServiceCardBoday">
              <div className="serviceIcon">
              <i class="fi fi-sr-user"></i>
              </div>
              <h3>Lorem</h3>
              <p>
                Lorem ipsum dolor, sit amet con sectetur adipisicing elit.
                Quaerat dolor cum,
              </p>
            </div>
            <div className="ServiceCardBoday">
            <div className="serviceIcon" id="service1">
            <i class="fi fi-sr-user" ></i>
              </div>
              <h3>Lorem</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quaerat dolor cum,
              </p>
            </div>
            <div className="ServiceCardBoday">
            <div className="serviceIcon" id="service1">
            <i class="fi fi-sr-user" ></i>
              </div>
              <h3>Lorem</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quaerat dolor cum,
              </p>
            </div>
            <div className="ServiceCardBoday">
            <div className="serviceIcon">
            <i class="fi fi-sr-user"></i>
              </div>
              <h3>Lorem</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quaerat dolor cum,
              </p>
            </div>
          </div>
          <div className="ServiceSectionImage">
            <h6>Services</h6>
            <h1>Several donation program that can make it easier for you</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
              ipsum?
            </p>
            <div className="ServiceButton">
              <button class="button-18" role="button">
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
