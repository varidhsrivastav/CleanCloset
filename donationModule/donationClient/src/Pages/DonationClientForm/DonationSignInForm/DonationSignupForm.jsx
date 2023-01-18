import React from 'react'
import "./DonationSignupForm.css";
import buddha from "./Image/buddha.png"
const DonationSignupForm = () => {
  return (
    <div className='DonationSignupFormMainComponants'>
      <div className="DonationSignupFormComponants">
       
        <div className="DsFLeftSide">
            <div className="DsFleftSideContent">
              <h1>Sign in to CleanClaset</h1>
            </div>
        </div>
        <div className="DsFRightSide">
        <div className="DsFRightSideContent">

          <h1>“Before giving, the mind of the giver is happy; while giving, the mind of the giver is made peaceful; and having given, the mind of the giver is uplifted.”</h1>
          <p>-Gautam Buddha</p>
        </div>
        <div className="DsFRigthSideContentImage">
          <img src={buddha} alt="" />
        </div>
        </div>
      </div>
    </div>
  )
}

export default DonationSignupForm