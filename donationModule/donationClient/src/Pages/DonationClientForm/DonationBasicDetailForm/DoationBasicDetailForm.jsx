import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import logo from "./Image/CleanCloset.png";
import verify from "./Image/pin.png";
import "./DonationBasicDetail.css";
import "swiper/css";
import "swiper/css/pagination";

const DoationBasicDetailForm = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
    console.log("clicked");
  };

  if (modal) {
    document.body.classList.add("active-modal");
    console.log("clicke2");
  } else {
    document.body.classList.remove("active-modal");
    console.log("clicke3");
  }

  return (
    <div className="DoationBasicDetailFormMContainer">
      <div className="DoationBasicDetailFormContainer">
        <div className="DoationBasicDetailFormLSide">
          <div className="DoationBasicDetailFormLSideC">
            <div className="DoationBasicDetailFormLogo">
              <img src={logo} alt="" />
            </div>
            <div className="DoationBasicDetailFormIntroContent">
              <h1>Start your journey with us</h1>
              <p>
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem
                ipsum dolor sit amet.
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
        <div className="DoationBasicDetailFormRSide">
          <div className="DoationBasicDetailFormRSideBody">
            <h1>
              Tell us a little bit more about yourself and we'll get the ball
              rolling
            </h1>
            <div className="DoationBasicDetailFormRSideForm">
              <form action="">
                <div className="DBDFinputFields">
                  <label htmlFor="">Name</label>
                  <input type="text" placeholder="Your Full Name" />
                </div>
                <div className="DBDFinputFields">
                  <label htmlFor="">Email</label>
                  <input type="email" placeholder="you@example.com" />
                </div>
                <div className="DBDFinputFields">
                  <label htmlFor="">Phone number</label>
                  <div className="MobileOtpVerifyButton">
                    <input type="number" placeholder="+91 909 090 9090" />
                    <div className="VrifyButton">
                      <a class="button-48" onClick={toggleModal}>
                        <span class="text">Send Otp</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="DBDFSubmitbuttons">
                  <button class="button-85" role="button">
                    Button 85
                  </button>
                </div>
             
              </form>
            </div>
          </div>
        </div>
        {modal && (
                  <div className="DBDFVerifyModalContainer">
                    <div className="DBDFVerifyModalBody">
                      <div className="DBDFVerifyModalBoady">
                        <div className="DBDFVerifyModalHeading">
                          <h3>Verify Your Otp</h3>
                        </div>
                        <div className="DBDFVerifyModalImage">
                          <img src={verify} alt="" />
                        </div>
                        <div className="DBDFVerifyModalInputField">
                          <form action="">
                            <div className="DBDFVerifyModalInputFieldForm">
                              <label htmlFor="">Enter otp</label>
                              <input type="number" />
                            </div>
                          </form>
                        </div>
                        <div className="DBDFVerifyModalButton">
                          <button className="button-85">verify</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
      </div>
    </div>
  );
};

export default DoationBasicDetailForm;
