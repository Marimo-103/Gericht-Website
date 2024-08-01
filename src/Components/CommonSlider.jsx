import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide01 from '/Common Images/Common_Slider-img-1.png'
import slide02 from '/Common Images/Common_Slider-img-2.png'


function CommonSlider() {
  const settings = {
    dots: false,
    arrows: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 1900,
    cssEase: "linear",
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={slide01} className="w-full"/>
        </div>
        <div>
          <img src={slide02} className="w-full"/>
        </div>
      </Slider>
    </div>
  );
}

export default CommonSlider;
