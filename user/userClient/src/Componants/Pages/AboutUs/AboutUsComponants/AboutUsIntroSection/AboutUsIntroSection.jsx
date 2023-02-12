import React from 'react';
import "./AboutUsIntroSection.css";
import happychild from "./image/happy_children.jpg"

const AboutUsIntroSection = () => {
  return (
    <div className='AboutUsIntroSectionMainContainer'>
        <div className="AboutUsIntroSectionContainer">
          <div className="AboutUsImageintro">

            <img src={happychild} alt="" />
          </div>
            <h1>CREATING A GREEN IMPACT</h1>
            <p>We live in world where consumerism possesses centricity and ideas like sustainability are still an afterthought, where few privileged have excess, but millions of poor even lack essential clothing. Our mission is to eliminate the lack of clothing among these underprivileged individuals, ensure positive climate action through fabric upcycling and generate income for marginalized women through livelihood training under our recycling arm – Refresh. We aim to accelerate towards creating a green impact and become a pioneer in the upcycling and recycling industry, a one stop solution for businesses to reuse discarded fabric.</p>
            <button className='button-18'>
              Donate Now
            </button>
        </div>
    </div>
  )
}

export default AboutUsIntroSection
