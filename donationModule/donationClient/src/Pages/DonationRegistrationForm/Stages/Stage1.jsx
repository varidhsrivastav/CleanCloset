import React, { useState } from "react";
import { useContext } from "react";
import { multiStepContext } from "../DonationFormContext/DonationFormContext";
import "./Stage1.css";
import verify from "./Image/pin.png";

const Stage1 = () => {
  const { setStep, currentStep } = useContext(multiStepContext);
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
    console.log("clicked");
  };
  const handleEsckey = (e)=>{
  if  (e.keyCode === 27) 
  document.body.classList.add("active-modal");
    console.log("clicke3");
        };

  if (modal && handleEsckey) {
    document.body.classList.add("active-modal");
    console.log("clicke2");
  } else {
    document.body.classList.remove("active-modal");
    console.log("clicke3");
  }

  return (
    <div className="DoationBasicDetailFormRSideBody">
      <h1>
        Tell us a little bit more about yourself
      </h1>
      <div className="DoationBasicDetailFormRSideForm">
        <form action="">
          <div className="DBDFinputFields">
            <label htmlFor="">Name</label>
            <input type="text" placeholder="Your Full Name" />
          </div>
          <div className="DBDFinputFields">
            <label htmlFor="">Email</label>
            <input type="email" placeholder="you@example.com" />
          </div>
          <div className="DBDFinputFields">
            <label htmlFor="">Phone number</label>
            <div className="MobileOtpVerifyButton">
              <input type="number" placeholder="+91 909 090 9090" />
              <div className="VrifyButton">
                <a class="button-48" onClick={toggleModal}>
                  <span class="text">Send Otp</span>
                </a>
              </div>
            </div>
          </div>
          <div className="DBDFinputFields">
            <label htmlFor="">Gender</label>
            <div className="DBDFGender">
              <input type="radio" name="Gender" id="Male" />
              <label htmlFor="Male" className="Male">
                Male
              </label>
              <input type="radio" name="Gender" id="Female" />
              <label htmlFor="Female" className="Female">
                Female
              </label>
              <input type="radio" name="Gender" id="Bisexual" />
              <label htmlFor="Bisexual" className="Bisexual">
                Bisexual
              </label>
            </div>
          </div>
          <div className="DBDFinputFields">
            <label htmlFor="">Are you having any type of skin infection</label>
            <div className="DBDFinputFieldsRadio">
              <input type="radio" name="Infection" id="Yes" />
              <label htmlFor="Yes" className="Yes">
                Yes
              </label>
              <input type="radio" name="Infection" id="No" />
              <label htmlFor="No" className="No">
                No
              </label>
            </div>
          </div>
          <div className="DBDFinputFields">
            <label htmlFor="">Please Specify the Infection type</label>
            <input type="text" placeholder="Serocise" />
          </div>
          <div className="DBDFSubmitbuttons">
            <button class="button-85" role="button" onClick={() => setStep(2)}>
              Next
            </button>
          </div>
        </form>
      </div>
        {modal && (
          <div className="DBDFVerifyModalContainer">
            <div className="DBDFVerifyModalBody">
              <div className="DBDFVerifyModalBoady">
                <div className="DBDFVerifyModalHeading">
                  <h3>Verify Your Otp</h3>
                </div>
                <div className="DBDFVerifyModalImage">
                  <img src={verify} alt="" />
                </div>
                <div className="DBDFVerifyModalInputField">
                  <form action="">
                    <div className="DBDFVerifyModalInputFieldForm">
                      <label htmlFor="">Enter otp</label>
                      <input type="number" />
                    </div>
                  </form>
                </div>
                <div className="DBDFVerifyModalButton">
                  <button className="button-85">verify</button>
                </div>
              </div>
            </div>
          </div>
        )}
    </div>
  );
};

export default Stage1;
