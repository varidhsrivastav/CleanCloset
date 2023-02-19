import React from "react";
import "./DonationProgram.css";
import donationprog from "./image/images.png";
import donationimage2 from "./image/download.jpeg"
const DonationProgram = () => {
  return (
    <div className="DonationProgramMainContainer">
      <div className="DonationProgramContainer container">
        <h6>Featured Donations</h6>
        <h1>Some Urgent Donation Program</h1>
        <div className="DonationProgramCardContainer">
          <div className="DonationProgramCardBody">
            <div className="DonationProgramCardImage">
            <img src={donationimage2} alt="" />
            </div>
            <div className="DonationProgramCardContent">
              <h4>Help orphans to live happily</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                voluptate?
              </p>
              <div className="DonationProgramCardProgressBar">
                <div class="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "35%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    25%
                  </div>
                </div>
                <h6>Target: 50</h6>
              </div>
              <div className="DonateNowButton">
                <button class="button-18" role="button">
                  <span class="text">Donate now</span>
                </button>
              </div>
            </div>
          </div>
          <div className="DonationProgramCardBody">
            <div className="DonationProgramCardImage">
              <img src={donationimage2} alt="" />
            </div>
            <div className="DonationProgramCardContent">
              <h4>Help orphans to live happily</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                voluptate?
              </p>
              <div className="DonationProgramCardProgressBar">
                <div class="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    25%
                  </div>
                </div>
                <h6>Target: 50</h6>
               
              </div>
              <div className="DonateNowButton">
                <button class="button-18" role="button">
                  <span class="text">Donate now</span>
                </button>
              </div>
            </div>
          </div>
          <div className="DonationProgramCardBody">
            <div className="DonationProgramCardImage">
            <img src={donationimage2} alt="" />
            </div>
            <div className="DonationProgramCardContent">
              <h4>Help orphans to live happily</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                voluptate?
              </p>
              <div className="DonationProgramCardProgressBar">
                <div class="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    25%
                  </div>
                </div>
                <h6>Target: 50</h6>
              </div>
              <div className="DonateNowButton">
                <button class="button-18" role="button">
                  <span class="text">Donate now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationProgram;
