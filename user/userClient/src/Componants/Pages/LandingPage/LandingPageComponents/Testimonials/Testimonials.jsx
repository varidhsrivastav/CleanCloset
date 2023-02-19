import React from "react";
import "./Testimonials.css";
import man from "./image/man.png";
import quotation from "./image/quotation-mark.png";
import { Swiper, SwiperSlide, } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
const Testimonials = () => {
  return (
    <div className="TestimonialsMainContaierHeader">
      <div className="TestimonialsContainer container">
        <h6 className="work">Testimonials</h6>
        <h1 className="workh1">What they are blabbering about us </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
          voluptatibus!
        </p>
        
        <div className="TestimonialsContainerCardContainer">
              <div className="TestimonialsContainerCardBody" id="cardbody1">
            <div className="TestimonialsContainerCardBodyImage">
              <img src={man} alt="" />
            </div>
            <div className="TestimonialsContainerCardBodyContent">
              <div className="TestimonialsContainerCardBCIcon">
                <img src={quotation} alt="" />
              </div>
              <div className="TestimonialsContainerCardBCC">
                <h4>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus, dicta?
                </h4>
                <div className="TestimonialsContainerCardBCCdesignation" valign="bottom">

                <h6>Name04</h6>
                <p>Donated 1kg of </p>
                </div>
              </div>
            </div>
          </div>
          <div className="TestimonialsContainerCardBody" id="cardbody2">
            <div className="TestimonialsContainerCardBodyImage">
            <img src={man} alt="" />
            </div>
            <div className="TestimonialsContainerCardBodyContent">
              <div className="TestimonialsContainerCardBCIcon">
              <img src={quotation} alt="" />
              </div>
              <div className="TestimonialsContainerCardBCC">
                <h4>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus, dicta?
                </h4>
                <div className="TestimonialsContainerCardBCCdesignation" valign="bottom">

<h6>Name</h6>
<p>Donated 1kg of </p>
</div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
    </div>
  );
};

export default Testimonials;
