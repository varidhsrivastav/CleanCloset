import React from "react";
import "./Partner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import cbf from "./Image/clothsBoxFoundation.png";
import gf from "./Image/gf.png";
import logo from "./Image/logo.gif";
import logo2 from "./Image/logo.png";
import musk from "./Image/MuskLogo.png";
import nkf from "./Image/nkf.png";
import smf from "./Image/smf.webp";
import udaan from "./Image/udaan-new-logo-big.png";

const Partners = () => {
  return (
    <div className="ParterMainContainer">
      <h1>Trusted By</h1>
      <div className="PartnerContainer container">
        <div className="CompaniesLogo">
          <Swiper
            spaceBetween={50}
            slidesPerView={5}
            autoplay={{
              delay: 1500,
             
            }}
            modules={[Autoplay, Pagination, Navigation]}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div className="Logo1 logo">
                <img src={cbf} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Logo2 logo">
                <img src={gf} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Logo3 logo">
                <img src={logo} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Logo4 logo">
                <img src={logo2} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Logo5 logo">
                <img src={musk} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Logo5 logo">
                <img src={nkf} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Logo5 logo">
                <img src={smf} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Logo5 logo">
                <img src={udaan} alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Partners;
