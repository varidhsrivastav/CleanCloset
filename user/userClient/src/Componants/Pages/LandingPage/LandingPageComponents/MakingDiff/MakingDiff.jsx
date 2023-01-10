import React from "react";
import "./Making.css";

import india from './Image/indiapicMaking.png'
const MakingDiff = () => {
  return (
    <div className="MakingDiffMainContainer">
      <div className="MakingDiffConatiner">
        <div className="MakingDiffPhoto">
          <img src={india} alt="" />
        </div>
        <div className="MakingDiffContent">
          <h1>How we're making a difference</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            dolores sunt recusandae quo corporis quidem nam at quisquam aliquid,
            itaque voluptatem assumenda, nihil totam consequatur consectetur
            possimus repudiandae similique incidunt.
          </p>
          <div className="MangingDiffInsideContent">
            <div className="MakingDiffInsideContentBody">
              <div className="MakingDiffICBodyIcon">
                <lord-icon
                  src="https://cdn.lordicon.com/tqywkdcz.json"
                  trigger="hover"
                ></lord-icon>
              </div>
              <div className="MakingDiffICBodyContent">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                autem vel illo fugiat nisi aperiam, veritatis velit eum.
              </div>
            </div>
            <div className="MakingDiffInsideContentBody">
              <div className="MakingDiffICBodyIcon">
                <lord-icon
                  src="https://cdn.lordicon.com/tqywkdcz.json"
                  trigger="hover"
                ></lord-icon>
              </div>
              <div className="MakingDiffICBodyContent">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                autem vel illo fugiat nisi aperiam, veritatis velit eum.
              </div>
            </div>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
            ratione.
          </p>
          <div className="MakingDiffButton">
            <button>Donate Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakingDiff;
