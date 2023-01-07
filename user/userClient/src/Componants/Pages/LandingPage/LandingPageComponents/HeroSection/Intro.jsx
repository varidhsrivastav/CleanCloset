import React from "react";
import "./Intro.css";
import india from "./Image/imdiamap.png";

const Intro = () => {
  return (
    <div className="introMainComponets">
      <div className="IntroComponents">
        <div className="IntroContentSide">
          <h1>A world Where no child's life is torn apart by war</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
            necessitatibus, laborum ab architecto delectus quo officia quam
            dignissimos ex libero!
          </p>
          <div className="IntroButtons">
            <div className="DonateButtons">
              <button class="button-86" role="button">
                Donate Now
              </button>
            </div>
            <div className="DiscoverButton">
                <a href="">
                    discover now
                </a>
            </div>
          </div>
        </div>
        <div className="IntroImageSide">
          <div className="IntroMapImage">
            <img src={india} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
