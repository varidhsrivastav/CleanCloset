import React from "react";
import "./HowWeWork.css";
import pickup from "./Image/delivery.png";
import donate from "./Image/healthcare.png"
import reward from "./Image/reward.png"
const HowWeWork = () => {
  return (
    <div className="HowWeMainContainer ">
      <div className="howweworkcontainer container">
      <h6>Work</h6>
        <h1>How does it work?</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex!
        </p>
        <div className="HowWeWorkCardContainer">
          <div className="HowWeWOrkCardBody">
            <div className="HowWeWorkCardicon">
             <img src={pickup} alt="" />
            </div>
            <div className="HwwCardHeading">
              <h3>Schedule a pickup</h3>
            </div>
            <div className="HwwCardPara">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
              soluta.
            </div>
            <div className="HwwCardButton">
<button class="button-34" role="button">Donate Now</button>
            </div>
          </div>
          <div className="HowWeWOrkCardBody " id="donateatyour">
            <div className="HowWeWorkCardicon">
              <img src={donate} alt="" />
            </div>
            <div className="HwwCardHeading" >
              <h3 >Donate at Doorstep</h3>
            </div>
            <div className="HwwCardPara">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
              soluta.
            </div>
            <div className="HwwCardButton">
<button class="button-34" role="button">Donate Now</button>
            </div>
          </div>
          <div className="HowWeWOrkCardBody">
            <div className="HowWeWorkCardicon">
              <img src={reward} alt="" />
            </div>
            <div className="HwwCardHeading">
              <h3>Get Certeified</h3>
            </div>
            <div className="HwwCardPara">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
              soluta.
            </div>
            <div className="HwwCardButton">
<button class="button-34" role="button">Donate Now</button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
