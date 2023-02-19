import React, { useContext } from "react";
import { multiStepContext } from "./DonationFormContext/DonationFormContext";
import "./DonationRegistration.css";
import Stage1 from "./Stages/Stage1";
import Stage2 from "./Stages/Stage2";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "../Globalcss/Button.css";
import register from "./Stages/Image/write.png"
import verify from "./Stages/Image/pin.png";
import "swiper/css";
import "swiper/css/pagination";
import Stage3 from "./Stages/Stage3/Stage3";
import Stage4 from "./Stages/Stage4/Stage4";
import Stage5 from "./Stages/Stage5/Stage5";
import Stage6 from "./Stages/Stage6/Stage6";
// import Stage3 from "./Stages/Stage3/Stage3";

const DonationRegistration = () => {
  const { setStep, currentStep } = useContext(multiStepContext);
  const ShowStep = (step) => {
    switch (step) {
      case 1:
        return <Stage1 />;
      case 2:
        return <Stage2 />;
      case 3:
        return <Stage3 />;
        case 4:
        return <Stage4/>;
        case 5:
        return <Stage5/>;
        case 6:
        return <Stage6/>;
    }
  };
  return (
    <div className="DoationBasicDetailFormMContainer">
      <div className="DoationBasicDetailFormContainer">
        <div className="DoationBasicDetailFormLSide">
          <div className="DoationBasicDetailFormLSideC">
          <div className="DoationBasicDetailFormLogo">
            <img src={register} alt="" />
          </div>
            <div className="DoationBasicDetailFormIntroContent">
              <h1>Come ahead and take part in saving lives.</h1>
            </div>
            <div className="DoationBasicDetailFormCourosel">
              <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                  delay: 2500,
                }}
                pagination={{
                  clickable: true,
                }}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <div className="DoationBasicDetailFormCouroselBody">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      loren10 Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Soluta, earum. Iure,sit?
                    </p>
                    <div className="DBDFProfileinfo">
                      <div className="profilePic">
                        <img src={verify} alt="" />
                      </div>
                      <div className="NameAndNgoName">
                        <div className="profielName">
                          <h6>Varidh Srivastav</h6>
                          <p>CleanCloset</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="DoationBasicDetailFormCouroselBody">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      loren10 Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Soluta, earum. Iure,sit?
                    </p>
                    <div className="DBDFProfileinfo">
                      <div className="profilePic">
                        <img src={verify} alt="" />
                      </div>
                      <div className="NameAndNgoName">
                        <div className="profielName">
                          <h6> Mineh H Patel</h6>
                          <p>CleanCloset</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        <div className="DoationBasicDetailFormRSide">
          <form action="">{ShowStep(currentStep)}</form>
        </div>
      <hr />
      </div>
    </div>
  );
};

export default DonationRegistration;
