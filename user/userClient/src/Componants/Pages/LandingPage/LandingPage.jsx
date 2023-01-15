import React from 'react'
import Intro from './LandingPageComponents/HeroSection/Intro'
import HowWeWork from './LandingPageComponents/HowWeWork/HowWeWork'
import IntroCard from './LandingPageComponents/IntroCard/IntroCard'
import MakingDiff from './LandingPageComponents/MakingDiff/MakingDiff'
import Partners from './LandingPageComponents/Partners/Partners'
import Service from './LandingPageComponents/Services/Service'

const LandingPage = () => {
  return (
    <div>
      <Intro/>
      <Service/>
      <HowWeWork/>
      <MakingDiff/>
      <Partners/>
    </div>
  )
}

export default LandingPage
