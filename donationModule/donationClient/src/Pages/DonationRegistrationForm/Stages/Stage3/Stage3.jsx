import React, { useContext } from "react";
import { multiStepContext } from "../../DonationFormContext/DonationFormContext";
import "./Stage3.css";

const Stage3 = () => {
  const { setStep, currentStep } = useContext(multiStepContext);
  return (
    <div className="DoationBasicDetailFormRSideBody">
      <h1>Tell us about you clothes</h1>
      <div className="DoationBasicDetailFormRSideForm">
        <form action="">
        <div className="DBDFinputFields">
            <label htmlFor="">Total Number of clothes</label>
            <div className="MobileOtpVerifyButton">
              <input type="number" placeholder="5" />
            </div>
          </div>
          <div className="DBDFinputFields">
            <label htmlFor="">How old are your clothes</label>
            <div className="DBDFinputFieldsRadio">
              <input type="radio" name="UsedDuration" id="5Months" />
              <label htmlFor="5Months" className="Yes">
                {" "}
                &#60; 5 months
              </label>
              <input type="radio" name="UsedDuration" id="15Months" />
              <label htmlFor="15Months" className="No">
                &gt; 6 months and &lt; 1.5 years
              </label>
              <input type="radio" name="UsedDuration" id="25Months" />
              <label htmlFor="25Months" className="No">
                &gt; 1.5 years and &lt; 2.5 years
              </label>
              <input type="radio" name="UsedDuration" id="35Months" />
              <label htmlFor="35Months" className="No">
                &gt; 2.5 years{" "}
              </label>
            </div>
          </div>
          
          <div className="DBDFinputFields">
            <label htmlFor="">How old are your clothes</label>
            <div className="DBDFinputFieldsRadio">
              <input type="radio" name="UsedCondition" id="New" />
              <label htmlFor="New" className="No">
                {" "}
             Best (In new condition)
              </label>
              <input type="radio" name="UsedCondition" id="Medium" />
              <label htmlFor="Medium" className="No">
                Good (Some torns only )
              </label>
              <input type="radio" name="UsedCondition" id="Average" />
              <label htmlFor="Average" className="No">
                Average (Patchs and holes in cloth)
              </label>
              <input type="radio" name="UsedCondition" id="Worst" />
              <label htmlFor="Worst" className="Yes">
                Only for recyle 
              </label>
            </div>
          </div>
        </form>
      </div>
      <div className="DonateTypeButons">
        <button className="button-85" onClick={() => setStep(2)}>
          previous
        </button>
        <button className="button-85" onClick={() => setStep(4)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Stage3;
