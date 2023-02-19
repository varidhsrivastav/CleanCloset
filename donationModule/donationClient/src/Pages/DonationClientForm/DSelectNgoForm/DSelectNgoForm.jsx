import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import logo from "./Image/CleanCloset.png";
// import verify from "./Image/pin.png";
import "./DSelectNgoForm.css";
import "swiper/css";
import "swiper/css/pagination";

const DSelectNgoForm = () => {
  return (
    <div className="DSelectNgoFormMainContainer">
      <div className="DSelectNgoFormContainer">
        <div className="DSelectNgoFormLside">
          <div className="DSelectNgoFormLSideC">
            <div className="DSelectNgoFormLogo">
              <img src={logo} alt="" />
            </div>
            <div className="DSelectNgoFormIntoContent">
              <h1>Start your journey with us</h1>
              <p>
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit  
                 amet. Lorem ipsum dolor sit amet.
              </p>
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
                        <img src={logo} alt="" />
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
                        <img src={logo} alt="" />
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
      </div>
    </div>
  );
};

export default DSelectNgoForm;
