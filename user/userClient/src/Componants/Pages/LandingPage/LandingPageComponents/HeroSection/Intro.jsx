import React from "react";
import "./Intro.css";
import india from "./Image/indiamap.png";
import donate from "./Image/colthpng.png"

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
              <a href="">discover now</a>
            </div>
          </div>
        </div>
        <div className="IntroImageSide">
          <div className="IntroMapImage">
            <img src={donate} alt="" />
            {/* <lottie-player
    src="https://assets3.lottiefiles.com/packages/lf20_3dweyago.json"
              background="transparent"
              speed="1"
              // style="width: 300px; height: 300px;"
              loop
              // controls
              autoplay
            ></lottie-player> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
