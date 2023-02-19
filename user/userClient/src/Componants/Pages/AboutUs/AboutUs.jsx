import React from 'react';
import DonateNgoCard from "../Footer/FooterComponants/DonateNgoCard/DonateNgoCrad"
import AboutUsIntroSection from './AboutUsComponants/AboutUsIntroSection/AboutUsIntroSection';
import OurObjective from './AboutUsComponants/OurObjective/OurObjective';
import OurStory from './AboutUsComponants/OurStory/OurStory';

const AboutUs = () => {
  return (
    <div className='AboutUsComponants'>
      <AboutUsIntroSection/>
      <OurStory/>
      <OurObjective/>
      <DonateNgoCard/>
    </div>
  )
}

export default AboutUs
