import React, { useContext, useState } from 'react'
import { multiStepContext } from '../../DonationFormContext/DonationFormContext';

import "./Stage4.css"
const Stage4 = () => {
    const {setStep, currentStep} = useContext(multiStepContext);
  return (
    <div className='DoationBasicDetailFormRSideBody'>
      <h1>Let Meet each other </h1>
      <div className="DoationBasicDetailFormRSideForm">
        <form action="">
            <div className="DBDFinputFieldAddress">
                <div className="DBDFinputFieldsAline">
                <div className="DBDFinputFields">
                    <label htmlFor="">Addres Line 1</label>
                    <input type="text" name="" id="" placeholder='Flat No, Floor No, street '/>
                </div>
                <div className="DBDFinputFields">
                    <label htmlFor="">Addres Line 2</label>
                    <input type="text" name="" id="" placeholder='LandMark'/>
                </div>
                </div>
                <div className="DBDFinputFieldsAlineStates">
                <div className="DBDFinputFields">
                    <label htmlFor="">State</label>
                    <input type="text" name="" id="" placeholder='Uttar Pradesh'/>
                </div>
                <div className="DBDFinputFields">
                    <label htmlFor="">City</label>
                    <input type="text" name="" id="" placeholder='Varanasi'/>
                </div>
                </div>
                <div className="DBDFinputFieldsAlineStates">
                <div className="DBDFinputFields">
                    <label htmlFor="">Country</label>
                    <input type="text" name="" id="" placeholder='India'/>
                </div>
                <div className="DBDFinputFields">
                    <label htmlFor="">Pincode</label>
                    <input type="number" name="" id="" placeholder='221401'/>
                </div>
                </div>
            </div>
        </form>
      </div>
      <div className="DonateTypeButons">
        <button className="button-85" onClick={() => setStep(3)}>
          previous
        </button>
        <button className="button-85" onClick={() => setStep(5)}>
          Next
        </button>
      </div>
    </div>
  )
}

export default Stage4
