import React from 'react';
import "./OurObjective.css";
import pickup from "./Image/delivery.png";
import donate from "./Image/healthcare.png"
import reward from "./Image/reward.png"
const OurObjective = () => {
  return (
    <div className="OurObjectiveMainContainer ">
    <div className="OurObjectivecontainer container">
    {/* <h6>Work</h6> */}
      <h1>OUR
OBJECTIVES</h1>
      {/* <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex!
      </p> */}
      <div className="OurObjectiveCardContainer">
        <div className="OurObjectiveCardBody">
          <div className="OurObjectiveCardicon">
           <img src={pickup} alt="" />
          </div>
          <div className="OurObjectiveCardHeading">
            <h3>SERVING THE
DEPRIVED</h3>
          </div>
          <div className="OurObjectiveCardPara">
          Directing blankets, sleeping bags, dhurries and related products towards helping the needy across the nation and pet beds for animal welfare.


          </div>
          
        </div>
        <div className="OurObjectiveCardBody " id="donateatyour">
          <div className="OurObjectiveCardicon">
            <img src={donate} alt="" />
          </div>
          <div className="OurObjectiveCardHeading" >
            <h3 >WOMEN EMPOWERMENT</h3>
          </div>
          <div className="OurObjectiveCardPara">
            Making rural women self-reliant through training and transforming them into independent citizens
          </div>
          
        </div>
        <div className="OurObjectiveCardBody">
          <div className="OurObjectiveCardicon">
            <img src={reward} alt="" />
          </div>
          <div className="OurObjectiveCardHeading">
            <h3>Get Certeified</h3>
          </div>
          <div className="OurObjectiveCardPara">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
            soluta.
          </div>
         
        </div>
        
      </div>
    </div>
  </div>
  )
}

export default OurObjective
