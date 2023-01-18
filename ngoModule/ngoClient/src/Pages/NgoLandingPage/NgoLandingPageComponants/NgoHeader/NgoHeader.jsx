import React from 'react';
import "./NgoHeade.css"

const NgoHeader = () => {
  return (
        <div className="NgoHeaderMainContainer container">
      <div className="NgoHeaderContainer 
       ">
        <div className="NgoHeaderContent">
          <h1>DID YOU KNOW?</h1>
          <p>
            “90% of people we reach out to would buy a piece of cloth only five
            times in their entire lives. The clothes you donate today will be
            worn by somebody who can not afford them as we can. Donate
            generously!
          </p>
          <div className="DonateButton">

          <button>Donate</button>
          </div>
        </div>
        <div className="NgoHeaderImage ">
          {/* <img src={Donate} alt="NgoImage" /> */}
          <lottie-player
    src="https://assets3.lottiefiles.com/packages/lf20_3dweyago.json"
              
className="NgoGif"              background="transparent"
              speed="1"
              // style="width: 300px; height: 300px;"
              loop
              // controls
              autoplay
            ></lottie-player>
        </div>
      </div>
    </div>
  )
}

export default NgoHeader