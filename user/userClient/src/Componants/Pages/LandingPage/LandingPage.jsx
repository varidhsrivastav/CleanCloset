import React from 'react'
import Intro from './LandingPageComponents/HeroSection/Intro'
import IntroCard from './LandingPageComponents/IntroCard/IntroCard'
import Service from './LandingPageComponents/Services/Service'

const LandingPage = () => {
  return (
    <div>
      <Intro/>
      {/* <IntroCard/> */}
      <Service/>
    </div>
  )
}

export default LandingPage
