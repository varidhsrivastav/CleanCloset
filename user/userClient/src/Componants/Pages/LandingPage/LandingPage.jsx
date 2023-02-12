import React from 'react';
import DonateNgoCrad from '../Footer/FooterComponants/DonateNgoCard/DonateNgoCrad';
import DonationProgram from './LandingPageComponents/DonationProgram/DonationProgram';
import Intro from './LandingPageComponents/HeroSection/Intro';
import HowWeWork from './LandingPageComponents/HowWeWork/HowWeWork';
import IntroCard from './LandingPageComponents/IntroCard/IntroCard';
import MakingDiff from './LandingPageComponents/MakingDiff/MakingDiff';
import Partners from './LandingPageComponents/Partners/Partners';
import RrrPage from './LandingPageComponents/RrrPage/RrrPage';
import Service from './LandingPageComponents/Services/Service';
import LandingPageStats from './LandingPageComponents/Stats/LandingPageStats';
import Testimonials from './LandingPageComponents/Testimonials/Testimonials';

const LandingPage = () => {
  return (
    <div>
      <Intro/>
      <RrrPage/>
      <Partners/>
      <LandingPageStats/>
      <Service/>
      <DonationProgram/>
      <MakingDiff/>
      <HowWeWork/>
      <Testimonials/>
      <DonateNgoCrad/>
    </div>
  )
}

export default LandingPage
