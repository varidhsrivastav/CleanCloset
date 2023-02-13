import React from "react";
import "./Contacts.css";
import chat from "./image/chat (1).png";
import location from "./image/location.png";
import call from "./image/phone-call.png";
import facebook from "./image/facebook.png";
import instagram from "./image/instagram.png";
import linkedin from "./image/linkedin-logo.png";
import DonateNgoCard from "../Footer/FooterComponants/DonateNgoCard/DonateNgoCrad"

const ContactUs = () => {
  return (
    <div className="ContactUsMainContainer">
      <div className="ContactUSContainer">
        <div className="ContactUsLeftSideContainer">
          <div className="ContactUsLeftSideContainerBody">
            <div className="ContactUsLeftSideIcon">
              <img src={chat} alt="" />
            </div>
            <div className="ContactUsLeftSideContents">
              <h5>Chat to us</h5>
              <p>Our friendly team is there to help</p>
              <h6>hi@cleancloset.com</h6>
            </div>
          </div>
          <div className="ContactUsLeftSideContainerBody">
            <div className="ContactUsLeftSideIcon">
              <img src={location} alt="" />
            </div>
            <div className="ContactUsLeftSideContents">
              <h5>Visit us </h5>
              <p>Come say hello at our office HQ</p>
              <h6>
                100 World trade center, <br /> Bangalore, karnataka
              </h6>
            </div>
          </div>
          <div className="ContactUsLeftSideContainerBody">
            <div className="ContactUsLeftSideIcon">
              <img src={call} alt="" />
            </div>
            <div className="ContactUsLeftSideContents">
              <h5>Call us </h5>
              <p>Mon-Fri from 8am to 5pm</p>
              <h5>+91 9565178122</h5>
            </div>
          </div>
          <div className="ContactUsLeftSideContainerSocialIcon">
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={linkedin} alt="" />
          </div>
        </div>
        <div className="ContactUsFormSideContainer">
          <div className="ContactUsFormSideContainerHeading">
            <h1>We'd love to hear from you</h1>
            <p>We have offices and team all around the world.</p>
          </div>
          <div className="ContactUsFormSideContainerForm">
            <form action="">
              <div className="ContactUsFormSideContainerFormInputF">
                <input type="text" placeholder="Your Name" />
              </div>{" "}
              <div className="ContactUsFormSideContainerFormInputF">
                <input type="email" placeholder="example@email.com" />
              </div>{" "}
              <div className="ContactUsFormSideContainerFormInputF">
                <label htmlFor="">Tell us a little more </label>
                <textarea name="TellAbout" id="" cols="10" rows="3"></textarea>
              </div>
              <div className="ContactUsFormSideContainerFormRadioButton">
                <p>You are a</p>
                <input type="radio" name="NGO" id="ngo" />
                <label htmlFor="ngo" className="button-1">
                  NGO
                </label>
                <input type="radio" name="NGO" id="donor" />
                <label htmlFor="donor" className="button-1">
                  Donor
                </label>
              </div>
              <div className="ContactUsSUbmitButton">
                <button class="button-31" role="button">
                  Let's get started
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <DonateNgoCard/>
    </div>

  );
};

export default ContactUs;
