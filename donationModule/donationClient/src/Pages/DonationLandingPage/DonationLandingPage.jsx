import React from 'react'
import DonationHeader from './DonationLandingPageComponants/DonationHeader/DonationHeader'
import DonationStats from './DonationLandingPageComponants/DonationStats/DonationStats'
import DonationWork from './DonationLandingPageComponants/DonationWork/DonationWork'

const DonationLandingPage = () => {
  return (
    <div>
        <DonationHeader/>
        <DonationStats/>
        <DonationWork/>
    </div>
  )
}

export default DonationLandingPage