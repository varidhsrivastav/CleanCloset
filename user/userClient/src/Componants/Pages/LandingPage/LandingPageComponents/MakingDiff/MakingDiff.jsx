import React from "react";
import "./Making.css";
import donate from "./Image/donate.png"
import india from './Image/imdiamap.png'
const MakingDiff = () => {
  return (
    <div className="MakingDiffMainContainer">
      <div className="MakingDiffConatiner container">
        <div className="MakingDiffPhoto">
          <img src={india} alt="" />
        </div>
        <div className="MakingDiffContent">
          <h6>Making Difference</h6>
          <h1>How we're making a difference</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            dolores sunt recusandae quo corporis quidem nam at quisquam aliquid,

          </p>
          <div className="MangingDiffInsideContent">
            <div className="MakingDiffInsideContentBody">
              <div className="MakingDiffICBodyIcon">
              <i class="fi fi-sr-bookmark"></i>
              </div>
              <div className="MakingDiffICBodyContent">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                autem vel illo fugiat nisi aperiam, veritatis velit eum.
              </div>
            </div>
            <div className="MakingDiffInsideContentBody">
              <div className="MakingDiffICBodyIcon">
              <i class="fi fi-sr-bookmark"></i>
              </div>
              <div className="MakingDiffICBodyContent">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                autem vel illo fugiat nisi aperiam, veritatis velit eum.
              </div>
            </div>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
            ratione.
          </p>
          <div className="MakingDiffButton">
          <div className="MakingDiffButtonbtn">

<button class="button-18" role="button">Button 28</button>
          </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MakingDiff;
