import React from "react";
import "./DonateNgoCard.css";

const DonateNgoCrad = () => {
  return (
    <div className="FooterNgoCardMainSection">
      <div className="FooterAddNgoSection container">
        <div className=" FooterAddNgoSectioncontainer">
          <div className="AddNgoContent">
            <h1> Join Our action</h1>
            <h1>Everyone can help</h1>
          </div>
          <div className="AddNgoButton">
            <button class="button-18" role="button">
              Add ngo
            </button>
            <button class="button-18" role="button">
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateNgoCrad;
