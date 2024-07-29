import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide01 from '/Home Images/Chef-1.png'
import slide02 from '/Home Images/Chef-2.png'


function ChefsWorld({className}) {
  const settings = {
    dots: false,
    arrows: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
  };
  return (
    <div className={`slider-container ${className}`}>
      <Slider {...settings}>
        <div>
          <img src={slide01} className="w-full h-full block"/>
        </div>
        <div>
          <img src={slide02} className="w-full h-full block"/>
        </div>
      </Slider>
    </div>
  );
}

export default ChefsWorld;
