import React from 'react'
import DonationHeader from './DonationLandingPageComponants/DonationHeader/DonationHeader'
import DonationHow from './DonationLandingPageComponants/DonationHow/DonationHow'
import DonationStats from './DonationLandingPageComponants/DonationStats/DonationStats'
import DonationTagLine from './DonationLandingPageComponants/DonationTagLine/DonationTagLine'
import DonationVision from './DonationLandingPageComponants/DonationVision/DonationVision'
import DonationWork from './DonationLandingPageComponants/DonationWork/DonationWork'

const DonationLandingPage = () => {
  return (
    <div>
        <DonationHeader/>
        <DonationTagLine/>
        <DonationHow/>
        {/* <DonationStats/> */}
        {/* <DonationWork/> */}
        <DonationVision/>
    </div>
  )
}

export default DonationLandingPage