import React from 'react';
import { NavLink } from 'react-router-dom';
import "./MainLandingPage.css";
import hands from "./image/hands-removebg-preview.png"
const MainLandingPage = () => {
  return (
    <div className='MainLandingPageMainContainer'>
      <div className="MainLandingPageContainer">
        <div className="MainLandingPageContainerIntro">
            <h1>Uplift.</h1>
            <h1>Donate.</h1>
            <h1>Support.</h1>
        </div>
        <div className="MainLandingPageContainerPara">
        {/* <h4>When you <span className="orange">donate</span> to a <span className="blue">charity</span> , you <span className="orange">gain</span>  more than you <span className="blue">lose.</span> </h4> */}
        <h5>Maybe your small contribution could get some clothes for a young boy during the chilly nights, and donate for a change.</h5>
        </div>
        <div className="MainLandingPageContainerButtonsConatiner">
        <div className="MainLandingPageContainerButtons1">
        <NavLink  to="/DonorLandingPage">

        <button className='DonateButton'>
  <span class="button_top"> Donate Now
  </span>
</button>
        </NavLink>
        </div>
        <div className="MainLandingPageContainerButtons2">
     
<button class="button-28" role="button">ADD NGO</button>

        </div>
        </div>
      </div>
        <div className="MainLandingPageMainContainerImg">

          <img src={hands} alt="" />
        </div>
    </div>
  )
}

export default MainLandingPage
