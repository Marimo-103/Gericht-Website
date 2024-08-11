import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide01 from '/Home Images/introSlider_img-1.jpg'
import slide02 from '/Home Images/introSlider_img-2.jpg'
import slide03 from '/Home Images/introSlider_img-3.jpg'


function Fade() {
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
          <img src={slide01} className="w-full h-full"/>
        </div>
        <div>
          <img src={slide02} className="w-full h-full"/>
        </div>
        <div>
          <img src={slide03} className="w-full h-full"/>
        </div>
      </Slider>
    </div>
  );
}

export default Fade;
