import React from "react";
import "./DonationHeader.css";
import Donate from "./Image/colthpng.png";
const DonationHeader = () => {
  return (
    <div className="DonationHeaderMainContainer container">
      <div className="DonationHeaderContainer ">
        <div className="DonationHeaderContent">
          <h1>DID YOU KNOW?</h1>
          <p>
            “90% of people we reach out to would buy a piece of cloth only five
            times in their entire lives. The clothes you donate today will be
            worn by somebody who can not afford them as we can. Donate
            generously!
          </p>
          <div className="DonateButton">

          <button>Donate</button>
          </div>
        </div>
        <div className="DonationHeaderImage ">
          {/* <img src={Donate} alt="DonationImage" /> */}
          <lottie-player
    src="https://assets3.lottiefiles.com/packages/lf20_3dweyago.json"
              
className="donationGif"              background="transparent"
              speed="1"
              // style="width: 300px; height: 300px;"
              loop
              // controls
              autoplay
            ></lottie-player>
        </div>
      </div>
    </div>
  );
};

export default DonationHeader;
