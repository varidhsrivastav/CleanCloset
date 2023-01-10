import React from 'react'
import Intro from './LandingPageComponents/HeroSection/Intro'
import IntroCard from './LandingPageComponents/IntroCard/IntroCard'
import MakingDiff from './LandingPageComponents/MakingDiff/MakingDiff'
import Service from './LandingPageComponents/Services/Service'

const LandingPage = () => {
  return (
    <div>
      <Intro/>
      <Service/>
      <MakingDiff/>
    </div>
  )
}

export default LandingPage
