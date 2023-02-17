import React, { useContext } from 'react'
import { multiStepContext } from '../../DonationFormContext/DonationFormContext';

const Stage5 = () => {
    const {setStep, currentStep} = useContext(multiStepContext);
  return (
    <div className='DoationBasicDetailFormRSideBody'>
      <h1>A little help in delivery</h1>
      <div className="DoationBasicDetailFormRSideForm">
        <form action="">
        <div className="DBDFinputFields">
            <label htmlFor="">Please Select the time Date and time slot </label>
            <div className="DBDFinputFieldsRadio">
              <input type="radio" name="Time&Slots" id="Day1" />
              <label htmlFor="Day1" className="Yes">
                {" "}
                01-feb-2023
              </label>
             
              <input type="radio" name="Time&Slots" id="Day2" />
              <label htmlFor="Day2" className="No">
              02-feb-2023
              </label>
              {/* <div className="DBDFinputFieldsTimeSlot">
              <div className="DBDFinputFieldsRadio">
              <input type="radio" name="Time&Slots" id="Day1" />
              <label htmlFor="Day1" className="Yes">
                {" "}
                01-feb-2023
              </label>
              <input type="radio" name="Time&Slots" id="Day2" />
              <label htmlFor="Day2" className="No">
              02-feb-2023
              </label>
              <input type="radio" name="Time&Slots" id="Day3" />
              <label htmlFor="Day3" className="No">
              03-feb-2023
              </label>
              <input type="radio" name="Time&Slots" id="Day4" />
              <label htmlFor="Day4" className="No">
              04-feb-2023
              </label>
            </div>
              </div>
              <br /> */}
              <input type="radio" name="Time&Slots" id="Day3" />
              <label htmlFor="Day3" className="No">
              03-feb-2023
              </label>
              <input type="radio" name="Time&Slots" id="Day4" />
              <label htmlFor="Day4" className="No">
              04-feb-2023
              </label>
            </div>
          </div>
        </form>
      </div>
      <div className="DonateTypeButons">
        <button className="button-85" onClick={() => setStep(4)}>
          previous
        </button>
        <button className="button-85" onClick={() => setStep(6)}>
          Submit
        </button>
      </div>
    </div>
  )
}

export default Stage5
